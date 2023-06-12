import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  expenses: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
