import { cn } from '@/lib/utils';

export default function JobSummary({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'px-32 pb-16 w-full container text-green-900 2xl:hidden',
        className
      )}
    >
      <div className='border-t-2 border-green-900 pt-16' />
      <div className='flex gap-32'>
        <div className='flex-1'>
          <h2 className='text-xl font-semibold mb-4'>CURRENTLY:</h2>
          <p className='text-lg text-balance'>
            Seeking a frontend developer position in the world.
          </p>
        </div>
        <div className='flex-1'>
          <h2 className='text-xl font-semibold mb-4'>PREVIOUSLY:</h2>
          <p className='text-lg'>
            Working as a UI developer at a startup company in Seoul.
          </p>
        </div>
      </div>
    </section>
  );
}
