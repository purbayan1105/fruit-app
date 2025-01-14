"use client";
import Navbar from "@/components/Navbar";
import Note from "@/components/Note";
import ProductSec from "@/components/ProductSec";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdOutlineWifiCalling3 } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";

const page = () => {
  return (
    <>
      <div className="relative bg-cover bg-center h-screen bg-[url('/bg.jpg')]">
        <div className="bg-[#0000007a] w-full absolute h-screen">
          <Navbar />
          {/* main section */}
          <main className="flex justify-center items-center h-[100dvh] poppins">
            <div className="space-y-6">
              <div className="text-orange-400 font-semibold text-2xl text-center">
                Fresh & Organic
              </div>
              <div className="text-white font-bold text-5xl text-center">
                Deliciious Seasonal Fruits
              </div>
              <div className="flex justify-center items-center space-x-5">
                <button className="bg-orange-600 px-3 py-3 rounded-3xl text-md text-white border-2 border-solid border-orange-600">
                  Fruit Collection{" "}
                </button>
                <button className=" px-3 py-3 rounded-3xl text-lg border-2 border-solid border-orange-400 text-white">
                  Contact Us
                </button>
              </div>
            </div>
          </main>
          {/* section-2 */}
        </div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:h-[30dvh] bg-gray-100 space-y-6 lg:space-y-0 py-5 lg:py-0 poppins">
        <div className="flex items-center gap-3 justify-center">
          <div className="border-4 border-dotted border-orange-500 rounded-full p-2">
            <FaTruckFast size={36} />
          </div>
          <div className="">
            <div className="text-xl font-semibold">Free Shipping</div>
            <div className="text-sm  text-gray-600">Wehn Order Over $75</div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <div className="border-4 border-dotted border-orange-500 rounded-full p-2">
            <MdOutlineWifiCalling3 size={36} />
          </div>
          <div className="">
            <div className="text-xl font-semibold">24/7 Contact</div>
            <div className="text-sm  text-gray-600">Get Support All Day</div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <div className="border-4 border-dotted border-orange-500 rounded-full p-2">
            <RiRefund2Fill size={36} />
          </div>
          <div className="">
            <div className="text-xl font-semibold">Refund </div>
            <div className="text-sm  text-gray-600">Refund Within 3 Days</div>
          </div>
        </div>
      </section>
      <ProductSec />
      <Note />
    </>
  );
};

export default page;
