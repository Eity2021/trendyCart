import React from "react";
import Star from "../../components/svg/Star";
import HalfStar from "../../components/svg/HalfStar";
export default function NewProduct() {
  return (
    <div className="mt-8">
      <div className="shadow-lg bg-white px-5 py-12">
        <div>
          <p className="uppercase  text-medium   font-bold text-header pb-[16px]">
            New product
          </p>
        </div>

        <div className="flex gap-4">
          <div className="border w-[95px] h-[84px]">Image</div>

          <div className="flex items-center">
            <div>
              <div className="flex gap-[1px]">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <HalfStar></HalfStar>
              </div>
              <p className="text-medium font-bold  text-header pt-[3px]">
                Slim Fit Cotton
              </p>
              <p className="font-bold  text-loginColor  text-sm">400.00 bdt</p>
            </div>
          </div>
        </div>


        <div className="flex gap-4 pt-[12px]">
          <div className="border w-[95px] h-[84px]">Image</div>

          <div className="flex items-center">
            <div>
              <div className="flex gap-[1px]">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <HalfStar></HalfStar>
              </div>
              <p className="text-medium font-bold  text-header pt-[3px]">
                Slim Fit Cotton
              </p>
              <p className="font-bold  text-loginColor  text-sm">400.00 bdt</p>
            </div>
          </div>
        </div>



        <div className="flex gap-4 pt-[12px]">
          <div className="border w-[95px] h-[84px]">Image</div>

          <div className="flex items-center">
            <div>
              <div className="flex gap-[1px]">
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <HalfStar></HalfStar>
              </div>
              <p className="text-medium font-bold  text-header pt-[3px]">
                Slim Fit Cotton
              </p>
              <p className="font-bold  text-loginColor  text-sm">400.00 bdt</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
