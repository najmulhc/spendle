import connectToMongoDB from "@/lib/dbconnect";
import Transaction from "@/models/transactionModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  if (mongoose.connection.readyState === 0) {
    await connectToMongoDB();
  }
  const transaction = await Transaction.find({});
  return NextResponse.json({
    lenden: transaction[0],
  });
};

const POST = async (req: NextRequest) => {
  if (mongoose.connection.readyState === 0) {
    await connectToMongoDB();
  }
  const res = await req.json();
  const newTransaction = new Transaction(res);
  const result = await newTransaction.save();
  return NextResponse.json({ body: result });
};

export { GET, POST };
