import React from "react";
import breadcrumbBg from "../../assets/images/login/breadcrumb_bg.jpg";
export default function Login() {
  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${breadcrumbBg})` }}
    >
<div className="py-[100px]">
<h1 className="text-center text-5xl uppercase font-bold">My-Account</h1>
<div className=" flex justify-center"> 
<div className="bg-white w-48 py-3 rounded-[100px] flex justify-center" >

    <li className="text-center  text-link  text-loginHeadingColor list-none	">Home</li>
    <li className=" bg-[#a1a1a1] rounded-[50%]  w-[6px] h-[6px] list-none mx-2 mt-[9px]"></li>
    <li className="text-loginColor text-link list-none	list-none	">My Account</li>
</div>
</div>
</div>
    </div>
  );
}
