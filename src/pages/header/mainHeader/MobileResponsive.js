import React from 'react'
import { Link } from "react-router-dom";
import responceLogo from "../../../images/header/logo_black.png"
export default function MobileResponsive({isOpen  , toggleSidebar}) {


  return (
    <div
    className={`fixed inset-0 z-50 bg-sideBg  transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out md:hidden`}
  >
    <div className="flex flex-col   pt-12  h-full space-y-6">
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-3xl text-white "
      >
        ✕
      </button>
      <li>
        <div>
            <img src={responceLogo} alt="" className='w-28 h-10  pl-4 '/>
        </div>
      </li>
      <li className="text-link  font-bold text-white list-none 	border-b border-slate-700 pl-4 pb-2">
        <Link to="/" onClick={toggleSidebar}>HOME</Link>
      </li>
      <li className="text-link  font-bold text-white list-none		border-b border-slate-700 pl-4 pb-2">
        <Link to="/about" onClick={toggleSidebar}>ABOUT US</Link>
      </li>
      <li className="text-link  font-bold text-white list-none		border-b border-slate-700 pl-4 pb-2">
        <Link to="/product" onClick={toggleSidebar}>PRODUCT</Link>
      </li>
      <li className="text-link font-bold text-white list-none		border-b border-slate-700 pl-4 pb-2">
        <Link to="/contact" onClick={toggleSidebar}>CONTACT</Link>
      </li>
    </div>
  </div>

  )
}
