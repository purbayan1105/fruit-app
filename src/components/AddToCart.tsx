"use client";

import { toast } from "react-toastify";

const AddToCart = ({ product }: any) => {
  const btnHandle = (title: any) => {
    toast.success(`${title} added to cart`);
  };
  return (
    <div className="flex justify-center mt-3">
      <button
        className="bg-green-300 px-3 py-3 rounded-md text-black font-semibold"
        onClick={() => {
          btnHandle(product.title);
        }}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
