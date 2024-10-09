import React from 'react'
import bdFlag from '../../../assets/images/header/bdFlag.png'
export default function LeftSideTopHeader() {
  return (
<div > 
<div className='flex   justify-center     gap-4'>
        <p className='text-sm text-text-paragraph'>Ship to</p>
       <div className="flex">
       <img  src={bdFlag} alt=""  className='w-[22px] h-[22px]'  />
       <p className='flex justify-center items-center h-[100%]  text-sm text-text-paragraph pl-[8px]'>BDT</p>
       </div>
  
 <div className='w-[1px] border h-[15px] mt-1'></div>


 <div className="md:flex hidden">
 <p className='text-sm text-text-paragraph'>Quick Guide </p>
 </div>
 <div className="md:flex hidden">
 <p className='text-sm text-text-paragraph'>Help</p>
 </div>
 <div className='w-[1px] border h-[15px] mt-1 md:flex hidden' ></div>
 <div>
<p className='text-sm text-text-paragraph'>
Sell with Us
</p>
 </div>
    </div>

</div>
  )
}
