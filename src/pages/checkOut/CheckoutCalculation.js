import React from "react";
import cartSidebarBg from "../../assets/images/cart/cart_sidebar_bg.png";
import credit from "../../assets/images/cart/credit.png";
export default function CheckoutCalculation() {
  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${cartSidebarBg})` }}
    >
  <div className="p-6">
      <div className="border-b pb-4">
        <h3 className="uppercase  text-header text-lg font-bold  ">cart totals</h3>
      </div>

      <div className="border-b py-6">
        <div className="flex justify-between">
          <h4 className="text-header text-[17px] font-medium">subtotal</h4>
          <h4 className="text-header text-[17px]  font-medium">560.00 bdt</h4>
        </div>
        
        <div className="flex justify-between pt-2">
          <h4 className="text-header text-[17px] font-medium">shipping fee</h4>
          <h4 className="text-header text-[17px]  font-medium">120.00 bdt</h4>
        </div>
      </div>


      <div className="border-b pb-8 py-4 flex justify-between"> 
      <h4>total</h4>
      <h4>650.00 bdt</h4>
      </div>





      <div className="border-b  ">
      <div className="flex gap-2 my-8">
<div className="form-control">
  <label className="label cursor-pointer">
    <input type="checkbox"  className="checkbox checkbox-primary w-4 h-4 rounded-none [--chkfg:white]" />
  </label>
</div>
    <p className="uppercase text-header font-bold text-sm flex items-center">Cash on delivery</p>
</div>
      </div>

<div className="flex justify-between">


<div className="flex gap-2 my-8">
<div className="form-control">
  <label className="label cursor-pointer">
    <input type="checkbox"  className="checkbox checkbox-primary w-4 h-4 rounded-none [--chkfg:white]" />
  </label>
</div>
    <p className="uppercase text-header font-bold text-sm flex items-center">Payments of Online</p>
</div>

<div className="flex items-center">
  <img src={credit} alt="" className="w-16 h-16"/>
</div>

</div>


<div>
<div className="flex gap-2 my-8">
<div className="form-control">
  <label className="label cursor-pointer">
    <input type="checkbox"  className="checkbox checkbox-primary w-4 h-4 rounded-none [--chkfg:white]" />
  </label>
</div>
    <p className=" text-header font-normal text-sm flex items-center">I have read and agree to the website terms and conditions*</p>
</div>
</div>

<div className="mb-12">
<button className="py-3 text-link bg-loginColor text-white w-full flex justify-center items-center hover:bg-buttonHover uppercase">
                    proceed to  checkout
                  </button>
</div>

    </div>
  </div>
  );
}
