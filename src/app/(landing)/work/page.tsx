'use client';

// import { useState } from 'react';
import { works } from '@/data/works';
import { Button } from '@/components/ui/button';
import WorkCard from './_view/WorkCard';

export default function WorkPage() {
  // const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className='flex w-full flex-col items-center pt-32 pb-16 gap-8'>
      <section className='w-full container px-32 text-green-900'>
        <h1 className='text-6xl font-semibold tracking-tighter'>Work</h1>
        <menu className='flex gap-2 mt-8'>
          <li>
            <Button variant='outline'>All</Button>
          </li>
          <li>
            <Button variant='outline'>Design</Button>
          </li>
          <li>
            <Button variant='outline'>Development</Button>
          </li>
        </menu>
      </section>
      <section className='w-full container px-32 text-green-900'>
        <div className='grid grid-cols-2 gap-8'>
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>
    </main>
  );
}
