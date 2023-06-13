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
  transastions: {
    type: [transactionSchema],
    required: false,
  },
  account: {
    balence: { type: Number, required: false, default: 0 },
    spent: { type: Number, required: false, default: 0 },
    gained: { type: Number, required: false, default: 0 },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
