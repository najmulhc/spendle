import connectToMongoDB from "@/lib/dbconnect";
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
  const newTransaction = new Transaction({ ...res });
  await newTransaction.save();
  return NextResponse.json({ done: true });
};

export { GET, POST };
