import React from 'react'

import Delete from "../../components/svg/Delete";
export default function CartProduct() {

  const products = [
    {
      id: 1,
      name: "Woman Lathers Jacket",
      description: "Cramond Leopard & Pythong Anorak",
      price: "100",
      quantity: 2,
      subTotal: 400,
      image: 1,
      //   stock: "in Stock",
    },
    {
      id: 2,
      name: "Woman Lathers Jacket",
      description: "Cramond Leopard & Pythong Anorak",
      price: "150",
      quantity: 1,
      subTotal: 460,
      image: 2,
      //   stock: "in Stock",
    },
  ];





  return (
    <div className="col-span-2">
      <div className="p-4">
        <div className="overflow-x-auto overflow-y-auto ">
          <table className="w-[100%] table-auto ">
            <thead className="">
              <tr className="border-t-[1px]">
                <th className="px-4 py-2 border-b  pt-8 pb-8 "></th>
                <th className="px-4 py-2 border-b  pt-8 pb-8 ">Product</th>
                <th className="px-4 py-2 border-b  pt-8 pb-8 text-left">
                  Price
                </th>
                <th className="px-4 py-2 border-b  pt-8 pb-8 text-left">
                  Quantity
                </th>
                <th className="px-4 py-2 border-b  pt-8 pb-8 text-left">
                  SubTotal
                </th>

              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border-b">
                    <div className="cursor-pointer">
                      <Delete></Delete>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b pt-4 pb-4 ">
                    <div className="flex gap-2">
                      <img
                        src={product.image}
                        alt=""
                        className="w-[103px] h-[129px]"
                      />
                      <div className="flex items-center">
                        <div>
                          <td className=" pb-1  text-header text-medium font-medium">
                            {product.name}
                          </td>
                          <td className="flex  text-subsColor  text-sm font-normal">
                            {product.description}
                          </td>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-2 border-b pt-4 pb-4 text-subsColor  text-sm font-bold">
                    {product.price} BDT
                  </td>
                  <td className="px-4 py-2 border-b pt-4 pb-4">
                    <div className="flex gap-4 mt-6">
                      <div className="flex border  w-24 ">
                        <button className="w-10 h-10 ">-</button>
                        <div className="w-10 h-10  flex justify-center items-center">
                          {product.quantity}
                        </div>
                        <button className="w-10 h-10 ">+</button>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b pt-4 pb-4 text-loginColor text-medium font-medium">
                    {product.subTotal} BDT
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:flex  block justify-between">
          <div className="relative mt-8">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              class="input input-bordered w-full max-w-xs rounded-none"
            />
            <div className="absolute top-0 left-52">
              <div className="bg-loginColor w-36 flex justify-center  h-12">
                <button className="text-[#fff] text-medium uppercase">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="border w-56 flex justify-center  h-12">
              <button className="text-text-paragraph text-lg ">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
