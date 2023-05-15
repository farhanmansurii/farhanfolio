'use client'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';

export default function GSAPlines({ children }: { children: React.ReactNode }) {
  const introRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const intro = new SplitType(introRef.current as HTMLElement, {
      types: 'lines',
      lineClass: 'intro-line'
    });



    intro.lines?.forEach((line, index) => {
      const lineParent = document.createElement('div');
      lineParent.classList.add('intro-line-parent');
      if (line.parentNode) {
        line.parentNode.insertBefore(lineParent, line);
        lineParent.appendChild(line);
      }
    });

    gsap.set(introRef.current, { autoAlpha: 1, overflow: 'hidden' });

    gsap.from(intro.lines, {
      duration: 1,
      yPercent: 100,
      ease: 'power4.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: introRef.current,
        start: 'top 85%',
        end: 'bottom 20%',

      }
    });
  }, []);

  return <h1 ref={introRef}>{children}</h1>;
}
