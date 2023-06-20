 
import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise; 
export const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  expenses: { type: String, required: false, default: "nai" },
  title: { type: String, required: false , default: "pore dibo" },
  type: { type: String, required: true },
  user: {type: String, required: true} ,
  time: {type: Number, required: true}
});

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;
