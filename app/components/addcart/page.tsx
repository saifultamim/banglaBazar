/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect,  useState } from "react";
import Beef from "@/app/assets/products/Beef Bone-In Premium.png";
import Himsagar from "@/app/assets/products/Himsagar Mango.png";
import Nazirshail from "@/app/assets/products/Nazirshail Rice.png";
import PureIt from "@/app/assets/products/Pure It Kit.png";
import MasurDal from "@/app/assets/products/Masur Dal Premium.png";
import BroilerChicken from "@/app/assets/products/Broiler Chicken wo Skin.png";
import ChickenEgg from "@/app/assets/products/Chicken Egg.png";
import DesiOnion from "@/app/assets/products/Desi Onion.png";
import BombaySweetsChanachur from "@/app/assets/products/Bombay Sweets Chanachur.png";
import KurKure from "@/app/assets/products/KurKure S&O.png";
import RuchiJhalChanachur from "@/app/assets/products/Ruchi Jhal Chanachur.png";
import AmulDarkChocolate from "@/app/assets/products/Amul Dark Chocolate.png";
import PotatoWhite from "@/app/assets/products/Potato White.png";
import Capsicum from "@/app/assets/products/Capsicum.png";
import GreenChili from "@/app/assets/products/Green Chili.png";
import LongBegun from "@/app/assets/products/Long Begun.png";
import MuttonPremium from "@/app/assets/products/Mutton Premium.png";
import RoastChicken from "@/app/assets/products/Roast Chicken.png";
import oil from "@/app/assets/home/oil.png";
import rice from "@/app/assets/home/rice.png";
import coloAds from "@/app/assets/advertisement/cola.png";
import Image from "next/image";
import { useRouter } from "next/navigation";



const page =  () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [matched,setMatched]= useState<any[]>([]);
     useEffect(() => {
       
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      console.log('stored cart',storedCart)
     
      setCartItems(storedCart);
   
   

      }, []);

//    console.log('stored product ',cartItems)
//    const increaseQuantity = (index: number) => {
//     const updatedCart = [...cartItems];
//     updatedCart[index].quantity += 1;
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
//   };
//    const decreaseQuantity = (index: number) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity > 1) {
//       updatedCart[index].quantity -= 1;
//       setCartItems(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
//     }
//   };
  const handleProduct=()=>{
    console.log('matched product ',matched)
  }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex  gap-4 justify-around font-bold mb-8'>
                <p>Product Name</p>
                <p>Product Weight</p>
                <p>Product Price</p>
                <p>remove / add</p>
                <p>quantity</p>
                <p>Delete</p>
            </div>
            <div >
      {cartItems.map((product, index) => (
        <div key={index} className='flex gap-16'>
          <h3>{product.productName}</h3>
          <p>{product.productWeight}</p>
          <p>{product.productPrice}</p>
          <div>
            <button>-</button>
            
            <button onClick={handleProduct}>product</button>
          </div>
        </div>
      ))}
    </div>
         
           
        </div>
    );
};

export default page;