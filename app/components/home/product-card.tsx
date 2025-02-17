import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi2";

type Props = {
  key: number;
  productName: string;
  productWeight: string;
  productPrice: string;
  productImg: any;
};

export default function ProductCard({
  key,
  productName,
  productWeight,
  productPrice,
  productImg,
}: Props) {
  return (
    <div key={key} className="mb-10">
      <div
        className="w-[350px] h-[290px] mx-auto border border-[#BBBBBB] rounded-[20px] p-3"
        style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
      >
        <Image src={productImg} width={196} height={196} alt="Product Image" />
        <p className="text-[15px] text-[400] text-left">{productName}</p>
        <p className="text-[15px] font-[400] text-left">{productWeight}</p>
        <div className="flex justify-between items-center ">
          <p className="text-[15px] font-[700] text-left">{productPrice}</p>
          <button className="flex items-center justify-between bg-green-dark text-white px-2 py-1 rounded-[3px] w-1/2">
            <HiShoppingCart className="text-xs" />
            <p className="text-[7px]">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
