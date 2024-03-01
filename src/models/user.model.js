import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    tenant_name: {
      type: String,
      required: true,
    },
    room_no: {
      type: String,
      required: true,
    },
    mobile_number: {
      type: String,
      required: true,
    },
    aadhaar: {
      type: String,
      required: true,
    },
    joined_date: {
      type: String,
      required: true,
    },
    tenant_status: {
      type: String,
      required: true,
    },
    security_deposit_amount: {
      type: String,
      required: true,
    },
    security_deposit_status: {
      type: String,
      required: true,
    },
    rent_amount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
