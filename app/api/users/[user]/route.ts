import connectToMongoDB from "@/lib/dbconnect";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  await connectToMongoDB();
  const username = request.url.slice(request.url.lastIndexOf("/") + 1);
  const seletctedUser = await User.find({ username }); 
  if (seletctedUser[0]) {
    return NextResponse.json({
      status: "success",
      user: seletctedUser[0],
    });
  } else {
    return NextResponse.json({
      status: "failed",
      message: `The user ${username} does not exists!`,
    });
  }
};
