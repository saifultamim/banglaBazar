'use client'
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi2";
import "../style.css";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
type Props = {
   productName: string;
   productWeight: string;
  productPrice: string;
  productImg: any;
};
export default function SingleProductPage({productName,productWeight,productPrice,productImg}:Props) {
  const [cart, setCart] = useState<any[]>([]);
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  
const product = {productName,productWeight,productPrice}
    const addToCart = (product:any) => {
       // Retrieve the current cart from localStorage
      
       const storedCart = localStorage.getItem('cart');
       let cartArray = storedCart ? JSON.parse(storedCart) : [];
         console.log('___ ',cartArray)
        //  cartArray.filter(product=>{
        //   if(product.productName === productName){
        //     console.log('matched')
        //   }
        //   else {
        //     console.log()
        //   }
        //  })
       // Add the new product to the cart
       cartArray.push(product);
   
       // Save the updated cart in localStorage
       localStorage.setItem('cart', JSON.stringify(cartArray));
   
       // Update the local state to reflect the changes
       setCart(cartArray);
      
    }
  return (
    <div
      className="card-width mx-auto border border-[#BBBBBB] rounded-[20px] p-3"
      style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
    >
      <Image src={productImg} width={196} height={196} alt="Product Image" />
      <p className="text-[15px] text-[400] text-left">{productName}</p>
      <p className="text-[15px] font-[400] text-left">{productWeight}</p>
      <div className="flex justify-between items-center ">
        <p className="text-[15px] font-[700] text-left">{productPrice}</p>
    
  
       <div className="flex items-center justify-between bg-green-dark text-white px-2 py-1 rounded-[3px] w-2/2 border gap-1 "
      
       >
          <HiShoppingCart className="text-xl" />
          <button className="text-[14px]" onClick={()=>addToCart(product)}>Add to cart</button>
        </div>
     
     
      </div>
    </div>
  );
}
