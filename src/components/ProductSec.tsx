import { productServ } from "@/services/productserv";
import ProductLists, { ItemProps } from "./ProductLists";
import axios from "axios";

type ProductSecProps = {
  data: ItemProps[];
};

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
          Products are stored in and then fetched from the MongoDB database
          using API calls.
        </div>
        <ProductLists />
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get(
//       "http://localhost:3000/api/seedproductapi"
//     );
//     const result = response.data;
//     const data = result.data; // Extracting the 'data' array

//     console.log("data", data);

//     if (!data || data.length === 0) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// }

export default ProductSec;
