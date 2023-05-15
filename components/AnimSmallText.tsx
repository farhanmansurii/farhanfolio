'use client'
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { ReactNode, useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function AnimSmallText({ children }: { children: ReactNode }) {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const title = new SplitType(titleRef.current!);
    gsap.set(title.words, { y: 100, skewY: 10, opacity: 0 });
    gsap.to(title.words, {
      opacity: 1,
      y: 0,
      skewY: 0,
      rotation: 0,
      duration: 1,
      stagger: 0.07,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: titleRef.current!,
        start: 'bottom bottom',

        toggleActions: 'play none none none',

      },
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <span className='title' ref={titleRef}>
        {children}
      </span>
    </div>
  );
}
