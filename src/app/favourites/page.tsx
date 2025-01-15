"use client";
import UserContext from "@/context/UserContext";
import { getFavouriteProduct } from "@/services/userServ";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useContext, useEffect } from "react";

const page = () => {
  const context = useContext(UserContext) as any;
  //Favourite page does not require to be SEO-friendly as it is dedicated for individual user only.

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["data-fetched"],
    queryFn: async () => {
      const email = context?.user?.data?.email;
      const response = await getFavouriteProduct(email);
      const favourite = response.data;
      return favourite;
    },
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return (
      <>
        <div className="text-xl font-semibold flex justify-center items-center h-screen">
          Loading...
        </div>
      </>
    );
  }

  if (data.length === 0) {
    return (
      <>
        {" "}
        <div className="text-xl font-semibold flex justify-center items-center h-screen">
          No Favourites
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-flow-col justify-center items-center gap-x-5">
        {data &&
          data.length > 0 &&
          data.map((favourite: any, index: number) => {
            return (
              <div className="" key={index}>
                <Image
                  src={favourite.imageUrl}
                  alt="image"
                  loading="lazy"
                  height={300}
                  width={300}
                  className="w-64 h-64"
                />
                <div className="">{favourite.title}</div>
                <div className="">{favourite.price}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default page;
