'use client';

import {
  useState,
  useRef,
  Suspense,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import type { Points as ThreePoints } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useScroll, useTransform, MotionValue, motion, useAnimationControls } from 'framer-motion';

type NavigatorWithMemory = Navigator & { deviceMemory?: number };

export type StarfieldHandle = {
  warp: (opts?: { factor?: number; durationMs?: number }) => Promise<void>;
};

interface StarSettings {
  positions: Float32Array;
  starSize: number;
  baseSpeed: number;
}

const DEFAULT_VIEWPORT = { width: 1280, height: 720 };

const randomInSphere = (radius: number) => {
  let x = 0;
  let y = 0;
  let z = 0;
  let d = 0;

  do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    z = Math.random() * 2 - 1;
    d = x * x + y * y + z * z;
  } while (d > 1 || d === 0);

  const scale = radius / Math.cbrt(d);
  return [x * scale, y * scale, z * scale] as const;
};

const createStarPositions = (count: number, radius = 1.2) => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const [x, y, z] = randomInSphere(radius);
    const index = i * 3;
    positions[index] = x;
    positions[index + 1] = y;
    positions[index + 2] = z;
  }

  return positions;
};

const calculateStarSettings = (): StarSettings => {
  const width = typeof window === 'undefined' ? DEFAULT_VIEWPORT.width : window.innerWidth;

  if (width <= 400) {
    return {
      positions: createStarPositions(380),
      starSize: 0.0042,
      baseSpeed: 0.55,
    };
  }

  if (width <= 640) {
    return {
      positions: createStarPositions(540),
      starSize: 0.0036,
      baseSpeed: 0.65,
    };
  }

  if (width <= 768) {
    return {
      positions: createStarPositions(820),
      starSize: 0.0032,
      baseSpeed: 0.75,
    };
  }

  if (width <= 1024) {
    return {
      positions: createStarPositions(1300),
      starSize: 0.0026,
      baseSpeed: 0.9,
    };
  }

  if (width <= 1440) {
    return {
      positions: createStarPositions(1850),
      starSize: 0.0023,
      baseSpeed: 1,
    };
  }

  return {
    positions: createStarPositions(2400),
    starSize: 0.002,
    baseSpeed: 1.1,
  };
};

const useResponsiveStarSettings = () => {
  const [settings, setSettings] = useState<StarSettings>(() => calculateStarSettings());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let frame = 0;
    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setSettings(calculateStarSettings());
      });
    };

    requestUpdate();

    window.addEventListener('resize', requestUpdate, { passive: true });
    window.addEventListener('orientationchange', requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('orientationchange', requestUpdate);
    };
  }, []);

  return settings;
};

interface StarsProps {
  rotationX?: MotionValue<number>;
  rotationY?: MotionValue<number>;
  speedMultiplier: number;
  baseSpeed: number;
  starSize: number;
  positions: Float32Array;
}

const Stars = ({ rotationX, rotationY, speedMultiplier, baseSpeed, starSize, positions }: StarsProps) => {
  const pointsRef = useRef<ThreePoints | null>(null);
  const [currentRotation, setCurrentRotation] = useState({ x: 0, y: 0 });
  const isMobileRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    if (!rotationX || !rotationY) return;

    const unsubscribeX = rotationX.on('change', (x) => {
      setCurrentRotation((prev) => ({ ...prev, x }));
    });
    const unsubscribeY = rotationY.on('change', (y) => {
      setCurrentRotation((prev) => ({ ...prev, y }));
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [rotationX, rotationY]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateDeviceInfo = () => {
      isMobileRef.current = window.innerWidth <= 768;
    };

    updateDeviceInfo();

    window.addEventListener('resize', updateDeviceInfo, { passive: true });
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
    };

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => {
      mediaQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const isMobile = isMobileRef.current;
    const reduceMotion = prefersReducedMotionRef.current;
    const time = state.clock.elapsedTime;
    const autoStrength = reduceMotion ? 0 : baseSpeed * (isMobile ? 0.25 : 0.45);

    points.rotation.x = currentRotation.x + autoStrength * 0.06 * Math.sin(time * 0.16);
    points.rotation.y = currentRotation.y + autoStrength * 0.05 * Math.cos(time * 0.14);

    if (!reduceMotion) {
      const spin = delta * 0.04 * speedMultiplier * baseSpeed;
      points.rotation.z += spin;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f8fafc"
          size={starSize}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StreakOverlay = ({ isVisible }: { isVisible: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawStreaks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.18)';
      ctx.lineWidth = 1;

      const numStreaks = 8;
      for (let i = 0; i < numStreaks; i++) {
        const angle = (i / numStreaks) * Math.PI * 2;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const length = Math.min(canvas.width, canvas.height) * 0.42;

        const startX = centerX + Math.cos(angle) * 40;
        const startY = centerY + Math.sin(angle) * 40;
        const endX = centerX + Math.cos(angle) * length;
        const endY = centerY + Math.sin(angle) * length;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    let animationId: number;
    const animate = () => {
      drawStreaks();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-40"
      style={{ opacity: 0.9 }}
    />
  );
};

const StarfieldLayer = forwardRef<StarfieldHandle>((_props, ref) => {
  const { positions, starSize, baseSpeed } = useResponsiveStarSettings();
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
  });
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [isWarping, setIsWarping] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const containerControls = useAnimationControls();

  const rotationX = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 0.8]);
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 0.6]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const lowCpu = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 2;
    const { deviceMemory } = navigator as NavigatorWithMemory;
    const lowRam = typeof deviceMemory === 'number' && deviceMemory <= 2;

    setIsLowEndDevice(lowCpu || lowRam);
  }, []);

  interface WarpOptions {
    factor?: number;
    durationMs?: number;
  }

  const warpFunction = useCallback(
    async ({ factor = 5.5, durationMs = 900 }: WarpOptions = {}) => {
      if (isWarping) return;
      setIsWarping(true);

      try {
        const rampUpPromise = new Promise<void>((resolve) => {
          const start = 1;
          const target = factor;
          const duration = 240;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = start + (target - start) * progress;
            setSpeedMultiplier(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              resolve();
            }
          };

          animate();
        });

        const visualEffectsPromise = isMounted
          ? containerControls.start({
              scale: 1.04,
              filter: 'brightness(1.15)',
              transition: { duration: 0.22 },
            })
          : Promise.resolve();

        await Promise.all([rampUpPromise, visualEffectsPromise]);

        const holdDuration = Math.max(0, durationMs - 240 - 360);
        if (holdDuration > 0) {
          await new Promise((resolve) => setTimeout(resolve, holdDuration));
        }

        const rampDownPromise = new Promise<void>((resolve) => {
          const start = factor;
          const target = 1;
          const duration = 360;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = start + (target - start) * progress;
            setSpeedMultiplier(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              resolve();
            }
          };

          animate();
        });

        const resetEffectsPromise = isMounted
          ? containerControls.start({
              scale: 1,
              filter: 'brightness(1)',
              transition: { duration: 0.36 },
            })
          : Promise.resolve();

        await Promise.all([rampDownPromise, resetEffectsPromise]);
      } finally {
        setIsWarping(false);
        setSpeedMultiplier(1);
      }
    },
    [isWarping, containerControls, isMounted],
  );

  useImperativeHandle(
    ref,
    () => ({
      warp: warpFunction,
    }),
    [warpFunction],
  );

  useEffect(() => {
    const handleWarpEvent = (event: CustomEvent) => {
      const { factor, durationMs } = event.detail || {};
      warpFunction({ factor, durationMs });
    };

    window.addEventListener('starfield:warp', handleWarpEvent as EventListener);

    return () => {
      window.removeEventListener('starfield:warp', handleWarpEvent as EventListener);
    };
  }, [warpFunction]);

  if (isLowEndDevice) {
    return (
      <div
        className="fixed inset-0 -z-50 min-h-screen w-full"
        style={{
          backgroundColor: '#050510',
          contain: 'layout style paint',
        }}
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 -z-50 h-full min-h-screen w-full bg-[#050510]"
      style={{ isolation: 'isolate', contain: 'layout style paint' }}
      animate={containerControls}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        frameloop="always"
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <Stars
            rotationX={rotationX}
            rotationY={rotationY}
            speedMultiplier={speedMultiplier}
            baseSpeed={baseSpeed}
            starSize={starSize}
            positions={positions}
          />
        </Suspense>
      </Canvas>
      <StreakOverlay isVisible={speedMultiplier > 1.25} />
    </motion.div>
  );
});

StarfieldLayer.displayName = 'StarfieldLayer';

export default StarfieldLayer;
