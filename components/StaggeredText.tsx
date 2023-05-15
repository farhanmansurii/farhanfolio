'use client'
import { Power4, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { ReactNode, useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface StaggeredParagraphProps {
  children: ReactNode;
  delay?: number;
}

export default function StaggeredParagraph({ children, delay = 0.1 }: StaggeredParagraphProps) {
  const paragraphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const splitText = new SplitType(paragraphRef.current, {
        lineClass: 'stagger-line',
      });

      const staggeredLines = Array.from(paragraphRef.current.querySelectorAll('.stagger-line'));

      gsap.set(staggeredLines, { autoAlpha: 0, y: 50, opacity: 0 });
      gsap.to(staggeredLines, {
        autoAlpha: 1,
        opacity: 1,
        y: 0,

        rotation: 0,
        duration: 1,
        stagger: 0.1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 70%',
          end: 'bottom center',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return <div ref={paragraphRef}>{children}</div>;
}
