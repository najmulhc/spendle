import bcrypt from "bcrypt";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import connectToMongoDB from "@/lib/dbconnect";

const POST = async (req: NextRequest) => {
  await connectToMongoDB();
  const { username, password } = await req.json();
  const foundUser = await User.find({
    username,
  });
  console.log(username);
  if (foundUser[0]) {
    const correctPassword = await bcrypt.compare(
      password,
      foundUser[0].hashedPassword
    );
    if (correctPassword) {
      return NextResponse.json({
        data: {
          user: foundUser[0],
        },
      });
    } else {
      return NextResponse.json({
        status: "failed",
        message: "Incorrect Password",
      });
    }
  }
  return NextResponse.json({
    status: "failed",
    message: "user not found",
  });
};

export { POST };
