import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'space-y-6',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow ? (
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-starlight/70 backdrop-blur-md">
          {eyebrow}
        </div>
      ) : null}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-starlight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-lg text-starlight/70 sm:text-xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
