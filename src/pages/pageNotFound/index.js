import React from 'react'
import breadcrumbBg from "../../assets/images/about/breadcrumb_bg.jpg";
import Exclusive from '../../components/authentication/login/exclusive/Exclusive';
export default function PageNotFound() {
  return (
    <div>
            <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="py-[100px]">
          <p className="uppercase text-5xl  font-bold text-header  font-poppins text-center">
            {" "}
            page not found
          </p>
          <div className="flex justify-center">
            <div>
              <span className=" text-medium  font-medium font-poppins  text-text-paragraph">
                Home
              </span>{" "}
              <span className="px-2"> | </span>{" "}
              <span className="text-medium text-loginColor  font-medium">
               404 Page
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="container ">
<div className="flex justify-center">
  <h1 className="text-[130px] text-loginColor  font-bold">404</h1>
</div>
<div>
  <p className="text-lg  text-header font-bold text-center mb-2">oops! The page you requested was not found!</p>
  <p className="text-sm  text-subsColor font-bold text-center mb-4">The page you are looking for was moved, removed, renamed or might never existed.</p>
</div>
<div className="flex justify-center ">
  <button className=" bg-loginColor text-white px-4 py-3 text-lg uppercase  mt-4">
    back to home
  </button>
</div>
      </div>

      <div className="mt-16">
        <Exclusive></Exclusive>
      </div>
    </div>
  )
}
