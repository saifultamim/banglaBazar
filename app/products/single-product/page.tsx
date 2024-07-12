import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi2";

type Props = {
  productName: string;
  productWeight: string;
  productPrice: string;
  productImg: any;
};
export default function SingleProductPage({
  productName,
  productWeight,
  productPrice,
  productImg,
}: Props) {
  return (
    <div
      className="w-[206px] h-[290px] mx-auto border border-[#BBBBBB] rounded-[20px] p-3"
      style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
    >
      <Image src={productImg} width={196} height={196} alt="Product Image" />
      <p className="text-[15px] text-[400] text-left">{productName}</p>
      <p className="text-[15px] font-[400] text-left">{productWeight}</p>
      <div className="flex justify-between items-center ">
        <p className="text-[15px] font-[700] text-left">{productPrice}</p>
        <div className="flex items-center justify-between bg-green-dark text-white px-2 py-1 rounded-[3px] w-1/2">
          <HiShoppingCart className="text-xs" />
          <button className="text-[7px]">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
