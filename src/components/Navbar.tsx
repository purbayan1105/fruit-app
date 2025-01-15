"use client";

import UserContext from "@/context/UserContext";
import { logoutUser } from "@/services/userServ";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaRegHeart, FaUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const Navbar = () => {
  const context = useContext(UserContext) as any;

  const router = useRouter();

  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //   Logout Handle
  const logoutBtnHandle = async () => {
    try {
      const result = await logoutUser();
      toast.success("Log out successful");
      window.location.reload();
      router.push("/");
    } catch (error) {
      console.log("error at manage accounts page", error);
    }
  };
  //
  return (
    <>
      <nav
        className={`grid grid-cols-2 lg:grid-cols-3 h-[15dvh] items-center fixed z-50 w-full ${
          isScrolled ? "bg-black" : ""
        }`}>
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

        <ul className="lg:grid grid-flow-col items-center font-normal text-sm justify-center space-x-5 hidden poppins">
          <li className="text-orange-400">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Pages</li>
          <li className="text-white">News</li>
          <li className="text-white">Contact</li>
          <li className="text-white">Shop</li>
        </ul>
        <div className=" lg:grid grid-flow-col items-center justify-center text-white px-10 space-x-8 hidden">
          <MdOutlineShoppingCart color="" size={25} />
          <CiSearch size={25} />
          <Link href="/favourites">
            {" "}
            <FaRegHeart size={25} color="red" />
          </Link>

          {context?.user ? (
            <button
              className="flex items-center gap-3 poppins bg-violet-500 text-white px-4 py-3 rounded-xl"
              onClick={logoutBtnHandle}>
              <Image
                src={context.user.data.imageUrl}
                alt="profile-img"
                height={100}
                width={100}
                className="h-6 w-6 rounded-full"
              />
              <div className="">Log Out</div>
            </button>
          ) : (
            <Link href="/login">
              {" "}
              <FaUser size={20} />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
