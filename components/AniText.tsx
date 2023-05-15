'use client'
import { Power4, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { ReactNode, useEffect, useRef } from 'react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface AniTextProps {
  children: ReactNode;
}

export default function AniText({ children }: AniTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const splitText = new SplitType(textRef.current);

      const words = splitText.lines;
      gsap.set(words, { autoAlpha: 0, y: 50, skewY: 7, opacity: 0 });
      gsap.to(words, {
        autoAlpha: 1,
        opacity: 1,
        y: 0,
        skewY: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
          end: 'bottom center',
          toggleActions: 'restart none none none',
        },
      });
    }
  }, []);

  return <h1 ref={textRef}>{children}</h1>;
}
