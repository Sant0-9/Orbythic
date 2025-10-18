'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  childSelector?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
}

export default function StaggerReveal({
  children,
  className = '',
  childSelector = '> *',
  stagger = 0.1,
  delay = 0,
  duration = 0.6
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets =
      childSelector === '> *'
        ? Array.from(container.children)
        : Array.from(container.querySelectorAll(childSelector));

    if (!targets.length) {
      return;
    }

    const animation = gsap.from(targets, {
      y: 40,
      opacity: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: container,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
        once: false,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [childSelector, stagger, delay, duration]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
