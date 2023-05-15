'use client'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function SectionHeader() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const itemWidth = container.children[0].offsetWidth;
    const duration = (itemWidth + containerWidth) / 100;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(container, { x: -itemWidth, duration: duration, ease: "none" })
      .set(container, { x: containerWidth });
  }, []);

  return (
    <div className="marquee-wrapper">
      <div ref={containerRef} className="marquee-container">
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
        <span className="marquee-item">About</span>
      </div>
    </div>
  );
}


