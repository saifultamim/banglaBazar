import Slider from "./components/reuseable/slider";
import ProductCard from "./components/home/product-card";
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
import SliderSetting from "./components/reuseable/slider";
import FocusOnSelect from "./components/reuseable/slider";

const products = [
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

export default function Home() {
  return (
    <main className="p-24">
      {/* <Slider>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            productWeight={product.productWeight}
            productPrice={product.productPrice}
            productImg={product.productImg}
          />
        ))}
      </Slider> */}
      <FocusOnSelect />
    </main>
  );
}
