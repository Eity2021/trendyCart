import React from 'react'
import CartPageList from './CartPageList'
import breadcrumbBg from "../../assets/images/about/breadcrumb_bg.jpg";
export default function Cart() {
  return (
    <div>
    <div 
    className=" bg-cover bg-center"
    style={{ backgroundImage: `url(${breadcrumbBg})` }}>
        

        <div className='py-[100px] '>
            <p className='uppercase text-5xl  font-bold text-header  font-poppins text-center'> Smart Shop</p>
            <div className='flex justify-center'>
              <div>
              <span className=' text-medium  font-medium font-poppins  text-text-paragraph'>Home</span> <span className='px-2'> | </span> <span className='text-medium text-loginColor  font-medium'>Product</span>
              </div>
            </div>
        </div>
    </div>

   <div className="container">
   <CartPageList></CartPageList>
   </div>
    </div>
  )
}
