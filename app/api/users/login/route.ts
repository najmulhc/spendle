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
        status: "success",
        user: foundUser[0],
      });
    } else {
      return NextResponse.json({
        status: "failed",
        message: "The password entered is not correct!",
      });
    }
  }
  return NextResponse.json({
    status: "failed",
    message: `The user ${username} does not exists!`,
  });
};

export { POST };
