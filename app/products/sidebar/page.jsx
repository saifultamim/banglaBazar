import React from "react";
import kurkureAds from "../../assets/advertisement/kurkure.png";
import pamirColaAds from "../../assets/advertisement/pamir-cola.png";
import shanAds from "../../assets/advertisement/shan.png";
import Image from "next/image";
import Link from "next/link";
import "../style.css";
export default function ProductsPageSidebar() {
  return (
    <div>
      <div className="sidebar rounded-bl-lg rounded-br-lg bg-green-dark text-white">
        <h2 className="text-[20px] font-[500] mb-4 pl-4">Category</h2>
        <h3 className="text-[14px] font-[500] mb-7 bg-[#00C154] px-3 py-1">
          Popular Picks
        </h3>
        <div className="mb-6 pl-4">
          <ul className="pl-3">
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                All Items
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Fresh Vege
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Bangladeshi Grocery
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Indian Grocery
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Pakistani Grocery
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Deli Items
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Meat Items
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Milk and Beverages
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Cooking Essentials
              </Link>
            </li>
            <li className="mb-2 hover:bg-[#00C154] rounded-tl-lg rounded-bl-lg py-1 px-3">
              <Link href="#" className="text-[11px] font-[700] text-white ">
                Special Offers
              </Link>
            </li>
          </ul>
        </div>
        <ul className="pl-4">
          <li className="mb-2">
            <a href="#" className="text-[14px] font-[500] mb-7">
              Grocery
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-[14px] font-[500] mb-7">
              Chocolate and Snacks
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-[14px] font-[500] mb-7">
              Fresh Meat
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-primary">
              Fresh Vege
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebar mt-4">
        <Image
          src={kurkureAds.src}
          alt="ads"
          width={500}
          height={10}
          className="w-full h-auto hidden md:block"
        />
      </div>


      <div className=" sidebar mt-4">
        <Image
          src={pamirColaAds.src}
          alt="ads"
          width={350}
          height={50}
          className="w-full  h-auto hidden md:block"
        />
      </div>


      <div className=" sidebar mt-4">
        <Image
          src={shanAds.src}
          alt="ads"
          width={350}
          height={50}
          className="w-full h-auto hidden md:block"
        />
      </div>


    </div>
  );
}
