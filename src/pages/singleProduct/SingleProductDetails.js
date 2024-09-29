import React from 'react'
import Star from '../../components/svg/Star'
import WishList from '../../components/svg/WishList'

export default function SingleProductDetails() {
  return (
    <div >
        <div>
            <div className='bg-loginColor'>
                <p className='text-white text-sm '>In Stock</p>
            </div>
            <div>
                <h2>The Christina Fashion</h2>
            </div>
            <div className='flex gap-1'>
                <div className='flex gap-[2px]'>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </div>
                <div>
                    <p> - 3 Customer Reviews</p>
                </div>
            </div>
<div className="flex gap-4"> 
<h1>$29.00 </h1>
<del>49.00</del>
</div>
            <div>
          <p>Cramond Leopard & Pythong Print Anorak Jacket In Beige but also the leap into electronic typesetting, remaining</p>
            </div>

            <div className="flex gap-6">
                <p>Size :</p>
                <p>Guide </p>
                <p>can't Find Your Size</p>
            </div>
            <div className="flex gap-2">
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-text-paragraph text-medium">xxs</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-text-paragraph text-medium">xs</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-text-paragraph text-medium">s</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-text-paragraph text-medium">M</p>
                </div>
                <div className="border w-12 h-8 flex justify-center items-center">
                <p className="text-text-paragraph text-medium">L</p>
                </div>
            </div>

          <div className="flex border  w-24">
            <button className="w-8 h-8 ">-</button>
            <div className="w-8 h-8  flex justify-center items-center">1</div>
            <button className="w-8 h-8 ">+</button>
          </div>

          <div className="bg-loginColor">
            <p className="uppercase text-white">Add to cart</p>
          </div>



          <div className="flex gap-2">
            <WishList></WishList>
            <p>Add To Wishlist</p>
          </div>

          <div>
          <p className="uppercase">  Tag : Clothing</p>
          </div>
          <div>
          <p className="uppercase">  Categories  : Woman's , bikini, tops for, large bust</p>
          </div>
        </div>
    </div>
  )
}
