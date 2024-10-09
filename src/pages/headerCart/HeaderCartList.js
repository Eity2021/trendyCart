import React from "react";
import Delete from "../../components/svg/Delete";

export default function HeaderCartList() {
  return (
 <>
    <div className="border-b pb-8">
      <div className="  flex gap-2">
        <div className="bg-[#ccc]  w-[145px] h-[75px]">image</div>
        <div className="mt-1">
          <h2 className="text-sm text-header font-semibold leading-5 ">Charity Nike Brand Yellow T-Shirt</h2>
          <div className="flex gap-2 pt-1">
            <p className="text-subsColor text-sm font-medium">$229.9 </p> <del className="text-subsColor text-sm font-medium">$229.9</del>
          </div>
        </div>
        <div className="flex items-center">
          <Delete></Delete>
        </div>
      </div>
      <div className="  flex gap-2 mt-3">
        <div className="bg-[#ccc]  w-[145px] h-[75px]">image</div>
        <div className="mt-1">
          <h2 className="text-sm text-header font-semibold leading-5 ">Charity Nike Brand Yellow T-Shirt</h2>
          <div className="flex gap-2 pt-1">
            <p className="text-subsColor text-sm font-medium">$229.9 </p> <del className="text-subsColor text-sm font-medium">$229.9</del>
          </div>
        </div>
        <div className="flex items-center">
          <Delete></Delete>
        </div>
      </div>
    </div>
    <div>



        <div className='flex justify-between pt-4'>
            <p className="text-subsColor text-sm font-semibold">Total</p>
            <p className="text-subsColor text-sm font-semibold">530.00 BDT</p>
        </div>

        <div className="bg-bgColor py-2 justify-center items-center flex mt-4">
            <button className="uppercase  text-sm text-header font-semibold ">shopping cart</button>
        </div>
        <div className="bg-black py-2 justify-center items-center flex mt-2">
            <button className="uppercase  text-sm text-white font-semibold ">checkout</button>
        </div>
    </div>
    </>
  );
}
