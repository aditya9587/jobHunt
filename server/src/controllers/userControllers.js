import { userdata } from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationSchema,validateLogin } from "../validators/zodValidate.js";
import { z } from "zod";

export const signupUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = validationSchema.parse(req.body);
    const userExist = await userdata.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "user already exist" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = new userdata({
      name,
      email,
      mobile,
      password: hashedPassword,
    });
    await data.save();
    console.log(data);
    return res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const validationerror = error.errors.map((err)=>({
        message:err.message
      }))
      return res.status(400).json({
        message: "Validation failed",
        error: validationerror,
      });
    }
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = validateLogin.parse(req.body);
    const userValid = await userdata.findOne({ email });
    if (!userValid) {
      return res.status(400).json({ message: "No user Exist" });
    }
    const passwordCompare = bcrypt.compareSync(password, userValid.password);
    if (!passwordCompare) {
      return res
        .status(400)
        .json({ message: " userId or Password is incorrect" });
    }
    const payload = { key: userValid._id };
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return res.status(200).json(token);
  } catch (error) {
    if(error instanceof z.ZodError){
      const validationerror = error.errors.map((err)=>({
        message:err.message
      }))
      return res.status(400).json({
        message: "Validation failed",
        errors: validationerror,
      });
    }
    return res.status(400).json({ message:"eror happens" });
  }
};

export const userbyid = async (req, res) => {
  const { _id } = req.params;
  const oneUser = await userdata
    .findById({ _id })
    .select("-password -mobile -_id");
  if (!oneUser) {
    return res.status(200).json({ message: "No user Found" });
  }
  return res.status(200).json(oneUser);
};

export const getallUser = async (req, res) => {
  const userfound = await userdata.find().select("-password -_id");
  if (!userfound) {
    return res.status(400).json({ message: "No user Found" });
  }
  return res.status(200).json({ userfound });
};
