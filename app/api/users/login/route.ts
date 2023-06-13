import bcrypt from "bcrypt";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();
  const foundUser = await User.find({
    username,
  });
  if (foundUser[0]) {
    const correctPassword = await bcrypt.compare(
      password,
      foundUser[0].hashedPassword
    );
    if (correctPassword) {
      return NextResponse.json({
        status: "Success",
        user: foundUser[0],
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
