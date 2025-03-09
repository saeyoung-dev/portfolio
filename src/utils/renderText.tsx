'use client';

import React, { ReactNode } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';

export function renderText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|\/\/.*?\/\/)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    } else if (part.match(/\[(.*?)\]\((.*?)\)/)) {
      const [, linkText, url] = part.match(/\[(.*?)\]\((.*?)\)/)!;
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline inline-flex items-center"
        >
          {linkText}
          <ArrowUpRightIcon className="w-4 h-4" />
        </a>
      );
    } else if (part.startsWith('//') && part.endsWith('//')) {
      return <small key={index}>{part.slice(2, -2)}</small>;
    }
    return part;
  });
}
