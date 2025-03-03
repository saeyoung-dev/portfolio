import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { Badge } from '@/components/ui/badge';
import { RetrospectiveData } from '@/types/work';
import { cn } from '@/lib/utils';
interface Props {
  restropective: RetrospectiveData[];
}

export default function RestropectiveSection({ restropective }: Props) {
  const { language } = useLocale();

  return (
    <section className="w-full container px-48 flex flex-col gap-8">
      <Badge>WHAT DID I LEARN?</Badge>
      <div
        className={cn(
          'flex items-center gap-6 break-keep',
          restropective.length > 1 ? 'justify-between' : 'justify-center'
        )}
      >
        {restropective.map((item, index) => (
          <div
            key={`retrospective-${index}`}
            className="flex flex-col gap-2 p-6 rounded-2xl bg-white shadow"
          >
            <h4 className="text-lg flex items-center gap-4 font-medium leading-tight text-green-900 flex-1">
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
            <div className="text-base font-medium text-neutral-600 leading-relaxed">
              {item.answer[language].map((answer, index) => (
                <p key={`retrospective-answer-${index}`}>{answer}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
