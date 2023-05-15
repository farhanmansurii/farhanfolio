import React from 'react'
import AnimTitle from './AnimTitle'
import AnimSmallText from './AnimSmallText'

export default function Name() {
  return (
    <div className=' h-[100vh] flex flex-col '>
      <div className='text-4xl flex-1 flex items-center  p-20 uppercase'>
        <div>



          <AnimTitle className='text-6xl   opacity-100' text='farhan mansuri' />

          <span className=''>
            <AnimTitle className='opacity-40' text='Front-end developer' />
            <AnimTitle className='opacity-20' text='PASSIONATE ABOUT
            CRAFTING' />
            <AnimTitle className='opacity-20' text='SUPERB
            WEB EXPERIENCES' />



          </span>
        </div>
      </div>

      <div className='flex p-4 justify-between text-sm uppercase'>
        <div className='flex gap-3 uppercase'>

          <a target="_blank" className='hover:border-white border-transparent border-b duration-150' href="https://www.github.com/farhanmansurii"><AnimSmallText>Github</AnimSmallText></a>
          <a target="_blank" className='hover:border-white border-transparent border-b duration-150' href="https://www.linkedin.com/in/farhanmansurii" ><AnimSmallText>Linkedin</AnimSmallText></a>
          <a className='hover:border-white border-transparent border-b duration-150' href="mailto:mansurifarhafm@gmail.com" ><AnimSmallText>Email</AnimSmallText></a>
        </div>
        <div className='flex gap-3 uppercase'>
          <AnimSmallText>

            Mumbai, Maharashtra, IN
          </AnimSmallText>
        </div>
        <div className='flex gap-3 uppercase'>
          <AnimSmallText>

            &copy; 2023
          </AnimSmallText>
        </div>

      </div>

    </div>
  )
}
