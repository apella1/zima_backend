import isEmpty from "./isEempty.js";
import validator from "validator";

export default function validateLoginInput(input) {
  let errors = {};
  input.username = isEmpty(input.username) ? "" : input.username;
  input.password = isEmpty(input.password) ? "" : input.password;

  if (validator.isEmpty(input.username)) {
    errors.username = "Username is required!";
  }
  if (validator.isEmpty(input.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
