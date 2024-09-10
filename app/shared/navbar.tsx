// "use client";
// import React, { useState } from "react";
// import logo from "@/app/assets/navbar/BB 1.png";
// import Image from "next/image";
// import Link from "next/link";
// import { HiShoppingCart, HiMenu, HiX } from "react-icons/hi";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <main>
//       <section className="w-[87%] mx-auto py-3">
//         <div className="flex justify-between items-center md:grid md:grid-cols-12 md:gap-4">
//           <div className="flex items-center md:col-span-4 mb-3 md:mb-0">
//             <Link href="/">
//               <Image src={logo.src} alt="logo" width={85} height={85} />
//             </Link>
//           </div>
//           <div className="hidden md:flex md:col-span-8 justify-end items-center">
//             <div className="flex flex-col md:flex-row items-center justify-end">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="text-sm border border-[#A9A9A9] py-1 px-4 rounded-md mb-3 md:mb-0 mr-0 md:mr-3 w-full md:w-[500px]"
//                 style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
//               />
//               <Link
//                 href="/cart"
//                 className="text-sm text-center py-1 px-3 rounded-md bg-[#00C154] text-white mb-3 md:mb-0 mr-0 md:mr-3"
//               >
//                 <HiShoppingCart className="text-2xl" />
//               </Link>
//               <Link
//                 href="/login"
//                 className="text-sm text-center border border-black py-1 px-4 rounded-md text-black mb-3 md:mb-0 mr-0 md:mr-3"
//               >
//                 Log in
//               </Link>
//               <Link
//                 href="/signup"
//                 className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>
//           {/* Hamburger Menu */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-black focus:outline-none"
//             >
//               {isOpen ? (
//                 <HiX className="text-3xl" />
//               ) : (
//                 <HiMenu className="text-3xl" />
//               )}
//             </button>
//           </div>
//         </div>
//         {/* Mobile Menu */}
//         {isOpen && (
//           <section className="md:hidden w-full flex flex-col items-center py-3 space-y-3">
//             <input
//               type="text"
//               placeholder="Search"
//               className="text-sm border border-[#A9A9A9] py-1 px-4 rounded-md w-full"
//               style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
//             />
//             <Link
//               href="/cart"
//               className="text-sm text-center py-1 px-3 rounded-md bg-[#00C154] text-white w-full"
//             >
//               <HiShoppingCart className="text-2xl mx-auto" />
//             </Link>
//             <Link
//               href="/login"
//               className="text-sm text-center border border-black py-1 px-4 rounded-md text-black w-full"
//             >
//               Log in
//             </Link>
//             <Link
//               href="/signup"
//               className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white w-full"
//             >
//               Sign Up
//             </Link>
//           </section>
//         )}
//       </section>
//     </main>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import logo from "@/app/assets/navbar/BB 1.png";
import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [length,setLength]=useState(0)
useEffect(()=>{
  const productLength = JSON.parse(localStorage.getItem('cart') || '[]')
  const length = productLength.length
 setLength(length)
},[])

  return (
    <main>
      <section className="w-[87%] mx-auto py-3">
        <div className="flex lg:flex justify-between items-center md:grid md:grid-cols-5 md:gap-4  mt-7 ">
          <div className="flex items-center md:col-span-4 mb-3 md:mb-0 ">
            <Link href="/">
              <Image src={logo.src} alt="logo" width={85} height={85} />
            </Link>
          </div>
          {/* md:flex */}
          <div className="hidden md:hidden lg:inline   md:col-span-8 justify-end items-center">
            <div className="flex flex-col md:flex-row items-center justify-end">
           
              <Link
                href="../products"
                className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white "
              >
                Products
              </Link>
              <Link
                href="../products/product-specific"
                className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white "
              >
               product-specific
              </Link>
              <input
                type="text"
                placeholder="Search"
                className="text-sm border border-[#A9A9A9] py-1 px-4 rounded-md mb-3 md:mb-0 md:mr-3 w-full md:w-[500px] lg:w-[300px]"
                style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
              />
              <Link
                href="../components/addcart"
                className="text-sm text-center py-1 px-4 rounded-md bg-[#00C154] text-white  mb-3 md:mb-0 md:mr-3 flex relative"
              >
                {/* <p className='absolute text-white ml-6 '>{length}</p> */}
                <HiShoppingCart className="text-2xl mx-auto" />
                <p className=' w-1/3 border border-black ml-5  absolute text-black font-bold '>+{length}</p>
              </Link>
              <Link
                href="/login"
                className="text-sm text-center border border-black py-1 px-4 rounded-md text-black mb-3 md:mb-0 md:mr-3"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
          {/* Hamburger Menu */}
          <div className="md:inline-block  lg:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <section className=" w-full flex flex-col items-center py-3 space-y-3">
            <input
              type="text"
              placeholder="Search"
              className="text-sm border border-[#A9A9A9] py-1 px-4 rounded-md w-full"
              style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
            />
            <Link
                href="../products"
                className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white "
              >
                Products
              </Link>
              <Link
                href="../products/product-specific"
                className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white "
              >
               product-specific
              </Link>
            <Link
               href="../components/addcart"
              className="text-sm text-center py-1 px-4 rounded-md bg-[#00C154] text-white w-full flex"
            >
              <HiShoppingCart className="text-2xl mx-auto" />
              <p className=' w-1/3 ml-5  absolute text-black font-bold '>+{length}</p>
            </Link>
            <Link
              href="/login"
              className="text-sm text-center border border-black py-1 px-4 rounded-md text-black w-full"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white w-full"
            >
              Sign Up
            </Link>
          </section>
        )}
      </section>
    </main>
  );
}
