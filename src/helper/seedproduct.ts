import { Products } from "@/models/ProductModels";
import { connectDB } from "./connecrDb";

const seedProducts = async () => {
  await connectDB();

  const initialProducts = [
    {
      title: "Apple",
      price: 300,
      imageUrl: "https://www.ampimex.in/wp-content/uploads/2021/02/apples-.jpg",
    },
    {
      title: "Banana",
      price: 100,
      imageUrl:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg",
    },
    {
      title: "Orange",
      price: 200,
      imageUrl: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
    },
  ];

  try {
    await Products.insertMany(initialProducts);
    console.log("Initial Products added to the database");
  } catch (error) {
    console.log("error at inserting Products to the database", error);
  }
};

export default seedProducts;
