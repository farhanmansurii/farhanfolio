'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import AnimSmallText from './AnimSmallText';

interface ProjectCardProps {
  data: {
    slug: string;
    title: string;
    techStack: string;
    color: string;
    image: string;
  };
  index: number;
}

export default function ProjectCard({ data, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef(null);
  const techStackChildren = useRef<HTMLCollection | null>(null);
  useEffect(() => {
    const card = cardRef.current;
    const techStack = techStackRef.current;
    const img = imgRef.current;

    if (!card) return;
    if (!techStack) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut', opacity: 0 } });

    if (techStack) {
      techStackChildren.current = techStack.children;
      gsap.set(techStackChildren.current, { opacity: 0, y: 20 });
    }
    cardRef.current.style.color = 'black';
  }, []);

  const handleHover = () => {
    // Use the tech stack children ref to select the children
    gsap.timeline({ defaults: { ease: 'power3.inOut' } }).to(techStackChildren.current, {
      duration: 0.3,
      opacity: 1,
      y: 0,
      stagger: 0.1,
    });
    // Change the text color to data.color on hover
    if (cardRef.current) {
      cardRef.current.style.color = data.color;
    }
  };

  const handleLeave = () => {
    // Use the tech stack children ref to select the children
    gsap.timeline({ defaults: { ease: 'power3.inOut' } }).to(techStackChildren.current, {
      duration: 0.3,
      opacity: 0,
      y: 20,
      stagger: 0.1,
    });
    // Change the text color back to black on leave
    if (cardRef.current) {
      cardRef.current.style.color = "black";
    }
  };
  return (
    <Link href={`/${data.slug}`}>
      <div
        ref={cardRef}
        style={{
          color: data.color,

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className='w-10/12 mx-auto border-b group relative items-center justify-between flex lg:px-20  pt-10 hover:py-10 duration-300'
        key={data.slug}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}

      >
        <div>
          <div
            className='text-2xl  lg:text-4xl my-auto' // center the title text

          >

            <span className=' text-3xl italic  lg:text-5xl'>
              0{index + 1}/</span>

            {data.title}

          </div>
          <div ref={techStackRef} className='gap-2 my-2 flex flex-wrap'>
            {data.techStack.split(',').map((e, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: `${data.color}20`,
                  color: data.color,
                  padding: '0.5rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                }}
                className='whitespace-nowrap'
              >
                {e}
              </span>
            ))}
          </div>
        </div>
        <img
          ref={imgRef}
          className='h-[18rem] z-50 rotate-2 opacity-50 hidden lg:group-hover:flex absolute -top-20 -right-0'
          src={data.image}
        />
      </div>
    </Link>
  );
}
