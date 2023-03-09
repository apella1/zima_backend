import validator from "validator";
import isEmpty from "./isEempty.js";

export default function validateSignupInput(input) {
  let errors = {};
  input.username = isEmpty(input.username) ? "" : input.username;
  input.email = isEmpty(input.email) ? "" : input.email;
  input.email2 = isEmpty(input.email2) ? "" : input.email2;
  input.password = isEmpty(input.password) ? "" : input.password;
  input.password2 = isEmpty(input.password2) ? "" : input.password2;

  if (validator.isLength(input.username, { min: 3, max: 15 })) {
    errors.username = "Username must be between 3 and 15 characters";
  }
  if (validator.isEmpty(input.email)) {
    errors.email = "Email is required";
  }
  if (!validator.isEmail(input.email)) {
    errors.email = "Invald email";
  }
  if (validator.isEmpty(input.email2)) {
    errors.email2 = "Confirm email is required";
  }
  if (!validator.equals(input.email, input.email2)) {
    errors.email = "Email fields must match";
  }
  if (!validator.isLength(input.password, { min: 6, max: 30 })) {
    errors.password = "Password must be in the range of 6 and 30 characters";
  }
  if (!validator.equals(input.password, input.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
