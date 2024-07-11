import banner from "@/app/assets/home/banner.png";
import rice from "@/app/assets/home/rice.png";
import oil from "@/app/assets/home/oil.png";
import Image from "next/image";

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
        <div className="bg-black flex justify-around items-center py-10">
          <div className="text-white">
            <p className="text-lg">12:12:12 Left</p>
          </div>
          <div className="relative">
            {/* White background above the red content */}
            <div
              className="absolute top-[-75px] md:top-[-75px] left-1/2 transform -translate-x-1/2 w-full md:w-[780px] bg-white z-20 py-5 md:py-10 rounded-lg shadow-lg"
              style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
            >
              {/* Red background for the content */}
              <div className="flex flex-col md:flex-row items-center justify-around bg-[#A80000] overflow-hidden ">
                <div className="flex items-center bg-red-600 text-white py-2 rounded-lg md:mr-4">
                  <Image
                    src={oil.src}
                    alt="Pusti Soyabin Oil"
                    className="w-[130px] h-[140px] md:absolute md:left-6"
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
                    className="w-[130px] h-[140px] md:absolute md:right-6"
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
