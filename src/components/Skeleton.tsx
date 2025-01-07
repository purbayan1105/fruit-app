import { ItemProps } from "./ProductLists";

const Skeleton = () => {
  return (
    <div className="shadow-2xl hover:shadow-white rounded-md space-y-8 py-8 col-span-1 lg:w-[400px] animate-pulse">
      <div className="flex justify-center m-0">
        <div className="w-[200px] h-[200px] bg-gray-300 rounded"></div>
      </div>
      <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto"></div>
      <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto"></div>
      <div className="flex justify-center items-center">
        <div className="bg-gray-300 h-10 w-36 rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Skeleton;
