import  { Router } from "express";
import {
  signupUser,
  loginUser,
  userbyid,
  getallUser,
} from "../controllers/userControllers.js";

const router = Router();

//To  create a new user
router.post("/register", signupUser);

//to login user
router.post("/login", loginUser);

//To get a all user
router.get("/user", getallUser);

//to get particular user
router.get("/user/:_id", userbyid);


export { router };

// const loginValidate = z.object({
//   email: z.string().email({ message: "Invalid email address" }),
//   password: z.string().min(8, { message: "Must be 8 or more characters long" }),
// });