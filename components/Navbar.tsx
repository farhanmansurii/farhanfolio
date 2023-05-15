import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=' fixed w-full items-center z-50 text-center text-inherit mix-blend-difference   font-sans flex justify-between'>
      <div className='flex uppercase w-full items-center justify-between p-4'>

        <Link className='hidden md:flex' href='/'>Farhan Mansuri™</Link>
        <Link className='flex md:hidden' href='/'>FM™</Link>
        <Link href='/projects' className='hover:border-white hidden md:flex   border-transparent border-b uppercase duration-150'>go to All Projects ↗</Link>
        <Link href='/projects' className='hover:border-white flex md:hidden   border-transparent border-b uppercase duration-150'>Projects ↗</Link>
        {/* <div className='uppercase '>About me</div> */}
        <a href='https://drive.google.com/file/d/1T9-njWLhxgTl3jqmRg0aJZJf_ioasPal/view' target='_blank' className='rounded-full  text-xs  md:flex hidden px-4 py-2  bg-white/5 hover:bg-white/50 hover:text-[#1a1a1a]'>Download my Resume  ↗</a>
        <a href='https://drive.google.com/file/d/1T9-njWLhxgTl3jqmRg0aJZJf_ioasPal/view' target='_blank' className='rounded-full text-xs flex md:hidden  px-4 py-2  bg-white/5 hover:bg-white/50 hover:text-[#1a1a1a]'>Resume ↗</a>

        {/* <button className='px-4 mx-auto   hover:bg-white hover:text-[#1a1a1a]  py-2 border  w-fit rounded-full' >Download Resume</button> */}
      </div>

    </div>
  )
}
