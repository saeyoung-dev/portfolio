'use client';

import { useState } from 'react';
import { works, WORK_CATEGORIES } from '@/data/works';
import { Button } from '@/components/ui/button';
import { WorkCategory } from '@/types/work';
import WorkCard from './_view/WorkCard';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    WorkCategory | 'All'
  >('All');

  const filteredWorks = Object.values(works).filter((work) =>
    selectedCategory === 'All' ? true : work.category === selectedCategory
  );

  return (
    <main className="flex w-full flex-col items-center pt-32 pb-16 gap-8">
      <section className="w-full container px-32 text-green-900">
        <h1 className="text-6xl font-semibold tracking-tighter leading-tight">
          Work
        </h1>
        <div className="flex gap-2 mt-8 mb-2">
          <Button
            variant={selectedCategory === 'All' ? 'filtered' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedCategory('All')}
          >
            All
          </Button>
          {WORK_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'filtered' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>
      <section className="w-full container px-32 text-green-900">
        <div className="grid grid-cols-2 gap-10">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>
    </main>
  );
}
