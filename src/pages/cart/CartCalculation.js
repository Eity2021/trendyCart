import React from 'react'
import cartSidebarBg from "../../assets/images/cart/cart_sidebar_bg.png";
export default function CartCalculation() {
  return (
    <div 
    className=" bg-cover bg-center h-full "
    style={{ backgroundImage: `url(${cartSidebarBg})` }}>
        

        <div className='pt-[40px] px-6  xl:pb-0 pb-[80px]'>
            <p className='uppercase text-lg  font-bold text-header  font-poppins  border-b-2 pb-4'> carts totals</p>
            <div className='grid grid-cols-2 mt-[40px]'>
             
            <p className='uppercase text-medium  font-bold text-header  font-poppins '>SUBTOTAL</p>
            <p className=' text-medium  font-bold text-header  font-poppins '> 560.00 BDT</p>
            </div>
            <div className='grid grid-cols-2 mt-[20px] border-b pb-6'>
             
            <p className='uppercase text-medium  font-bold text-header  font-poppins '>Shipping</p>
            <p className=' text-medium  font-bold text-header  font-poppins '> 60.00 BDT</p>
            </div>



    
            <div className='grid grid-cols-2 pt-[20px] pb-[60px]'>
            <p className='uppercase text-medium  font-bold text-header  font-poppins mt-4'> total</p>
            <p className=' text-medium  font-bold text-header  font-poppins mt-4'> 620.00 BDT</p>
         
            </div>

            <div className="">
            <div className="bg-loginColor w-full flex justify-center  h-12  ">
                    <button className="text-[#fff] text-medium font-bold uppercase">
                      proceed to checkout
                    </button>
                  </div>
            </div>


        </div>
    </div>
  )
}
