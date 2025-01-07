import mongoose from "mongoose";

const configDB = {
  isConnected: 0,
};

export async function connectDB() {
  if (configDB.isConnected) {
    console.log("Database already connected");
    return;
  } else {
    try {
      const { connection } = await mongoose.connect(
        process.env.MONGODB_URL as string,
        { dbName: "fruit_database_mongo" }
      );
      configDB.isConnected = connection.readyState;
      console.log("database connected");
    } catch (error) {
      console.log("error at database connection", error);
    }
  }
}
