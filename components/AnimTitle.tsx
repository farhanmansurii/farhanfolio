'use client'
import { gsap, Power4 } from 'gsap'
import React, { useEffect } from 'react'
import SplitType from 'split-type'

export default function AnimTitle({ text, className }: { text: string, className: string }) {
  useEffect(() => {
    const title = new SplitType('.title')
    console.log(title)
    gsap.set(title.words, { y: 100, skewY: 10, opacity: 1 });
    gsap.to(title.words, {

      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1,
      stagger: 0.07,
      ease: Power4.easeOut,

    });
  }, [])


  return (

    <div className='overflow-hidden'>
      <span className={`title ${className}`}>

        {text}
      </span>
    </div>
  )
}
