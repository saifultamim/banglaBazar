import React from "react";
import logo from "@/app/assets/navbar/BB 1.png";
import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";

export default function Navbar() {
  return (
    <main>
      <section className="w-[87%] mx-auto grid grid-cols-1 md:grid-cols-12 justify-around items-center py-3">
        <div className="col-span-4 mb-3 md:mb-0">
          <Link href="/">
            <Image src={logo.src} alt="logo" width={85} height={85} />
          </Link>
        </div>
        <div className="col-span-8">
          <div className="flex flex-col md:flex-row items-center justify-end">
            <input
              type="text"
              placeholder="Search"
              className="text-sm border border-[#A9A9A9] py-1 px-4 rounded-md mb-3 md:mb-0 mr-0 md:mr-3 w-full md:w-2/4"
              style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
            />
            <Link
              href="/cart"
              className="text-sm text-center py-1 px-3 rounded-md bg-[#00C154] text-white mb-3 md:mb-0 mr-0 md:mr-3"
            >
              <HiShoppingCart className="text-2xl" />
            </Link>
            <Link
              href="/login"
              className="text-sm text-center border border-black py-1 px-4 rounded-md text-black mb-3 md:mb-0 mr-0 md:mr-3"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
