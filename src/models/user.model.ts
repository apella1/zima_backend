import { error } from "console";
import { Schema, model, connect } from "mongoose";

type Email = {
  type: String;
  trim: boolean;
  unique: boolean | string;
  required: boolean | string;
};

// interface representing a document in the mongodb database

interface UserInterface {
  name: string;
  email: Email;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  hashed_password: string;
  salt: string;
}

// user schema corresponding with the interface

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: "A user already exists for the provided email",
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String,
});

const User = model<UserInterface>("User", userSchema);

// handling the password string as a virtual field

userSchema
  .virtual("password")
  .set((password) => {
    this._password = password;
    this.salt = this.makeSalt(password);
    this.hashed_password = this.encryptPassword(password);
  })
  .get(() => {
    return this.password;
  });
