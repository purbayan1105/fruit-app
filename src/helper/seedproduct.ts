import { Products } from "@/models/ProductModels";
import { connectDB } from "./connecrDb";

const seedProducts = async () => {
  await connectDB();

  const initialProducts = [
    {
      title: "Apple",
      price: 300,
      imageUrl:
        "https://res.cloudinary.com/doe3ftnti/image/upload/v1736227219/image-removebg-preview_93_ucuqet.png",
    },
    {
      title: "Strawberry",
      price: 500,
      imageUrl:
        "https://res.cloudinary.com/doe3ftnti/image/upload/v1736227273/image-removebg-preview_94_fpodhj.png",
    },
    {
      title: "Orange",
      price: 200,
      imageUrl:
        "https://res.cloudinary.com/doe3ftnti/image/upload/v1736227220/image-removebg-preview_95_ope4ve.png",
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
