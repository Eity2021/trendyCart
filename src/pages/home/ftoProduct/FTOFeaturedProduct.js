import React from 'react'
import Star from '../../../components/svg/Star'
import HalfStar from '../../../components/svg/HalfStar'
import featuredSale from "../../../assets/images/home/featuredSale.png";
export default function FTOFeaturedProduct() {
  return (
    <div  className=''>
    <div  className='border  p-4   relative'  >

<div className="flex gap-6">
<div className='border w-[110px] h-[110px]'>
<img  src={featuredSale}  alt="featuredSale"/>
</div>
<div className='border h-27 ' >

</div>
<div className="flex items-center justify-start ">
<div>
  <p>
    Stylish Bag
  </p>
  <p>
     US $ 17.29 | 50% off 
  </p>
  <div className='flex gap-[1px]'>
    <Star></Star>
    <Star></Star>
    <Star></Star>
    <Star></Star>
    <HalfStar></HalfStar>
  </div>
</div>
<div className='absolute right-4 top-4'>
  <p>New!</p>
</div>
</div>
</div>
    </div>
    </div>
  )
}
