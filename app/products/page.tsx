import React from "react";
import SingleProductPage from "./single-product/page";
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
import ProductsPageSidebar from "@/app/products/sidebar/page";
import Image from "next/image";
import oil from "@/app/assets/home/oil.png";
import rice from "@/app/assets/home/rice.png";
import coloAds from "@/app/assets/advertisement/cola.png";
import "./style.css";
const products = [
  {
    productName: "Beef Bone-In Premium",
    productWeight: "500gm",
    productPrice: "394Bdt",
    productImg: Beef,
  },
  {
    productName: "Himsagar Mango",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: Himsagar,
  },
  {
    productName: "Nazirshail Rice",
    productWeight: "1KG",
    productPrice: "85Bdt",
    productImg: Nazirshail,
  },
  {
    productName: "Pure It Kit",
    productWeight: "1500Ltr",
    productPrice: "730Bdt",
    productImg: PureIt,
  },
  {
    productName: "Masur Dal Premium",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: MasurDal,
  },
  {
    productName: "Broiler Chicken w/o Skin",
    productWeight: "1KG",
    productPrice: "300Bdt",
    productImg: BroilerChicken,
  },
  {
    productName: "Chicken Egg",
    productWeight: "12Pcs",
    productPrice: "185Bdt",
    productImg: ChickenEgg,
  },
  {
    productName: "Desi Onion",
    productWeight: "1KG",
    productPrice: "52Bdt",
    productImg: DesiOnion,
  },
  {
    productName: "Bombay Sweets Chanachur",
    productWeight: "500gm",
    productPrice: "150Bdt",
    productImg: BombaySweetsChanachur,
  },
  {
    productName: "KurKure S&O",
    productWeight: "80gm",
    productPrice: "50Bdt",
    productImg: KurKure,
  },
  {
    productName: "Ruchi Jhal Chanachur",
    productWeight: "300gm",
    productPrice: "100Bdt",
    productImg: RuchiJhalChanachur,
  },
  {
    productName: "Amul Dark Chocolate",
    productWeight: "150gm",
    productPrice: "350Bdt",
    productImg: AmulDarkChocolate,
  },
  {
    productName: "Potato White",
    productWeight: "500gm",
    productPrice: "35Bdt",
    productImg: PotatoWhite,
  },
  {
    productName: "Capsicum",
    productWeight: "250gm",
    productPrice: "112Bdt",
    productImg: Capsicum,
  },
  {
    productName: "Green Chili",
    productWeight: "100gm",
    productPrice: "27Bdt",
    productImg: GreenChili,
  },
  {
    productName: "Long Begun",
    productWeight: "500gm",
    productPrice: "55Bdt",
    productImg: LongBegun,
  },
  {
    productName: "Beef Bone-In Premium",
    productWeight: "500gm",
    productPrice: "394Bdt",
    productImg: Beef,
  },
  {
    productName: "Himsagar Mango",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: Himsagar,
  },
  {
    productName: "Nazirshail Rice",
    productWeight: "1KG",
    productPrice: "85Bdt",
    productImg: Nazirshail,
  },
  {
    productName: "Pure It Kit",
    productWeight: "1500Ltr",
    productPrice: "730Bdt",
    productImg: PureIt,
  },
  {
    productName: "Masur Dal Premium",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: MasurDal,
  },
  {
    productName: "Broiler Chicken w/o Skin",
    productWeight: "1KG",
    productPrice: "300Bdt",
    productImg: BroilerChicken,
  },
  {
    productName: "Chicken Egg",
    productWeight: "12Pcs",
    productPrice: "185Bdt",
    productImg: ChickenEgg,
  },
  {
    productName: "Desi Onion",
    productWeight: "1KG",
    productPrice: "52Bdt",
    productImg: DesiOnion,
  },
  {
    productName: "Bombay Sweets Chanachur",
    productWeight: "500gm",
    productPrice: "150Bdt",
    productImg: BombaySweetsChanachur,
  },
  {
    productName: "KurKure S&O",
    productWeight: "80gm",
    productPrice: "50Bdt",
    productImg: KurKure,
  },
  {
    productName: "Ruchi Jhal Chanachur",
    productWeight: "300gm",
    productPrice: "100Bdt",
    productImg: RuchiJhalChanachur,
  },
  {
    productName: "Amul Dark Chocolate",
    productWeight: "150gm",
    productPrice: "350Bdt",
    productImg: AmulDarkChocolate,
  },
  {
    productName: "Beef Bone-In Premium",
    productWeight: "500gm",
    productPrice: "394Bdt",
    productImg: Beef,
  },
  {
    productName: "Himsagar Mango",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: Himsagar,
  },
  {
    productName: "Mutton Premium",
    productWeight: "500gm",
    productPrice: "675Bdt",
    productImg: MuttonPremium,
  },
  {
    productName: "Roast Chicken",
    productWeight: "250gm",
    productPrice: "220Bdt",
    productImg: RoastChicken,
  },
];
export default function ProductPage() {
  return (
    <section>
      <div className="hidden w-full md:flex justify-evenly items-center bg-black text-white py-10">
        <div>
          <p className="text-[20px] font-[400]">DEAL OF THE DAY</p>
        </div>
        <div>
          <p className="text-[20px] font-[400]">12:12:12 Left</p>
        </div>
      </div>
      <div className="sidebar-width mx-auto">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 md:col-span-2">
            <ProductsPageSidebar />
          </div>
          <div className="col-span-10 md:col-span-10">
            <div className="relative">
              <div
                className="ads-section bg-white rounded-lg shadow-lg"
                style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
              >
                <div className="md:flex flex-col md:flex-row items-center justify-around bg-[#A80000] hidden">
                  <div className="flex items-center bg-red-600 text-white py-2 rounded-lg md:mr-4">
                    <Image
                      src={oil.src}
                      alt="Pusti Soyabin Oil"
                      className="oil-img md:absolute md:left-6"
                      width={200}
                      height={200}
                    />
                    <div className="ml-2">
                      <p className="text-[15px] font-[400]">
                        Pusti Soyabin Oil
                      </p>
                      <p className="text-[15px] font-[400]">SL</p>
                      <p className="text-[15px] font-[700]">900Bdt</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-red-600 text-white p-2 rounded-lg">
                    <Image
                      src={rice.src}
                      alt="Nazirshail Rice"
                      className="rice-img md:absolute md:right-6"
                      width={200}
                      height={200}
                    />
                    <div className="ml-2">
                      <p className="text-[15px] font-[400]">Nazirshail Rice</p>
                      <p className="text-[15px] font-[400]">1KG</p>
                      <p className="text-[15px] font-[700]">85Bdt</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="cola-div absolute mt-20 md:mt-0 bg-[#F5F5F5] p-4 rounded-[18px] border border-[#B7B7B7] transform -translate-x-1/2 z-10 lg:flex flex-col justify-center items-center hidden">
                  <Image
                    src={coloAds.src}
                    alt="Cola Advertisement"
                    className="cola-ads rounded-[18px] mx-auto "
                    width={300}
                    height={300}
                  />
                  <p className="text-[11px] font-[700] text-center">
                    Pamir Cola 200ml
                  </p>
                  <h4 className="text-[16px] font-[700] text-[#A80000] text-center">
                    5 can @ 1000Bdt
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-section gap-5 mx-5 mt-5 md:mt-44">
              {products.map((product, idx) => (
                <SingleProductPage
                  key={idx}
                  productName={product.productName}
                  productWeight={product.productWeight}
                  productPrice={product.productPrice}
                  productImg={product.productImg}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
