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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5 mb-10 mx-5">
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
  );
}
