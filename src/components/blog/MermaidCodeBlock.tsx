'use client';

import { useEffect, useMemo, useRef } from 'react';
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

const MERMAID_THEME = {
  startOnLoad: true,
  theme: 'dark' as const,
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
};

let mermaidInitialized = false;

export default function MermaidCodeBlock({ children, ...props }: MermaidCodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  const codeElement = children?.props?.children;
  const className = children?.props?.className || '';
  const isMermaid = className.includes('language-mermaid');

  const code = useMemo(() => {
    if (!isMermaid) {
      return '';
    }

    const rawCode = codeElement as unknown;

    if (
      rawCode === null ||
      rawCode === undefined ||
      rawCode === false ||
      rawCode === true
    ) {
      return '';
    }

    if (typeof rawCode === 'string') {
      return rawCode.trim();
    }

    if (Array.isArray(rawCode)) {
      return rawCode
        .map((fragment) => (typeof fragment === 'string' ? fragment : String(fragment ?? '')))
        .join('')
        .trim();
    }

    return String(rawCode).trim();
  }, [codeElement, isMermaid]);

  useEffect(() => {
    if (!isMermaid || !ref.current || !code) {
      return;
    }

    if (!mermaidInitialized) {
      mermaid.initialize(MERMAID_THEME);
      mermaidInitialized = true;
    }

    const id = `mermaid-${Math.random().toString(36).substring(7)}`;

    mermaid
      .render(id, code)
      .then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      })
      .catch((error) => {
        console.error('Mermaid rendering error:', error);
        if (ref.current) {
          ref.current.innerHTML = `<pre class="text-red-400">Error rendering diagram: ${
            error instanceof Error ? error.message : 'Unknown error'
          }</pre>`;
        }
      });
  }, [code, isMermaid]);

  if (!isMermaid) {
    // Return normal code block
    return <pre {...props}>{children}</pre>;
  }

  return <div ref={ref} className="mermaid-container my-8 flex justify-center overflow-x-auto" />;
}
