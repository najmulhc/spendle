import { NextRequest, NextResponse } from "next/server";
import connectToMongoDB from "@/lib/dbconnect";
import User from "@/models/UserModel";
import bcrypt from "bcrypt";

const GET = async () => {};
const POST = async (req: NextRequest) => {
  await connectToMongoDB();
  const body = await req.json();
  const { username, name, password } = body.user;

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    username,
    hashedPassword,
  });
  await newUser.save();
  return NextResponse.json({
    data: {
      user: newUser,
    },
  });
};

export { GET, POST };
