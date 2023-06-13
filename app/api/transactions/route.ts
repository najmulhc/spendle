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
  const { transastions } = await User.findOne({ username: user });

  const updatedUser = await User.findOneAndUpdate(
    { username: user },
    {
    transacitons:  true
    },
    { new: false }
  );

  return NextResponse.json({ user: updatedUser });
};

export { GET, POST };
