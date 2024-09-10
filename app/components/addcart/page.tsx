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
import { MdDelete } from "react-icons/md";

const images  = {
  "Beef Bone-In Premium": Beef,
  "Himsagar Mango": Himsagar,
  "Nazirshail Rice": Nazirshail,
  "Pure It Kit": PureIt,
  "Masur Dal Premium": MasurDal,
  "Broiler Chicken wo Skin": BroilerChicken,
  "Chicken Egg": ChickenEgg,
  "Desi Onion": DesiOnion,
  "Bombay Sweets Chanachur": BombaySweetsChanachur,
  "KurKure S&O": KurKure,
  "Ruchi Jhal Chanachur": RuchiJhalChanachur,
  "Amul Dark Chocolate": AmulDarkChocolate,
  "Potato White": PotatoWhite,
  "Capsicum": Capsicum,
  "Green Chili": GreenChili,
  "Long Begun": LongBegun,
  "Mutton Premium": MuttonPremium,
  "Roast Chicken": RoastChicken
};

const page =  () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [total,setTotal]=useState(0)
     useEffect(() => {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
              //===================================================
              const updatedCart = storedCart.map((item: any) => ({
                ...item,
                quantity: item.quantity || 1
            }));
            setCartItems( updatedCart);
              //====================================================
              //================================================
           
              //=============================================
      //setCartItems(storedCart);
      }, []);
      useEffect(() => {
        // Calculate subtotal whenever cartItems change
        const total = cartItems.reduce((acc, product) => 
            acc + (product.quantity * parseFloat(product.productPrice.replace('Bdt', ''))), 
            0
        );
        setTotal(total);
    }, [cartItems]);

const decreaseProduct = (index:number) => {
//   setCartItems(cartItems.map((product, i) =>
//     i === index
//         ? { ...product, quantity: Math.max(product.quantity - 1, 1) } // Ensure quantity doesn't go below 1
//         : product
// ));
const updatedCart = cartItems.map((product, i) =>
  i === index
      ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
      : product
);
setCartItems(updatedCart);
localStorage.setItem('cart', JSON.stringify(updatedCart));
};

const increaseProduct = (index:number) => {
//  setCartItems(cartItems.map((product, i) =>
//     i === index
//         ? { ...product, quantity: product.quantity + 1 } 
//         : product
// ));
const updatedCart = cartItems.map((product, i) =>
  i === index
      ? { ...product, quantity: product.quantity + 1 }
      : product
);
setCartItems(updatedCart);
localStorage.setItem('cart', JSON.stringify(updatedCart));
}
const deleteProduct = (index: number) => {
  const updatedCart = cartItems.filter((_, i) => i !== index);
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

    return (
      <div className='w-11/12 mx-auto'>
      {/* Grid layout for headings */}
      <div className='grid grid-cols-5 lg:grid-cols-7 gap-4 p-2 font-bold text-xs lg:text-base'>
        {/* Headings for different columns */}
        <div className='hidden lg:block'>Image</div> {/* Hidden on small screens, shown on large */}
        <div className=' lg:col-span-2'>Name & Weight</div> {/* Spans 2 columns */}
        <div className='ml-8 md:ml-16 lg:ml-0'>Price</div>
        <div className='ml-2 md:ml-14 lg:ml-0'>Quantity</div>
        <div className='ml-4 md:ml-12 lg:ml-0'>Total</div>
        <div className='  md:ml-0 lg:ml-0'>Delete</div>
      </div>
    
      <hr className='border-slate mb-4' />
    
      {/* Grid layout for cart items */}
      {cartItems.map((product, index) => (
        <div key={index} className='grid grid-cols-6  text-[8px] md:text-base lg:text-base lg:grid-cols-7  items-center  rounded-lg bg-slate-100'>
          {/* Image column, hidden on small and medium screens */}
          <div className='hidden lg:flex '>
            <Image 
              alt='productImage' 
              src={images[product.productName] || Beef} 
              width={100} 
              height={100} 
              className='p-2 rounded-lg'
            />
          </div>
    
          {/* Name and Weight */}
          <div className=' col-span-2 '>
            <h3>{product.productName}</h3>
            <p>{product.productWeight}</p>
          </div>
    
          {/* Price */}
          <div className=''>
            {product.productPrice}
          </div>
    
          {/* Quantity control */}
          <div className='flex items-center gap-2'>
            <button 
              className="text-sm lg:py-1 px-1 md:px-2 lg:px-4 rounded-md bg-green-dark text-white"
              onClick={() => decreaseProduct(index)}
            >
              -
            </button>
            <p>{product.quantity}</p>
            <button 
              className="text-sm lg:py-1 px-1 md:px-2 lg:px-4 rounded-md bg-green-dark text-white"
              onClick={() => increaseProduct(index)}
            >
              +
            </button>
          </div>
    
          {/* Total price */}
          <div className=''>
            { (product.quantity * parseFloat(product.productPrice.replace('Bdt', ''))).toFixed(2) } Bdt
      
          </div>
        
          {/* Delete button */}
          <div className='text-red'>
            <button 
              className='text-red-600 text-base lg:text-2xl' 
              onClick={() => deleteProduct(index)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    
      <hr className='border-slate mb-4' />
    
      {/* Subtotal */}
      <div className='w-11/12 mb-4'>
        <h2 className='grid justify-end font-bold text-black'>
          SubTotal: {total.toFixed(2)} Bdt
        </h2>
      </div>
    </div>
    
    );
};

export default page;