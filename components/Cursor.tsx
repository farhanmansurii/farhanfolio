'use client'
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white mix-blend-difference w-3 h-3 select-none pointer-events-none z-50",
};

const isDesktop = () => {
  return window.innerWidth >= 1024; // Set the breakpoint for desktop devices
};

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 6,
      duration: 0.4,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      delay: 0.1,
      duration: 0.3,
      ease: "power4.out", // Use a power4.out curve for a springy effect
    });
  };

  const initCursorAnimation = () => {
    const isDesktopDevice = isDesktop();
    if (isDesktopDevice) {
      cursor.current?.classList.remove("hidden");
      document.addEventListener("mousemove", moveCircle);
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onUnhover);
      });
    }
  };

  useEffect(() => {
    initCursorAnimation();
  }, [cursor]);

  return (
    <div ref={cursor} className={`cursor ${CURSOR_STYLES.CURSOR}`}></div>
  );
};

export default Cursor;
