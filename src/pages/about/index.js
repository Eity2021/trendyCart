import React from 'react'
import AboutStore from './AboutStore'
import OurStory from './OurStory'
import SettingUp from './SettingUp'
import Customer from './Customer'

export default function About() {
  return (
    <div>

      <AboutStore></AboutStore>
    <div className='container'>
    <OurStory></OurStory>
    </div>
    <div className="bg-bgPink">
    <div className='container'>
      <SettingUp></SettingUp>
    </div>
    </div>
  

  <div className='container'>
    <Customer></Customer>
  </div>
    </div>
  )
}
