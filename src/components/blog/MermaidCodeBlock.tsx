'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidCodeBlockProps {
  children: string;
  className?: string;
}

export default function MermaidCodeBlock({ children, className }: MermaidCodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Check if this is a mermaid code block
  const isMermaid = className?.includes('language-mermaid');

  useEffect(() => {
    if (!isMermaid || !ref.current) return;

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
        background: 'transparent',
        mainBkg: '#1f2937',
        secondBkg: '#374151',
        tertiaryBkg: '#4b5563',
        textColor: '#f9fafb',
        border1: '#6b7280',
        border2: '#4b5563',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        fontSize: '16px',
      },
    });

    const id = `mermaid-${Math.random().toString(36).substring(7)}`;
    const code = typeof children === 'string' ? children : String(children);

    mermaid.render(id, code).then(({ svg }) => {
      if (ref.current) {
        ref.current.innerHTML = svg;
      }
    }).catch((error) => {
      console.error('Mermaid rendering error:', error);
      if (ref.current) {
        ref.current.innerHTML = `<pre className="text-red-400">Error rendering diagram</pre>`;
      }
    });
  }, [children, isMermaid]);

  if (!isMermaid) {
    return (
      <pre className={className}>
        <code>{children}</code>
      </pre>
    );
  }

  return <div ref={ref} className="mermaid-container my-8 flex justify-center" />;
}
