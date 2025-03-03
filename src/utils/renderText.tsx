'use client';

import React, { ReactNode } from 'react';

export function renderText(text: string): ReactNode[] {
  const regex = /(\*\*.*?\*\*|\/\/.*?\/\/|\[\[.*?\]\]\(.*?\))/g;

  return text.split(regex).map((part, index) => {
    // bold 체크
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <b key={index} className="font-bold">
          {part.slice(2, -2)}
        </b>
      );
    }

    // small 체크
    if (part.startsWith('//') && part.endsWith('//')) {
      return <small key={index}>{part.slice(2, -2)}</small>;
    }

    // url 체크
    const linkMatch = part.match(/\[\[(.*?)\]\]\((.*?)\)/);
    if (linkMatch) {
      const [, text, url] = linkMatch;
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-900 underline hover:text-green-700"
        >
          {text}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}
