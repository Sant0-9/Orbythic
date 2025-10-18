'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#6366f1',
        primaryTextColor: '#fff',
        primaryBorderColor: '#4f46e5',
        lineColor: '#8b5cf6',
        secondaryColor: '#8b5cf6',
        tertiaryColor: '#10b981',
        background: '#0a0e27',
        mainBkg: '#1f2937',
        secondBkg: '#374151',
        tertiaryBkg: '#4b5563',
        textColor: '#f9fafb',
        border1: '#6b7280',
        border2: '#4b5563',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      },
    });

    if (ref.current) {
      const id = `mermaid-${Math.random().toString(36).substring(7)}`;
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      });
    }
  }, [chart]);

  return <div ref={ref} className="mermaid-container my-8 flex justify-center" />;
}
