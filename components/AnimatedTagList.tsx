'use client'
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { ReactNode, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTagListProps {
  tags: string[];
}

export default function AnimatedTagList({ tags }: AnimatedTagListProps) {
  const tagListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tagListRef.current) {
      const tags = Array.from(tagListRef.current.querySelectorAll('span'));

      gsap.set(tags, { opacity: 0, y: 50 });
      gsap.to(tags, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: tagListRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',

        },
      });
    }
  }, []);

  return (
    <div ref={tagListRef} className='gap-2 my-2 flex flex-wrap'>
      {tags.map((e, i) => (
        <span
          key={i}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '999px',
            fontSize: '0.875rem',
          }}
          className='whitespace-nowrap'
        >
          {e}
        </span>
      ))}
    </div>
  );
}
