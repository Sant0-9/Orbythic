'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/cosmic.module.css';
import StatHighlight from '@/components/ui/StatHighlight';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star field animation
    const stars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #141a2b 50%, #0f1429 100%)' }}
      />
      
      {/* Cosmic overlay */}
      <div className={styles.cosmicBackground} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-nebula-purple" />
            <span className="text-sm text-starlight/80">Transforming Education Across the Cosmos</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-starlight">Transform Education</span>
            <br />
            <span className="text-gradient">with AI-Powered Learning</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-starlight/80 max-w-3xl mx-auto leading-relaxed"
          >
            Discover Quasera by Orbythic, the next-generation educational platform that adapts to how students learn. Join 10,000+ learners worldwide.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/quasera"
              className="group relative inline-flex items-center space-x-2 bg-cosmic-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-nebula-purple/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/solutions"
              className="inline-flex items-center space-x-2 text-starlight/80 hover:text-starlight border border-white/20 hover:border-nebula-purple/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/5"
            >
              <span>Explore Solutions</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3"
          >
            <StatHighlight value="10K+" label="Active Learners" description="Across higher-ed, bootcamp, and workforce readiness programs." />
            <StatHighlight value="95%" label="Completion Rate" description="Measured across cohorts using adaptive mastery pathways." />
            <StatHighlight value="24/7" label="AI Guidance" description="Always-on mentorship tailored to individual learning goals." />
          </motion.dl>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-nebula-purple rounded-full animate-twinkle" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-stellar-blue rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-aurora-green rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-nebula-purple rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
}
