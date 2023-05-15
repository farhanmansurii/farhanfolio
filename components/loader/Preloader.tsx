'use client'
'use client'
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 34;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return newProgress;
      });
    }, 800);

    setTimeout(() => {
      gsap.to('.preloader', {
        duration: 0.7,
        y: '-100%',
        onComplete: () => {
          document.body.classList.remove('no-scroll');
        },
      });
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.number-out',
      { autoAlpha: 1, y: 0 },
      { autoAlpha: 0, y: -5, duration: 0.6 }
    );
  }, [progress]);

  useEffect(() => {
    gsap.fromTo(
      '.preloader-text',
      { autoAlpha: 0, y: '50%' },
      { autoAlpha: 1, y: '0%', duration: 0.5, delay: 0.7 }
    );
    gsap.to(
      '.preloader-text',
      { autoAlpha: 0, y: '-50%', duration: 0.5, delay: 3 }
    );
  }, []);

  return (
    <div className="preloader" >
      <div className="number-out text-4xl ">{progress}%</div>

    </div>
  );
};

export default Preloader;
