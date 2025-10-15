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

      // Create ambient glow gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 150, // Slow horizontal drift
        canvas.height * 0.3 + Math.cos(time * 0.7) * 80, // Slow vertical breathing
        0,
        canvas.width / 2,
        canvas.height * 0.3,
        canvas.width * 0.6
      );

      // Amber/warm glow colors with very low opacity
      gradient.addColorStop(0, 'rgba(251, 191, 36, 0.08)'); // Warm amber center
      gradient.addColorStop(0.3, 'rgba(245, 158, 11, 0.04)'); // Mid amber
      gradient.addColorStop(0.6, 'rgba(217, 119, 6, 0.02)'); // Faint amber
      gradient.addColorStop(1, 'rgba(180, 83, 9, 0)'); // Fade to transparent

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      style={{
        mixBlendMode: 'screen',
        willChange: 'transform',
      }}
    />
  );
}
