'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleProjectHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(target.closest('[data-cursor-view]') !== null);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleProjectHover);
    window.addEventListener('mouseout', () => setIsHovering(false));

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleProjectHover);
      window.removeEventListener('mouseout', () => setIsHovering(false));
    };
  }, []);

  if (!isHovering) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 text-sm shadow font-medium py-2 px-4 rounded-full bg-white text-green-900"
      style={{
        left: mousePosition.x + 12,
        top: mousePosition.y + 12,
      }}
    >
      View
    </div>
  );
}
