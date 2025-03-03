import { cn } from '@/lib/utils';
import { aboutContent } from '@/data/about';
import { useLocale } from '@/hooks/useLocale';
import { renderText } from '@/utils/renderText';

export default function JobSummary({ className }: { className?: string }) {
  const { hero } = aboutContent;
  const { language } = useLocale();

  return (
    <section
      className={cn(
        'px-32 pb-16 w-full container text-green-900 2xl:hidden',
        className
      )}
    >
      <div className="border-t-2 border-green-900 pt-16" />
      <div className="flex gap-32">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">CURRENTLY:</h2>
          <p className="text-lg text-pretty break-keep font-medium leading-relaxed text-green-900/80">
            {renderText(hero.status.current[language])}
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">PREVIOUSLY:</h2>
          <p className="text-lg text-pretty break-keep font-medium leading-relaxed text-green-900/80">
            {renderText(hero.status.previous[language])}
          </p>
        </div>
      </div>
    </section>
  );
}
