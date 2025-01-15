import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "@/models/UserModel";
import { connectDB } from "@/helper/connecrDb";

export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { email, password } = await request.json();

    const user = await Users.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "No User Found" }, { status: 501 });
    }
    const isMatched = bcrypt.compareSync(password, user.password);
    if (!isMatched) {
      return NextResponse.json({ message: "Wrong password" }, { status: 502 });
    } else {
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
        },
        process.env.JWT_KEY as string,
        { expiresIn: "1h" }
      );

      const response = NextResponse.json(
        { message: "Login Successful" },
        { status: 200 }
      );
      response.cookies.set("userauthtoken", token, {
        httpOnly: true,
        maxAge: 60 * 60,
      });
      return response;
    }
  } catch (error) {
    console.log("error at login api", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
