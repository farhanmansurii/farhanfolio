'use client'
import React, { useEffect, useRef } from 'react'
import Marquee from './Marquee'
import GSAPlines from './GSAPLines'
import SplitType from 'split-type';
import { Power4, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AniText from './AniText';
import StaggeredParagraph from './StaggeredText';

export default function AboutText() {



  return (
    <div
      className='bg-[#f4f4f4] text-black min-h-screen'>
      <Marquee text='About me' className='text-black' />
      <div className='text-2xl flex flex-col my-10 justify-center gap-10 h-full items-center'>
        <div className='w-10/12 lg:w-5/12 mx-auto'>
          <AniText >


            Im an Indian front-end/full-stack and
            creative web developer keen eye for
            design and a knack for solving
            complex problems through simple
            and interactive interfaces.
          </AniText>

        </div>

        <div className='px-10 md:px-16 lg:px-24 text-sm flex flex-col lg:flex-row justify-around gap-10'>
          <div className='w-full text-justify'>
            <StaggeredParagraph delay={0.1}>

              I am a Computer Science post-graduate from Somaiya Univerity ,Vidyavihar Mumbai, and curiosity dragged me to learn
              HTML, CSS & JavaScript. Then, I learned Reactjs and TypeScript, among many
              other javascript frameworks then working on the MERN Stack.
            </StaggeredParagraph>
          </div>
          <div className='w-full text-justify'>
            <StaggeredParagraph delay={0.2}>

              My expertise in HTML, CSS, JavaScript, TypeScript and React allows me to
              create dynamic and responsive web pages that engage users and deliver a
              seamless experience. Whether its crafting beautiful user interfaces, optimizing
              website performance, or developing complex web applications.
            </StaggeredParagraph>
          </div>

          <div className='w-full text-justify'>
            <StaggeredParagraph delay={0.3}>

              In addition to my technical skills, I have a strong sense of creativity and an eye for
              detail that allows me to create visually stunning designs that are both functional
              and aesthetically pleasing. I believe that good design is the key to creating great
              user experiences, and I strive to incorporate this philosophy into everything I do.
            </StaggeredParagraph>
          </div>
        </div>
      </div>
    </div>
  )
}
