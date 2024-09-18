/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect,  useState } from "react";
 import none from "@/app/assets/products/none.jpg";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { ProductImages } from "./product";
import { deleteProduct } from "../components/reuseableCart/button/deleteProduct";
import { increaseProduct } from "../components/reuseableCart/button/increaseProduct";
import { decreaseProduct } from "../components/reuseableCart/button/decreaseProduct";
import { images } from "../components/reuseableCart/image/forImagePath";



const page =  () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [total,setTotal]=useState(0)
     useEffect(() => {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
              const updatedCart = storedCart.map((item: any) => ({
                ...item,
                quantity: item.quantity || 1
            }));
            setCartItems( updatedCart);
      }, []);

      useEffect(() => {
         // Calculate subtotal whenever cartItems change
        const total = cartItems.reduce((acc, product) => 
            acc + (product.quantity * parseFloat(product.productPrice.replace('Bdt', ''))), 
            0
        );
        setTotal(total);
    }, [cartItems]);



    return (
      <div className='w-11/12 mx-auto'>
    
      <div className='grid grid-cols-5 lg:grid-cols-7 gap-4 p-2 font-bold text-xs lg:text-base'>
        <div className='hidden lg:block'>Image</div> 
        <div className=' lg:col-span-2'>Name & Weight</div> 
        <div className='ml-8 md:ml-16 lg:ml-0'>Price</div>
        <div className='ml-2 md:ml-14 lg:ml-0'>Quantity</div>
        <div className='ml-4 md:ml-12 lg:ml-0'>Total</div>
        <div className='  md:ml-0 lg:ml-0'>Delete</div>
      </div>
    
      <hr className='border-slate mb-4' />
    
    

      {cartItems.map((product: any, index:any) => (
        <div key={index} className='grid grid-cols-6  text-[8px] md:text-base lg:text-base lg:grid-cols-7  items-center  rounded-lg bg-slate-100'>
            {/* Image */}
          <div className='hidden lg:flex '>
            <Image 
              alt='productImage' 
              src={images[product.productName as ProductImages] || none} 
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
            {/* Decrease Button */}
            <button 
              className="text-sm lg:py-1 px-1 md:px-2 lg:px-4 rounded-md bg-green-dark text-white"
              onClick={() => decreaseProduct(index,cartItems,setCartItems)}
            >
              -
            </button>

            <p>{product.quantity}</p>
            {/* Increase Button */}
            <button 
              className="text-sm lg:py-1 px-1 md:px-2 lg:px-4 rounded-md bg-green-dark text-white"
              onClick={() => increaseProduct(index,cartItems,setCartItems)}
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
              onClick={() => deleteProduct(index,cartItems,setCartItems)}
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