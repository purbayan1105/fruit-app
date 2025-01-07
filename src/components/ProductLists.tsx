"use client";
import { ProductServ } from "@/services/productserv";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Skeleton from "./Skeleton";

export type ItemProps = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

const ProductLists = () => {
  //   const response = await ProductServ();
  //   const data = response?.data;
  //   console.log(data);

  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["data-fetching"],
    queryFn: async () => {
      let response = await ProductServ();
      response = response.data;
      console.log(response);

      return response;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading || isFetching) {
    return (
      <>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 lg:space-y-0 space-y-6">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </>
    );
  }

  if (data && isFetched && isSuccess) {
    return (
      <>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 lg:space-y-0 space-y-6">
            {data.map((item: ItemProps) => {
              return (
                <div
                  className="  shadow-2xl hover:shadow-white rounded-md space-y-8 py-8  col-span-1 lg:w-[400px]"
                  key={item._id}>
                  <div className="flex justify-center m-0">
                    <Image
                      src={item.imageUrl}
                      alt={`${item.title} image`}
                      height={200}
                      width={200}
                      className="w-[auto] h-[200px]"
                    />
                  </div>
                  <div className="text-center text-4xl poppins font-semibold">
                    {item.title}
                  </div>
                  <div className="text-center text-lg poppins  text-gray-500">
                    Per Kg
                  </div>
                  <div className="text-center text-4xl poppins font-semibold">
                    $ {item.price}
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="bg-orange-400 flex items-center justify-center px-4 py-3 rounded-3xl gap-1 poppins text-white text-sm">
                      <FaShoppingCart />
                      <p className="">Add To Cart</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default ProductLists;
