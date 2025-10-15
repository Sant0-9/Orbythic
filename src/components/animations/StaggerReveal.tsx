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

    // Use Array.from to convert children to array, or use specific selector
    const children = childSelector === '> *'
      ? Array.from(container.children)
      : container.querySelectorAll(childSelector);

    const animation = gsap.from(children, {
      y: 40,
      opacity: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
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
