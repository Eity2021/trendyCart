import React from 'react'
import Star from '../../components/svg/Star'
import WishList from '../../components/svg/WishList'

export default function SingleProductDetails() {
  return (
    <div className="lg:mt-0 mt-8" >
        <div>
            <div className='bg-loginColor w-16 px-2 py-1 flex justify-center items-center'>
                <p className='text-white text-sm '>In Stock</p>
            </div>
            <div className="mt-3">
                <h2 className="text-2xl font-bold text-header">The Christina Fashion</h2>
            </div>
            <div className='flex gap-1 mt-4'>
                <div className='flex gap-[2px]'>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </div>
                <div>
                    <p className='text-sm text-subsColor font-normal' > - 3 Customer Reviews</p>
                </div>
            </div>
<div className="flex gap-4 mt-4"> 
<h1 className='text-2xl text-loginColor font-bold' >29.00 BDT </h1>

<del className='text-medium text-subsColor font-normal'>49.00 BDT</del>

</div>
            <div className="mt-4">
          <p className="text-medium font-medium text-subsColor">Cramond Leopard & Pythong Print Anorak Jacket In Beige but also the leap into electronic typesetting, remaining</p>
            </div>

            <div className="flex gap-6  mt-4">
                <p className="text-[1.2rem] text-header font-bold">Size :</p>
                <p className="text-sm   text-subsColor  font-normal underline">Guide </p>
                <p className="text-sm   text-subsColor  font-normal underline">can't Find Your Size</p>
            </div>



            <div className="flex gap-2 mt-4">
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-subsColor text-medium">xxs</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-subsColor text-medium">xs</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-subsColor text-medium">s</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-subsColor text-medium">M</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-subsColor text-medium">L</p>
                </div>
            </div>

         <div className="flex gap-4 mt-6">
         <div className="flex border  w-24 ">
            <button className="w-10 h-10 ">-</button>
            <div className="w-10 h-10  flex justify-center items-center">1</div>
            <button className="w-10 h-10 ">+</button>
          </div>

          <div className="bg-loginColor flex justify-center items-center px-10 py-1 rounded-md cursor-pointer">
            <p className="uppercase text-white">Add to cart</p>
          </div>
         </div>


          <div className="flex gap-2 mt-6 border-b pb-4">
            <WishList></WishList>
            <p className=" text-medium text-header font-bold">Add To Wishlist</p>
          </div>

          <div className='mt-4'>
          <p className="uppercase text-subsColor text-sm font-medium">  Tag : Clothing</p>
          </div>
          <div>
          <p className="uppercase  text-subsColor text-sm font-medium pt-2">  Categories  : Woman's , bikini, tops for, large bust</p>
          </div>
        </div>
    </div>
  )
}
