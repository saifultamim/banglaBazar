import banner from "@/app/assets/home/banner.png";
import rice from "@/app/assets/home/rice.png";
import oil from "@/app/assets/home/oil.png";
import Image from "next/image";
import "./style.css";
export default function HomePageBanner() {
  return (
    <div className="mb-10">
      <Image
        src={banner.src}
        alt="Banner"
        className="w-full"
        width={500}
        height={500}
      />
      <div>
        <div className="bottom-section">
          <div className="text-white">
            <p className="text-lg">12:12:12 Left</p>
          </div>
          <div className="relative">
            <div className="ads-section">
              <div className="flex flex-col md:flex-row items-center justify-around bg-[#A80000] overflow-hidden">
                <div className="flex items-center bg-red-600 text-white py-2 rounded-lg md:mr-4">
                  <Image
                    src={oil.src}
                    alt="Pusti Soyabin Oil"
                    className="oil-img md:absolute"
                    width={200}
                    height={200}
                  />
                  <div className="ml-2">
                    <p className="text-[15px] font-[400]">Pusti Soyabin Oil</p>
                    <p className="text-[15px] font-[400]">SL</p>
                    <p className="text-[15px] font-[700]">900Bdt</p>
                  </div>
                </div>
                <div className="flex items-center bg-red-600 text-white p-2 rounded-lg">
                  <Image
                    src={rice.src}
                    alt="Nazirshail Rice"
                    className="rice-img md:absolute"
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
          </div>
          <div className="text-white">
            <p className="text-lg">DEAL OF THE DAY</p>
          </div>
        </div>
      </div>
    </div>
  );
}
