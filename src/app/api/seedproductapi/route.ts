import { connectDB } from "@/helper/connecrDb";
import seedProducts from "@/helper/seedproduct";
import { Products } from "@/models/ProductModels";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  await connectDB();
  try {
    await seedProducts();
    console.log();
    return NextResponse.json(
      { message: "Products added to the database" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("error at sending product", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    const products = await Products.find();
    return NextResponse.json({ data: products }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 200 });
  }
}
