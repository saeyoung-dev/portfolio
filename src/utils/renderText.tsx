'use client';

import React, { ReactNode } from 'react';

function renderBold(text: string): ReactNode[] {
  return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <b key={index} className="font-bold">
          {part.slice(2, -2)}
        </b>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function renderLink(text: string): ReactNode[] {
  return text.split(/(\[\[.*?\]\]\(.*?\))/).map((part, index) => {
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

export function renderText(text: string): ReactNode[] {
  const boldResult = renderBold(text);
  return boldResult
    .map((node) => {
      if (typeof node === 'string') {
        return renderLink(node);
      }
      return node;
    })
    .flat();
}
