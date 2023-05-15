import React from 'react'
import AnimSmallText from './AnimSmallText'
import AnimTitle from './AnimTitle'

export default function ContactMeForm() {
  return (
    <div className='w-full bg-[#1a1a1a]  flex flex-col gap-5 justify-between   h-full '>
      <div className='mx-auto h-full flex items-center  '>
        <div>

          <div className='px-4 mx-auto my-4 text-xs py-2 border uppercase w-fit rounded-full opacity-50' >
            <AnimSmallText>

              have a project in mind?
            </AnimSmallText>
          </div>
          <a href="mailto:mansurifarhafm@gmail.com" className='text-6xl  hover:border-white border-transparent border-b duration-150 uppercase'>
            <AnimSmallText >Let&lsquo;s Talk  ↗</AnimSmallText>
          </a>
        </div>

      </div>
      <div className='w-full my-5 self-end justify-between flex px-5 lg:px-24 flex-row gap-10'>
        <div>
          <span className='text-sm opacity-50'> Socials:</span>
          <div className='flex text-xs lg:text-lg flex-col md:flex-row uppercase 2 lg:gap-5'>
            <a target="_blank" className='hover:border-white border-transparent border-b duration-150' href="https://www.github.com/farhanmansurii">
              <AnimSmallText>

                Github ↗
              </AnimSmallText>
            </a>
            <a target="_blank" className='hover:border-white border-transparent border-b duration-150' href="https://www.linkedin.com/in/farhanmansurii" >
              <AnimSmallText>

                LinkedIn ↗
              </AnimSmallText>
            </a>
            <a className='hover:border-white border-transparent border-b duration-150' href="mailto:mansurifarhafm@gmail.com" >
              <AnimSmallText>

                Email ↗
              </AnimSmallText>
            </a>
            <div className='hover:border-white border-transparent border-b duration-150' >
              <AnimSmallText>

                +919867905275
              </AnimSmallText>
            </div>
          </div>
        </div>
        <div>
          <span className='text-xs lg:text-sm opacity-50'>Designed & Developed By:</span>
          <div className='flex uppercase text-xs lg:text-lg  flex-wrap lg:gap-10'>
            <AnimSmallText>Farhan Mansuri</AnimSmallText><br />
            <AnimSmallText>&copy; 2023</AnimSmallText>

          </div>
        </div>
      </div>
    </div>
  )
}
