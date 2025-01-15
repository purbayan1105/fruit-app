import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

type ProductPageProps = {
  params: { id: string };
};

const page = async ({ params }: ProductPageProps) => {
  const { id } = params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/seedproductapi/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.error(`Error fetching product, status: ${response.status}`);
      return notFound();
    }

    const product = await response.json();

    if (!product) {
      return notFound();
    }

    return (
      <div className="flex justify-center items-center">
        <div className="product-page">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={400}
            loading="lazy"
          />
          <h1 className="text-center font-semibold text-2xl">
            {product.title}
          </h1>

          <p className="text-center text-xl">${product.price}</p>
          <AddToCart product={product} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound(); // Return not found if any error occurs
  }
};

export default page;
