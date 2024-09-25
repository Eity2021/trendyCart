import React from 'react'
import DealsProductsList from './DealsProductList'

export default function DealsProducts() {
  return (
    <div > 
    <div>
   <div className="flex justify-between">
   <p className="uppercase md:text-2xl text-xl font-bold text-black"> Deal Of The Day</p>
   <p className=" text-xl font-bold text-loginColor cursor-pointer">View All</p>
   </div>
        <div className="border mt-[6px]"></div>
    </div>
    <DealsProductsList></DealsProductsList>
    </div>
  )
}
