import Image from "next/image";
import logo from "@/app/assets/footer/Banglabazarwht 1.png";
import storeLogo from "@/app/assets/footer/Rectangle 8.png";

export default function Footer() {
  return (
    <main className="bg-footer-gradient">
      <section className="w-[87%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-around items-center py-14">
        <div className="text-center md:text-left">
          <Image
            src={logo.src}
            alt="logo"
            width={85}
            height={85}
            className="mx-auto md:mx-0"
          />
          <p className="text-white text-[11px] font-[400] mt-3">
            Bangla Bazar, established in 2012, is one of the largest Bangladeshi
            <br />
            Grocery items retail supermarket chains in UAE.
          </p>
        </div>
        <div className="mx-auto bg-white p-2 rounded-lg text-center">
          <p className="text-[11px] font-[400] mb-2">Download Our App</p>
          <Image
            src={storeLogo.src}
            alt="store logo"
            width={149}
            height={101}
          />
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-[11px] font-[700] text-white">CONTACT US</h4>
          <div className="text-[11px] font-[400] text-white mt-3">
            <p>House: 7Th Floor, L.R. Bhaban, </p>
            <p>2/1 Outer Circular Road, Dhaka</p>
            <p>info@banglabazaruae.com</p>
            <p>+8801313867878</p>
          </div>
        </div>
      </section>
    </main>
  );
}
