import React from 'react'
import car from "../../assets/images/cart/car.png";
import memberCard from "../../assets/images/cart/member-card.png";
import saveMoney from "../../assets/images/cart/save-money.png";
import onlineSupport from "../../assets/images/cart/online-support.png";
export default function ShippingInfo() {
  return (
    <div className="mt-20 mb-20">
    
<div className="grid grid-cols-4 gap-4 lg:mx-40 md:mx-28 mx-8">


<div>
  <div className='flex justify-center'>
    <img  src={car} alt="car" className='w-20 h-20'/>
  </div>
 <div className='text-center'>
   <h3 className='text-header text-lg font-bold '>Free Shipping On Over $ 50</h3>
   <p className='text-text-paragraph text-sm font-bold '> Agricultural mean crops livestock</p>
  </div>
</div>



<div>
  <div className='flex justify-center'>
    <img  src={memberCard} alt="car" className='w-20 h-20'/>
  </div>
 <div className='text-center'>
   <h3 className='text-header text-lg font-bold '>Membership Discount</h3>
   <p className='text-text-paragraph text-sm font-bold '>Only MemberAgricultural livestock</p>
  </div>
</div>


<div>
  <div className='flex justify-center'>
    <img  src={saveMoney} alt="car" className='w-20 '/>
  </div>
 <div className='text-center'>
   <h3 className='text-header text-lg font-bold '>Money Return</h3>
   <p className='text-text-paragraph text-sm font-bold '>30 days money back guarantee</p>
  </div>
</div>


<div>
  <div className='flex justify-center'>
    <img  src={onlineSupport} alt="car" className='w-20 '/>
  </div>
 <div className='text-center'>
   <h3 className='text-header text-lg font-bold '>Online Support</h3>
   <p className='text-text-paragraph text-sm font-bold '> 30 days money back guarantee</p>
  </div>
</div>
</div>
    </div>
  )
}
