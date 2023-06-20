import connectToMongoDB from "@/lib/dbconnect";
import User from "@/models/UserModel";
import Transaction from "@/models/transactionModel";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req:NextRequest ) => {
  await connectToMongoDB();
   
  return NextResponse.json({
    data:req,
  });
};

const POST = async (req: NextRequest) => {
  await connectToMongoDB();
  const res = await req.json();
  const { user, type, amount } = res;
  const time = new Date();
  const currentTime = time.getTime();
  const newTransaction = new Transaction({ ...res, time: currentTime });
  await newTransaction.save();
  const existingUser = await User.findOne({
    username: user,
  });

  existingUser.transactions.push(newTransaction);
  if (type === "gaining") {
    existingUser.account.balence += amount;
    existingUser.account.gained += amount;
  } else {
    existingUser.account.balence -= amount;
    existingUser.account.spent += amount;
  }

  const updatedUser = await existingUser.save();

  return NextResponse.json({ user: updatedUser });
};

export { GET, POST };
