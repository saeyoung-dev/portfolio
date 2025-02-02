import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center w-fit rounded-md border px-2 py-1.5 text-sm font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent text-green-900/70 p-0',
        primary:
          'border-transparent bg-green-900 text-beige hover:bg-green-900/80',
        secondary:
          'border-transparent bg-green-900/10 text-green-900 hover:bg-green-900/40',
        outline: 'text-green-900 border border-green-900/10 shadow-sm',
      },
      rounded: {
        full: 'rounded-full',
        medium: 'rounded-lg',
        small: 'rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'small',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
