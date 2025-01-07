import ProductLists from "./ProductLists";

const ProductSec = () => {
  return (
    <>
      <div className="lg:h-screen my-10 h-auto">
        <div className="flex justify-center items-center gap-4 mt-24">
          <p className="text-5xl font-semibold poppins">Our </p>
          <p className="text-5xl font-semibold poppins text-orange-500">
            Products
          </p>
        </div>
        <div className="flex justify-center items-center mt-1">
          <div className="h-[0.2rem] w-[3rem] rounded-3xl bg-black "></div>
        </div>
        <div className="text-center mt-5 text-gray-400">
          Products are stored in and then fetched from the mongodb database
          using api calls.{" "}
        </div>
        <ProductLists />
      </div>
    </>
  );
};

export default ProductSec;
