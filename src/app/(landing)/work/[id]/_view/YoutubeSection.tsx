'use client';

import { Badge } from '@/components/ui/badge';

interface YouTubeProps {
  videoId: string;
  title?: string;
}

export default function YoutubeSection({
  videoId,
  title = 'YouTube video player',
}: YouTubeProps) {
  return (
    <section className='w-full'>
      <Badge className='mb-8'>PRODUCT DEMO</Badge>
      <div className='relative w-full pt-[56.25%]'>
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-2xl'
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </section>
  );
}
