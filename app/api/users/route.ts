import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/UserModel";
import connectToMongoDB from "@/lib/dbconnect";

const GET = async () => {};
const POST = async (req: NextRequest) => {
  connectToMongoDB();
  const { name, username, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    username,
    hashedPassword,
  });

  const result = newUser.save();

  return NextResponse.json({
    data: {
      result,
    },
  });
};

export { GET, POST };
