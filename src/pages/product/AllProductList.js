import Star from "../../components/svg/Star";
import ShopCart from "../../components/svg/ShopCart";
import ShopWishList from "../../components/svg/ShopWishList";
import ShopEye from "../../components/svg/ShopEye";
import HalfStar from "../../components/svg/HalfStar";
import EmptyStar from "../../components/svg/EmptyStar";
import { useGetProductsQuery } from "../../features/product/ProductApi";
export default function AllProductList({ product }) {
  const { name, image, price, rating } = product;

  const fullStarts = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStart = 5 - fullStarts - (halfStar ? 1 : 0);


  return (
    <div>
      <div className="">
        <div className="relative group">
          <img
            src={image[2]}
            alt="image"
            className="w-[100%] h-[360px] rounded-md"
          />
          <div className="absolute bottom-0 bg-white w-[100%]  shadow-lg h-14  opacity-0  group-hover:opacity-100 transition-opacity duration-300 ">
            <div className="flex gap-2 justify-center items-center h-[100%]">
              <div className="w-12 h-8 flex justify-center items-center shadow-lg cursor-pointer bg-loginColor hover:bg-loginBg rounded-md">
                <ShopWishList></ShopWishList>
              </div>
              <div className=" w-12 h-8 flex justify-center items-center shadow-lg cursor-pointer  bg-loginColor hover:bg-loginBg rounded-md">
                <ShopCart></ShopCart>
              </div>
              <div className=" w-12 h-8 flex justify-center items-center shadow-lg cursor-pointer  bg-loginColor hover:bg-loginBg rounded-md">
                <ShopEye></ShopEye>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[14px]">
          <div className="text-center">
            <p> {name} </p>
            <div className="flex gap-2 justify-center pt-[6px]">
              {/* <del className="text-sm text-text-paragraph">
                {deleteAmount}
                <sup>tk</sup>
              </del> */}
              <p className="text-medium font-bold text-loginBg ">{price} tk</p>
            </div>
            <div className="flex justify-center">
              {[...Array(fullStarts)].map((_, i) => (
                <Star key={`full-${i}`} />
              ))}
              {halfStar && <HalfStar key="half" />}
              {[...Array(emptyStart)].map((_, i) => (
                <EmptyStar key={`empty-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
