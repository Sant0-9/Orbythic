'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface CodeProps {
  children?: string;
  className?: string;
}

interface MermaidCodeBlockProps {
  children?: {
    props?: CodeProps;
  };
  className?: string;
}

export default function MermaidCodeBlock({ children, ...props }: MermaidCodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Extract the code content and check if it's mermaid
  const codeElement = children?.props?.children;
  const className = children?.props?.className || '';
  const isMermaid = className.includes('language-mermaid');

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
    const code = typeof codeElement === 'string' ? codeElement : String(codeElement || '');

    mermaid.render(id, code).then(({ svg }) => {
      if (ref.current) {
        ref.current.innerHTML = svg;
      }
    }).catch((error) => {
      console.error('Mermaid rendering error:', error);
      if (ref.current) {
        ref.current.innerHTML = `<pre class="text-red-400">Error rendering diagram: ${error instanceof Error ? error.message : 'Unknown error'}</pre>`;
      }
    });
  }, [codeElement, isMermaid]);

  if (!isMermaid) {
    // Return normal code block
    return <pre {...props}>{children}</pre>;
  }

  return <div ref={ref} className="mermaid-container my-8 flex justify-center overflow-x-auto" />;
}
