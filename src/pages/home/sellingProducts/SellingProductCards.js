import React from "react";
import sellingProduct1 from "../../../assets/images/home/sellingProduct1.jpg";
import CartSelling from "../../../components/svg/CartSelling";
export default function SellingProductCards() {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:px-48  md:px-28 px-16 py-16">
            {/* part 1 */}
          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>
{/* part 2 */}
          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>
{/* part 3*/}
          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>
{/* part 4 */}
          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* part 5 */}

          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          {/* part 6 */}

          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>


          
          {/* part 7 */}

          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>


          
          {/* part 8 */}

          <div className="">
            <div className="relative group">
              <div className="bg-black bg-opacity-50">
                <img src={sellingProduct1} alt="" className="w-full h-auto " />
              </div>

              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 opacity-100 transition-opacity duration-300">
                <div className="flex justify-center cursor-pointer gap-1">
                  <p className="text-white font-bold uppercase">Add to Cart</p>
                  <CartSelling></CartSelling>
                </div>
              </div>

              <div className="absolute top-2 left-3">
                <div className="bg-bgColor p-1 rounded-[6px]">
                  <p className="text-white  text-sm font-poppins">30%</p>
                </div>
              </div>
              <div className="absolute top-2 right-3">
                <div className="bg-loginColor p-1 rounded-[6px]">
                  <p className="text-white text-sm font-poppins">New!</p>
                </div>
              </div>
            </div>

            <div className="border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text text-productColor  font-poppins">
                    ladies Bags
                  </p>
                  <p className="text-medium text-header pt-1">hand Gloves</p>
                </div>
                <div>
                  <del className="text-sm text text-productColor ">$69.00</del>
                  <p className="text-loginColor text-link font-poppins">
                    $58.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
