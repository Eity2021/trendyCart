import React from 'react'
import productImage from "../..//assets/images/product/productImage.jpeg"
export default function ProductImage() {
  return (
    <div>
        <div>
            <img src={productImage} alt=""  className=' w-full h-[341px] shadow-lg'/>
        </div>
    </div>
  )
}
