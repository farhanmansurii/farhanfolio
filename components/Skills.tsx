import React from 'react'
import Marquee from './Marquee'
import TechStack2 from './TechStack'
export default function Skills() {
  return (
    <div className=' flex flex-col gap-10'>
      <Marquee text='Skills' />
      {/* <button className='px-4 py-2 rounded-full bg-[#f4f4f4] w-fit mx-auto text-black'>Switch to grid</button> */}
      <TechStack2 />
    </div>
  )
}
