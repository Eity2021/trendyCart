import React from 'react'

export default function Subscribe() {
  return (
    <div className='py-12'>
       <div className='grid grid-cols-2'>
        <div>
          <h1>Subscribe Now !</h1>
          <p className="text-subsColor text-sm">Venam By Signing Up To Our Newsletter.</p>
        </div>
        <div>
   <div className='flex justify-end'>
   <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-link" />
   <button>Subscribe</button>
   </div>
        </div>
       </div>
    </div>
  )
}
