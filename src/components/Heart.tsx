import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { favaddFn, getFavouriteProduct } from "@/services/userServ";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import UserContext from "@/context/UserContext";

const Heart = ({ product }: any) => {
  const router = useRouter();
  const context = useContext(UserContext) as any;

  const queryClient = useQueryClient();
  const [targetedItem, setTargetedItem] = useState<any>(null);

  const { data, isLoading, isError, isFetching, isSuccess, isFetched } =
    useQuery({
      queryKey: ["favourite-fetching"],
      queryFn: async () => {
        const favProducts = await getFavouriteProduct(context.user.data.email);
        console.log("favProducts", favProducts);

        return favProducts.data;
      },
    });

  useEffect(() => {
    if (!data) {
      console.log("data not found");
    }
    if (data && data.length > 0) {
      console.log("data", data);

      const targetedProduct = data.find(
        (fruit: any) => fruit.productId.toString() === product._id
      );
      // with id it os not working
      console.log("tp", targetedProduct);

      setTargetedItem(targetedProduct);
    }
  }, [data, product._id]);

  useEffect(() => {
    console.log("ti", targetedItem);
  }, [targetedItem]);

  const favHanlder = async (id: any) => {
    if (context.user) {
      const response = await favaddFn({
        email: context.user.data.email,
        product,
      });
      console.log(product);
      toast.success(response.message);

      queryClient.refetchQueries();
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <FaHeart
        size={20}
        key={product.sku}
        onClick={() => favHanlder(product._id)}
        fill={targetedItem?.isFavourite ? "red" : "gray"}
      />
    </>
  );
};

export default Heart;
