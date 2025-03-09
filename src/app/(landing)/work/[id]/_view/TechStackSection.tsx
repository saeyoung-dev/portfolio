import { TechStackData } from '@/types/work';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Props {
  techStack: TechStackData;
  className?: string;
}

type StackKey = 'frontend' | 'backend';

export default function TechStackSection({ techStack, className }: Props) {
  const frontendItems = techStack.frontend || [];
  const backendItems = techStack.backend || [];

  const centerStack = (
    frontendItems.length >= backendItems.length ? 'frontend' : 'backend'
  ) as StackKey;
  const sideStack = (
    frontendItems.length >= backendItems.length ? 'backend' : 'frontend'
  ) as StackKey;

  return (
    <section className={cn('w-full container px-48', className)}>
      <div className="flex flex-col gap-8">
        <Badge>TECH STACK</Badge>
        <div className="flex justify-between gap-12 items-start text-center bg-white py-8 px-12 rounded-2xl shadow border border-neutral-100">
          {techStack[sideStack] && (
            <div
              className={cn(
                'flex flex-col gap-4',
                Object.keys(techStack).length === 2 ? 'w-1/3' : 'w-1/4'
              )}
            >
              <h4 className="text-2xl font-medium text-green-900">
                {sideStack === 'frontend' ? 'Frontend' : 'Backend'}
              </h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                {techStack[sideStack].join(', ')}
              </p>
            </div>
          )}
          {techStack[centerStack] && (
            <div
              className={cn(
                'flex flex-col gap-4',
                Object.keys(techStack).length === 2 ? 'w-2/3' : 'w-2/4'
              )}
            >
              <h4 className="text-2xl font-medium text-green-900">
                {centerStack === 'frontend' ? 'Frontend' : 'Backend'}
              </h4>
              <p className="text-lg text-green-900/80 leading-relaxed text-balance">
                {techStack[centerStack].join(', ')}
              </p>
            </div>
          )}
          {techStack.tools && (
            <div
              className={cn(
                'flex flex-col gap-4',
                Object.keys(techStack).length === 2 ? 'w-1/3' : 'w-1/4'
              )}
            >
              <h4 className="text-2xl font-medium text-green-900">
                {techStack.tools.label}
              </h4>
              <p className="text-lg text-green-900/80 leading-relaxed">
                {techStack.tools.items.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
