import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { Badge } from '@/components/ui/badge';
import { RetrospectiveData } from '@/types/work';
import { renderText } from '@/utils/renderText';
import { cn } from '@/lib/utils';
interface Props {
  className?: string;
  restropective: RetrospectiveData[];
}

export default function RestropectiveSection({
  className,
  restropective,
}: Props) {
  const { language } = useLocale();

  return (
    <section
      className={cn('w-full container px-48 flex flex-col gap-8', className)}
    >
      <Badge>WHAT DID I LEARN?</Badge>
      <div
        className={cn(
          'grid gap-6 break-keep',
          restropective.length === 2 ? 'grid-cols-2' : 'grid-cols-1'
        )}
      >
        {restropective.map((item, index) => (
          <div
            key={`retrospective-${index}`}
            className="flex flex-col gap-3 p-6 rounded-2xl bg-white shadow"
          >
            <h4 className="text-xl flex items-center gap-4 font-semibold text-green-900 text-pretty">
              {item.icon ? (
                <Image
                  src={item.icon}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-8"
                />
              ) : (
                <Image
                  src={'/images/icon/restropective.png'}
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-8"
                />
              )}
              {item.question[language]}
            </h4>
            <div className="text-base font-medium text-neutral-600 flex flex-col gap-3 break-normal">
              {item.answer[language].map((answer, index) => (
                <p
                  key={`retrospective-answer-${index}`}
                  className={cn(index === 0 && 'indent-2')}
                >
                  {renderText(answer)}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
