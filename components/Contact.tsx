import React from 'react'
import Marquee from './Marquee'
import ContactMeForm from './ContactMeForm'

export default function Contact() {
  return (
    <div className='h-[60vh]  bg-[#f4f4f4] '>
      <ContactMeForm />
      <Marquee text='Contact' />
    </div>
  )
}
