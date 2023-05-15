'use client'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'

export default function TechStack2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section .skills",
        start: "top bottom",
        end: "bottom+=300 top",
        scrub: 1,
      },
    });

    tl.fromTo(".skillset--1 h2", { x: "30%" }, { x: "-30%" }, 0).fromTo(
      ".skillset--2 h2",
      { x: "-30%" },
      { x: "30%" },
      0
    );
  }, [])
  const skills1 = [
    { name: "JavaScript", color: "yellow" },
    { name: "TypeScript", color: "blue" },
    { name: "ReactJS", color: "cyan" },
    { name: "NextJS", color: "black" },
  ];

  const skills2 = [
    { name: "Redux-Toolkit", color: "purple" },
    { name: "ExpressJS", color: "green" },
    { name: "NodeJS", color: "green" },
    { name: "TRPC", color: "orange" },
  ];

  const skills3 = [
    { name: "HTML", color: "red" },
    { name: "CSS", color: "blue" },
    { name: "ChakraUI", color: "teal" },
    { name: "TailwindCSS", color: "blue" },
  ];

  const skills4 = [
    { name: "GIT", color: "orange" },
    { name: "MongoDB", color: "green" },
    { name: "Firebase", color: "yellow" },
    { name: "GSAP", color: "green" },
    { name: "FramerMotion", color: "purple" },
  ];
  return (
    <section className="skills-section" id="skills">
      <div className="skills uppercase font-light  flex gap-5 text-3xl flex-col  ">
        <div className="skillset--1  overflow-hidden">
          <h2 className='flex gap-5 whitespace-nowrap '>
            {skills1.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills1.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills1.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
          </h2>
        </div>
        <div className="skillset--2  overflow-hidden">
          <h2 className='flex gap-5 whitespace-nowrap '>
            {skills2.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills2.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills2.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}  </h2>
        </div>
        <div className="skillset--1  overflow-hidden">
          <h2 className='flex gap-5 whitespace-nowrap '>
            {skills3.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills3.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills3.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}  </h2>
        </div>
        <div className="skillset--2  overflow-hidden">
          <h2 className='flex gap-5 whitespace-nowrap '>
            {skills4.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills4.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}
            {skills4.map((skill, i) =>
              <span className={`gap-5 flex opacity-30 shadow-2xl  hover:opacity-100 duration-300`} key={i}>
                <span>
                  {skill.name}
                </span>

              </span>
            )}  </h2>
        </div>
      </div>
    </section>
  )
}
