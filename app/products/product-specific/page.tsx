import PureItKit from "@/app/assets/products/Pure It Kit.png";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi2";
import Beef from "@/app/assets/products/Beef Bone-In Premium.png";
import Himsagar from "@/app/assets/products/Himsagar Mango.png";
import Nazirshail from "@/app/assets/products/Nazirshail Rice.png";
import PureIt from "@/app/assets/products/Pure It Kit.png";
import SingleProductPage from "../single-product/page";

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
];

export default function ProductSpecificPage() {
  return (
    <div className="">
      <div className="w-[80%] mx-auto p-4 rounded-lg shadow-md">
        <div className="mb-4 text-sm text-muted-foreground">
          <p>Product Category: Devices / Water / Unilever / pureit / <span className='text-green-dark'>1500L</span></p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0">
            {/* <Image
              src={PureItKit}
              width={738}
              height={738}
              alt="Unilever Pureit Classic Water Purifier"
              className="rounded-lg shadow-md border border-[#AFAFAF]"
              style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
            /> */}
            <Image
              src={PureItKit}
              width={738}
              height={738}
              alt="Unilever Pureit Classic Water Purifier"
              className="w-full sm:w-3/4 md:w-[300px] md:h-[400px] lg:w-[400px] xl:w-[500px] rounded-lg shadow-md border border-[#AFAFAF]"
              style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
            />
          </div>
          <div className="md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
            <div className="flex-grow">
              {/* Empty div to push content to the bottom */}
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-[24px] font-[400]">
                  Unilever Pureit Classic <br /> Water Purifier
                </h2>
                <p className="text-[24px] font-[400]">Unit: EACH</p>
                <p className="text-[24px] font-[400]">Brand: Unilever</p>
                <p className="text-[24px] font-[400]">Sold By: Meena Bazar</p>
                <p className="text-[24px] font-[400]">Category: Kitchen Ware</p>
                <p className="text-[24px] font-[900]">TK 4,749.00</p>
              </div>
              <div className="flex items-center justify-start  bg-[#3D6B51] text-white px-2 py-1 rounded-lg w-full">
                <HiShoppingCart className="text-lg ml-4" />
                <button className="text-[16px] font-[400] ml-4">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <h3 className="text-[16px] font-[600] mb-5">Product Details</h3>
          <ul className="text-[16px] font-[400]">
            <li>Virus Removal</li>
            <li>Removes 1 crore virus in 1 litre of water</li>
            <li>Activated Carbon Trap</li>
            <li>
              Removes harmful pesticides to make water safe for consumption
            </li>
            <li>HIPS / ABS body</li>
            <li>
              Made of strong plastic to ensure the purifier has a long life
            </li>
            <li>Multi-Stage Purification</li>
            <li>Purification process through Programmed Germkill Technology</li>
            <li>Break-Resistance Tap</li>
            <li>Tested up to 50,000 times to ensure that it lasts long</li>
            <li>6 Months Warranty</li>
            <li>Guarantees peace of mind for the customer, post purchase</li>
          </ul>
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        <h3 className="text-[24px] font-[900] text-[#3D6B51] text-center">
          SIMILAR PRODUCTS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-10">
          {products?.map((product, idx) => (
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
  );
}
