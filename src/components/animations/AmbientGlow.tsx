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
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      const contextWithReset = ctx as CanvasRenderingContext2D & { resetTransform?: () => void };
      if (contextWithReset.resetTransform) {
        contextWithReset.resetTransform();
      } else {
        contextWithReset.setTransform(1, 0, 0, 1, 0, 0);
      }
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      time += 0.0022;
      ctx.clearRect(0, 0, width, height);

      // Soft ambient gradient bathing the hero from above
      const ambient = ctx.createRadialGradient(
        width / 2 + Math.sin(time * 0.8) * width * 0.08,
        height * 0.18 + Math.cos(time * 0.5) * height * 0.03,
        0,
        width / 2,
        height * 0.18,
        width * 0.65
      );
      ambient.addColorStop(0, 'rgba(255, 196, 120, 0.16)');
      ambient.addColorStop(0.4, 'rgba(255, 170, 82, 0.08)');
      ambient.addColorStop(0.75, 'rgba(120, 60, 20, 0.03)');
      ambient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = ambient;
      ctx.fillRect(0, 0, width, height * 0.5);

      // Wave-like band drifting downward
      const waveTop = height * (0.14 + Math.sin(time * 0.55) * 0.015);
      const amplitude = height * 0.06 + Math.sin(time * 0.4) * height * 0.01;

      const waveGradient = ctx.createLinearGradient(0, waveTop - amplitude, 0, waveTop + amplitude * 1.6);
      waveGradient.addColorStop(0, 'rgba(255, 210, 140, 0.28)');
      waveGradient.addColorStop(0.5, 'rgba(255, 170, 82, 0.14)');
      waveGradient.addColorStop(1, 'rgba(120, 60, 20, 0)');

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = waveGradient;

      ctx.beginPath();
      ctx.moveTo(-width * 0.2, waveTop - amplitude * 0.4);
      for (let x = -width * 0.2; x <= width * 1.2; x += width / 60) {
        const progress = (x / width) * Math.PI * 2;
        const offset = Math.sin(progress + time * 1.2) * amplitude;
        ctx.lineTo(x, waveTop + offset);
      }
      ctx.lineTo(width * 1.2, 0);
      ctx.lineTo(-width * 0.2, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Subtle secondary glow to add depth
      const halo = ctx.createRadialGradient(width * 0.5, height * 0.05, 0, width * 0.5, height * 0.05, width * 0.5);
      halo.addColorStop(0, 'rgba(255, 205, 140, 0.1)');
      halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height * 0.4);

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
      className="absolute inset-0 h-full w-full pointer-events-none opacity-70"
      style={{
        mixBlendMode: 'screen',
        willChange: 'transform',
      }}
    />
  );
}
