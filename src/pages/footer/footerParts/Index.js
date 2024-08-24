import React from 'react'
import FooterPartsOne from './FooterPartsOne'
import FooterPartsTwo from './FooterPartsTwo'
import FooterPartsFour from './FooterPartsFour'
import FooterPartsThree from './FooterPartsThree'

export default function MiddleFooter() {
  return (
<div className='border-t-2 pt-8'>
<div className='grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1'>
        <FooterPartsOne></FooterPartsOne>
        <FooterPartsTwo></FooterPartsTwo>
        <FooterPartsThree></FooterPartsThree>
        <FooterPartsFour></FooterPartsFour>
    </div>
</div>
  )
}
