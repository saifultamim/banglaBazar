'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  
  const addToCart = (product:any) => {
    const produc = product
    const storedCart = localStorage.getItem('cart');
    let cartArray = storedCart ? JSON.parse(storedCart) : [];
    console.log("cartArray ",cartArray,produc)
  
    const foundProduct = cartArray.find((product:any) =>
      product.productName === produc.productName &&
      product.productWeight === produc.productWeight
    );
    
    console.log(foundProduct);
    if(!foundProduct){
      cartArray.push(product);
      localStorage.setItem('cart', JSON.stringify(cartArray));
      setCart(cartArray);
    }
       
        }  
  return (
    <div className="mb-10 " key={key}>
      <div
        className="w-[250px] h-[310px] mx-auto border border-[#BBBBBB] rounded-[20px] p-3  "
        style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
      >
        <Image src={productImg} width={196} height={196} alt="Product Image" />
        <p className="text-[15px] text-[400] text-left">{productName}</p>
        <p className="text-[15px] font-[400] text-left">{productWeight}</p>
        <div className="flex justify-between items-center ">
          <p className="text-[15px] font-[700] text-left">{productPrice}</p>
          <button className="flex items-center justify-between bg-green-dark text-white px-2 py-1 rounded-[3px] w-2/2 gap-1">
            <HiShoppingCart className="text-xl" />
            <p className="text-[14px]" onClick={()=>addToCart({productName,productWeight,productPrice})}>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}
