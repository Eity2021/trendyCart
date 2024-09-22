import React from 'react'
import cards from "../../../assets/images/home/cards.jpg";
import cards2 from "../../../assets/images/home/cards2.jpg";
import cards3 from "../../../assets/images/home/cards3.jpg";
export default function HomeCards() {
  return (
    <div className="">
   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">

  <div className="border h-[85%] ">
    <img className='w-[446px] h-[100%]   transform transition-transform duration-300 hover:scale-110'  src={cards}  alt=""/>
  </div>
  <div className="border h-[85%] ">
    <img className='w-[446px] h-[100%]    transform transition-transform duration-300 hover:scale-110'  src={cards2}  alt=""/>
  </div>
  <div className="border h-[85%] ">
    <img className='w-[446px] h-[100%]   transform transition-transform duration-300 hover:scale-110'  src={cards3}  alt=""/>
  </div>
    </div>
    </div>
  )
}
