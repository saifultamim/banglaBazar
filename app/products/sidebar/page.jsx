import React from "react";
import kurkureAds from "../../assets/advertisement/kurkure.png";
import pamirColaAds from "../../assets/advertisement/pamir-cola.png";
import shanAds from "../../assets/advertisement/shan.png";
import Image from "next/image";
export default function ProductsPageSidebar() {
  return (
    <div>
      <div className="w-full md:w-60 pl-4 py-4 rounded-lg bg-green-dark text-white">
        {/* <div className="w-full md:w-[190px] pl-4 py-4 rounded-lg bg-green-dark text-white"> */}
        <h2 className="text-lg font-bold mb-4">Category</h2>
        <div className="mb-6">
          <h3 className="text-primary mb-2">Popular Picks</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                All Items
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Fresh Vege
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="bg-primary text-primary-foreground p-2 rounded"
              >
                Bangladeshi Grocery
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Indian Grocery
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Pakistani Grocery
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Deli Items
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Meat Items
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Milk and Beverages
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Cooking Essentials
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-primary">
                Special Offers
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-primary">
              Grocery
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-primary">
              Chocolate and Snacks
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-primary">
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

      <div className="mt-4">
        <Image
          src={kurkureAds.src}
          alt="ads"
          width={500}
          height={50}
          className="w-full h-auto"
        />
      </div>
      <div className="mt-4">
        <Image
          src={pamirColaAds.src}
          alt="ads"
          width={350}
          height={50}
          className="w-full h-auto"
        />
      </div>
      <div className="mt-4">
        <Image
          src={shanAds.src}
          alt="ads"
          width={350}
          height={50}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
