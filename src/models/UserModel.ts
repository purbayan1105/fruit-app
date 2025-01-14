import mongoose, { Schema } from "mongoose";

const FavouriteItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true, ref: "products" },
  title: String,
  description: String,
  price: String,
  sku: String,
  imageUrl: String,
  isFavourite: {
    type: Boolean,
    default: true,
  },
});

export const UserModel = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
  },
  favouriteItems: [FavouriteItemSchema],
});

export const Users =
  mongoose.models.users || mongoose.model("users", UserModel);
