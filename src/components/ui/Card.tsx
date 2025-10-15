import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'cosmic' | 'highlight';
  hoverable?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverable = false, glow = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl transition-all duration-300';

    const variants = {
      default: 'bg-cosmic-deep-800/50 backdrop-blur-sm border border-nebula-purple/20',
      glass: 'bg-white/5 backdrop-blur-md border border-white/10',
      cosmic: 'bg-gradient-to-br from-cosmic-deep-800 via-cosmic-deep-700 to-cosmic-deep-900 border border-nebula-purple/30',
      highlight: 'bg-gradient-to-br from-nebula-purple/10 to-stellar-blue/10 border border-nebula-purple/50',
    };

    const hoverStyles = hoverable
      ? 'hover:scale-[1.02] hover:border-nebula-purple/50 hover:shadow-xl hover:shadow-nebula-purple/20 cursor-pointer'
      : '';

    const glowStyles = glow
      ? 'shadow-lg shadow-nebula-purple/30 animate-glow'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          hoverStyles,
          glowStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pb-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-2xl font-bold text-starlight', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-starlight/70 mt-2', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-4 flex items-center', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export default Card;
