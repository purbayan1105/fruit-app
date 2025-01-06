import Image from "next/image";
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
          {" "}
          <nav className=" grid grid-cols-2 lg:grid-cols-3 h-[10dvh] items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/logo.png"
                width={200}
                height={100}
                alt="logo"
                className=""
              />
            </div>
            <div className="lg:hidden flex justify-end items-center px-8">
              <FaBars size={25} color="orange" />
            </div>

            <ul className="lg:grid grid-flow-col items-center font-semibold text-sm justify-center space-x-5 hidden">
              <li className="text-orange-400">Home</li>
              <li className="text-white">About</li>
              <li className="text-white">Pages</li>
              <li className="text-white">News</li>
              <li className="text-white">Contact</li>
              <li className="text-white">Shop</li>
            </ul>
            <div className=" lg:grid grid-flow-col items-center justify-center text-white px-10 space-x-4 hidden">
              <MdOutlineShoppingCart size={25} />
              <CiSearch size={25} />
            </div>
          </nav>
          {/* main section */}
          <main className="flex justify-center items-center h-[80dvh]">
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
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:h-[20dvh] bg-gray-200 space-y-6 lg:space-y-0 py-5 lg:py-0">
        <div className="flex items-center gap-3 justify-center">
          <div className="border-2 border-dotted border-orange-500 rounded-full p-2">
            <FaTruckFast size={30} />
          </div>
          <div className="">
            <div className="text-xl font-semibold">Free Shipping</div>
            <div className="text-sm  text-gray-600">Wehn Order Over $75</div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <div className="border-2 border-dotted border-orange-500 rounded-full p-2">
            <MdOutlineWifiCalling3 size={30} />
          </div>
          <div className="">
            <div className="text-xl font-semibold">24/7 Contact</div>
            <div className="text-sm  text-gray-600">Get Support All Day</div>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <div className="border-2 border-dotted border-orange-500 rounded-full p-2">
            <RiRefund2Fill size={30} />
          </div>
          <div className="">
            <div className="text-xl font-semibold">Refund </div>
            <div className="text-sm  text-gray-600">Refund Within 3 Days</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
