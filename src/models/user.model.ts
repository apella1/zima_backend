import { Schema, model, connect } from "mongoose";

// interface representing a document in the mongodb database

interface UserInterface {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// user schema corresponding with the interface

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
});

export const User = model<UserInterface>("User", userSchema);
