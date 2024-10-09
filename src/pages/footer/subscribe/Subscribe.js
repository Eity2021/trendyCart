import React from 'react'

export default function Subscribe() {
  return (
    <div className='py-12'>
       <div className='grid md:grid-cols-2 grid-cols-1 '>
        <div className=' md:text-start text-center md:pb-0  pb-6'>
          <h1>Subscribe Now !</h1>
          <p className="text-subsColor text-sm">Venam By Signing Up To Our Newsletter.</p>
        </div>
        <div>
   <div className='flex justify-end '>
   <input type="text" placeholder="Enter your email" className="input input-bordered   md:w-80  w-full  text-link "  />
<div className=' w-44 bg-bgColor flex justify-center items-center rounded-md ml-[-10px]'>
<button className="flex justify-center items-center h-full ">Subscribe</button>
</div>
   </div>
        </div>
       </div>
    </div>
  )
}
