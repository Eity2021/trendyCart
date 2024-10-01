import React from 'react'
import ContactUs from './ContactUs'
import ContactInfo from './ContactInfo'
import Mapping from './Mapping'

export default function Contact() {
  return (
    <div>
      <div className=''>
        <ContactUs></ContactUs>
        <div className='bg-[#fefafa] py-24' >
        <div className='container'>
          <ContactInfo></ContactInfo>
        </div>
        </div>

        <div className="container"> 
          <Mapping></Mapping>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}
