import connectToMongoDB from "@/lib/dbconnect";
import User from "@/models/UserModel";
import Transaction from "@/models/transactionModel";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  await connectToMongoDB();

  const transaction = await Transaction.find({});
  return NextResponse.json({
    lenden: transaction[0],
  });
};

const POST = async (req: NextRequest) => {
  await connectToMongoDB();
  const res = await req.json();
  const { user } = res;
  const time = new Date();
  const currentTime = time.getTime();
  const newTransaction = new Transaction({ ...res, time: currentTime });
  await newTransaction.save();
  const existingUser = await User.findOne({
    username: user,
  });

  existingUser.transactions.push(newTransaction);
  const updatedUser = await  existingUser.save()
  
  return NextResponse.json({ user: updatedUser });
};

export { GET, POST };
