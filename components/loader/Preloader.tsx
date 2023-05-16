'use client'
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + Math.floor(Math.random() * 3) + 2;
        if (newProgress >= 10) {
          clearInterval(intervalId);
          gsap.to(".preloader", {
            duration: 0.7,
            delay: 1,
            y: "-100%",
            onComplete: () => {
              document.body.classList.remove("no-scroll");
            }
          });
          return 10;
        }
        return newProgress;
      });
    }, 800);

    const intervalId2 = setInterval(() => {
      setProgress1(prevProgress => {
        const newProgress = prevProgress + Math.floor(Math.random() * 2) + 3;
        if (newProgress >= 9 || progress >= 10) {
          clearInterval(intervalId2);
          gsap.to(".preloader .white-screen", {
            duration: 0.5,
            y: "-100%",
            onComplete: () => {
              document.body.classList.remove("no-scroll");
            }
          });
          return 0;
        }
        return newProgress;
      });
    }, 800);

    return () => {
      clearInterval(intervalId2);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="preloader fixed top-0 left-0 w-screen h-screen  bg-white overflow-hidden">
      < div className="white-screen fixed bottom-0 left-0 w-screen h-screen bg-[#1a1a1a]" ></div>
      <div className="w-fit overflow-hidden">
        <div className="text-[#f4f4f4] mix-blend-difference number-out counter-container overflow-hidden inline-flex p-2 text-4xl">
          <h3 className="progess-number-1">{progress}</h3>
          <h3 className="progess-number-2">{progress1}</h3>
          <h3>%</h3>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
