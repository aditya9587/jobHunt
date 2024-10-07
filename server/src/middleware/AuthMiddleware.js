import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const authmiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: "User is not logged" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.key;

    next();
  } catch (error) {
    res.status(401).json({ message: "User is not logged in" });
  }
};
