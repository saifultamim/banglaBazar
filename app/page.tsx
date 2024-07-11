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
import ReuseableSlider from "./components/reuseable/slider/slider";
import PotatoWhite from "@/app/assets/products/Potato White.png";
import Capsicum from "@/app/assets/products/Capsicum.png";
import GreenChili from "@/app/assets/products/Green Chili.png";
import LongBegun from "@/app/assets/products/Long Begun.png";
import ProductCard from "./product/product-card/page";
import HomePageBanner from "./components/home/banner";

const popularPicks = [
  {
    id: 1,
    productName: "Beef Bone-In Premium",
    productWeight: "500gm",
    productPrice: "394Bdt",
    productImg: Beef,
  },
  {
    id: 2,
    productName: "Himsagar Mango",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: Himsagar,
  },
  {
    id: 3,
    productName: "Nazirshail Rice",
    productWeight: "1KG",
    productPrice: "85Bdt",
    productImg: Nazirshail,
  },
  {
    id: 4,
    productName: "Pure It Kit",
    productWeight: "1500Ltr",
    productPrice: "730Bdt",
    productImg: PureIt,
  },
  {
    id: 5,
    productName: "Masur Dal Premium",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: MasurDal,
  },
  {
    id: 6,
    productName: "Broiler Chicken w/o Skin",
    productWeight: "1KG",
    productPrice: "300Bdt",
    productImg: BroilerChicken,
  },
  {
    id: 7,
    productName: "Chicken Egg",
    productWeight: "12Pcs",
    productPrice: "185Bdt",
    productImg: ChickenEgg,
  },
  {
    id: 8,
    productName: "Desi Onion",
    productWeight: "1KG",
    productPrice: "52Bdt",
    productImg: DesiOnion,
  },
  {
    id: 9,
    productName: "Bombay Sweets Chanachur",
    productWeight: "500gm",
    productPrice: "150Bdt",
    productImg: BombaySweetsChanachur,
  },
  {
    id: 10,
    productName: "KurKure S&O",
    productWeight: "80gm",
    productPrice: "50Bdt",
    productImg: KurKure,
  },
  {
    id: 11,
    productName: "Ruchi Jhal Chanachur",
    productWeight: "300gm",
    productPrice: "100Bdt",
    productImg: RuchiJhalChanachur,
  },
  {
    id: 12,
    productName: "Amul Dark Chocolate",
    productWeight: "150gm",
    productPrice: "350Bdt",
    productImg: AmulDarkChocolate,
  },
];

const grocery = [
  {
    id: 1,
    productName: "Masur Dal Premium",
    productWeight: "500gm",
    productPrice: "75Bdt",
    productImg: MasurDal,
  },
  {
    id: 2,
    productName: "Broiler Chicken w/o Skin",
    productWeight: "1KG",
    productPrice: "300Bdt",
    productImg: BroilerChicken,
  },
  {
    id: 3,
    productName: "Chicken Egg",
    productWeight: "12Pcs",
    productPrice: "185Bdt",
    productImg: ChickenEgg,
  },
  {
    id: 4,
    productName: "Desi Onion",
    productWeight: "1KG",
    productPrice: "52Bdt",
    productImg: DesiOnion,
  },
];

const chocolateAndSnacks = [
  {
    id: 1,
    productName: "Bombay Sweets Chanachur",
    productWeight: "500gm",
    productPrice: "150Bdt",
    productImg: BombaySweetsChanachur,
  },
  {
    id: 2,
    productName: "KurKure S&O",
    productWeight: "80gm",
    productPrice: "50Bdt",
    productImg: KurKure,
  },
  {
    id: 3,
    productName: "Ruchi Jhal Chanachur",
    productWeight: "300gm",
    productPrice: "100Bdt",
    productImg: RuchiJhalChanachur,
  },
  {
    id: 4,
    productName: "Amul Dark Chocolate",
    productWeight: "150gm",
    productPrice: "350Bdt",
    productImg: AmulDarkChocolate,
  },
];

const freshVegetables = [
  {
    id: 1,
    productName: "Potato White",
    productWeight: "500gm",
    productPrice: "35Bdt",
    productImg: PotatoWhite,
  },
  {
    id: 2,
    productName: "Capsicum",
    productWeight: "250gm",
    productPrice: "112Bdt",
    productImg: Capsicum,
  },
  {
    id: 3,
    productName: "Green Chili",
    productWeight: "100gm",
    productPrice: "27Bdt",
    productImg: GreenChili,
  },
  {
    id: 4,
    productName: "Long Begun",
    productWeight: "500gm",
    productPrice: "55Bdt",
    productImg: LongBegun,
  },
];

const freshMeat = [];

export default function Home() {
  return (
    <main>
      <div>
        <HomePageBanner />
      </div>
      <div className="w-[80%] mx-auto">
        <div className="mb-10">
          <h3 className="text-[20px] font-[800] mb-2 md:ml-2 lg:ml-7 text-[#3D6B51]">
            POPULAR PICS
          </h3>
          <ReuseableSlider>
            {popularPicks.map((product, idx) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ReuseableSlider>
        </div>
        <div className="mb-10">
          <h3 className="text-[20px] font-[800] mb-2 md:ml-2 lg:ml-7 text-[#3D6B51]">
            GROCERY
          </h3>
          <ReuseableSlider>
            {grocery.map((product, idx) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ReuseableSlider>
        </div>
        <div className="mb-10">
          <h3 className="text-[20px] font-[800] mb-2 md:ml-2 lg:ml-7 text-[#3D6B51]">
            CHOCOLATE AND SNACKS
          </h3>
          <ReuseableSlider>
            {chocolateAndSnacks.map((product, idx) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ReuseableSlider>
        </div>
        <div className="mb-10">
          <h3 className="text-[20px] font-[800] mb-2 md:ml-2 lg:ml-7 text-[#3D6B51]">
            FRESH VEGETABLE
          </h3>
          <ReuseableSlider>
            {freshVegetables.map((product, idx) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ReuseableSlider>
        </div>
      </div>
    </main>
  );
}
