'use client'
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";


const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white mix-blend-difference w-3 h-3 select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-8 w-8 border border-white mix-blend-difference select-none pointer-events-none z-50",
};

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 2.3,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  };

  const initCursorAnimation = () => {
    follower.current?.classList.remove("hidden");
    cursor.current?.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  };

  useEffect(() => {

    initCursorAnimation();
  }, [cursor, follower]);

  return (
    <>
      <div
        ref={cursor}
        className={`cursor ${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={follower}
        className={`cursorFollower ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
};

export default Cursor;
