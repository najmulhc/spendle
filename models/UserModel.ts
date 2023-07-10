import mongoose, { Schema } from "mongoose";
import { transactionSchema } from "./transactionModel";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-z0-9-.]{5,10}$/,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  transactions: {
    type: [transactionSchema],
    required: false,
    default: [],
  },
  account: {
    balence: { type: Number, required: false, default: 0 },
    spent: { type: Number, required: false, default: 0 },
    gained: { type: Number, required: false, default: 0 },
  },
  spendingSources :{
    type: [String], required: false, default: []
  },
  gainingSources :{
    type: [String], required: false, default: []
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
