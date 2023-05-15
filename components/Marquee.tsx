'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  text: string;
  gap?: number;
  speed?: number;
  className?: string;
}

export default function Marquee({ text, gap = 50, speed = 125, className }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const containerWidth = container.offsetWidth;
    const textWidth = text.offsetWidth;
    const distance = textWidth + containerWidth + gap;

    const duration = distance / speed;
    const tl = gsap.timeline();
    tl.to(text, { x: `-${distance}px`, duration: duration, ease: 'none', repeat: -1 });

    const reset = () => {
      if (container.scrollLeft >= distance) {
        container.scrollLeft = 0;
      }
      requestAnimationFrame(reset);
    };
    requestAnimationFrame(reset);

    tl.play();
  }, [text, gap, speed]);

  const repeatedText = new Array(40).fill(`<span class="${className} text-7xl uppercase mx-5">${text} </span> <span class="${className} text-7xl   mx-5 opacity-20 uppercase">${text}</span>`).join('');

  return (
    <div
      ref={containerRef}
      className="marquee-container border-y-2 border-neutral-500 py-8"
      style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      <div
        ref={textRef}
        className="marquee-text "
        dangerouslySetInnerHTML={{ __html: repeatedText }}
      />
    </div>
  );
}


