"use client";
import React, { useState } from "react";
import logo from "@/app/assets/navbar/BB 1.png";
import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart, HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <section className="w-[87%] mx-auto py-3">
        <div className="flex justify-between items-center md:grid md:grid-cols-12 md:gap-4">
          <div className="flex items-center md:col-span-4 mb-3 md:mb-0">
            <Link href="/">
              <Image src={logo.src} alt="logo" width={85} height={85} />
            </Link>
          </div>
          <div className="hidden md:flex md:col-span-8 justify-end items-center">
            <div className="flex flex-col md:flex-row items-center justify-end">
              <input
                type="text"
                placeholder="Search"
                className="text-sm border border-[#A9A9A9] py-1 px-4 rounded-md mb-3 md:mb-0 mr-0 md:mr-3 w-full md:w-[500px]"
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
          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <section className="md:hidden w-full flex flex-col items-center py-3 space-y-3">
            <input
              type="text"
              placeholder="Search"
              className="text-sm border border-[#A9A9A9] py-1 px-4 rounded-md w-full"
              style={{ boxShadow: "0 6px 6px -1px #A9A9A9" }}
            />
            <Link
              href="/cart"
              className="text-sm text-center py-1 px-3 rounded-md bg-[#00C154] text-white w-full"
            >
              <HiShoppingCart className="text-2xl mx-auto" />
            </Link>
            <Link
              href="/login"
              className="text-sm text-center border border-black py-1 px-4 rounded-md text-black w-full"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm text-center border border-black py-1 px-4 rounded-md bg-green-dark text-white w-full"
            >
              Sign Up
            </Link>
          </section>
        )}
      </section>
    </main>
  );
}
