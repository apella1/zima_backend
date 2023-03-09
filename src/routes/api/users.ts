import express, { Response, Request } from "express";
import { User } from "../../models/user.model.js";
import validateSignupInput from "../../validation/signup.js";

const router = express.Router();

router.post("/signup", (req: Request, res: Response) => {
  const { errors, isValid } = validateSignupInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        email2: req.body.email2,
        password: req.body.password,
        password2: req.body.password2,
      });
    }
  });
});
