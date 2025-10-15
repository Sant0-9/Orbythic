'use client';

import { useEffect, useRef } from 'react';

export default function AmbientGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      time += 0.002; // Very slow movement

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create ambient glow gradient with cool underwater hues
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 160,
        canvas.height * 0.28 + Math.cos(time * 0.65) * 90,
        0,
        canvas.width / 2,
        canvas.height * 0.28,
        canvas.width * 0.65
      );

      gradient.addColorStop(0, 'rgba(96, 165, 250, 0.16)');
      gradient.addColorStop(0.35, 'rgba(59, 130, 246, 0.08)');
      gradient.addColorStop(0.65, 'rgba(29, 78, 216, 0.04)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      style={{
        mixBlendMode: 'screen',
        willChange: 'transform',
      }}
    />
  );
}
