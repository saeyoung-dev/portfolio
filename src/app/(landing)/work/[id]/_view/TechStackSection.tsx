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
    <section
      className={cn(
        'w-full container sm:px-8 md:px-16 lg:px-32 xl:px-48',
        className
      )}
    >
      <div className='flex flex-col gap-4 md:gap-8'>
        <Badge>TECH STACK</Badge>
        <div className='flex flex-col md:flex-row justify-between gap-4 sm:gap-6 md:gap-12 bg-white py-6 px-8 md:py-8 md:px-12 rounded-2xl shadow border border-neutral-100'>
          {techStack[sideStack] && (
            <div
              className={`w-full flex flex-col gap-1 md:text-center sm:gap-2 md:gap-4 ${
                Object.keys(techStack).length === 2 ? 'lg:w-1/3' : 'lg:w-1/4'
              }`}
            >
              <h4 className='text-xl md:text-2xl font-medium text-green-900'>
                {sideStack === 'frontend' ? 'Frontend' : 'Backend'}
              </h4>
              <p className='text-base md:text-lg text-green-900/80 leading-relaxed'>
                {techStack[sideStack].join(', ')}
              </p>
            </div>
          )}
          {techStack[centerStack] && (
            <div
              className={`w-full flex flex-col gap-1 md:text-center sm:gap-2 md:gap-4 ${
                Object.keys(techStack).length === 2 ? 'lg:w-2/3' : 'lg:w-2/4'
              }`}
            >
              <h4 className='text-xl md:text-2xl font-medium text-green-900'>
                {centerStack === 'frontend' ? 'Frontend' : 'Backend'}
              </h4>
              <p className='text-base md:text-lg text-green-900/80 leading-relaxed text-balance'>
                {techStack[centerStack].join(', ')}
              </p>
            </div>
          )}
          {techStack.tools && (
            <div
              className={`w-full flex flex-col gap-1 md:text-center sm:gap-2 md:gap-4 ${
                Object.keys(techStack).length === 2 ? 'lg:w-1/3' : 'lg:w-1/4'
              }`}
            >
              <h4 className='text-xl md:text-2xl font-medium text-green-900'>
                {techStack.tools.label}
              </h4>
              <p className='text-base md:text-lg text-green-900/80 leading-relaxed'>
                {techStack.tools.items.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
