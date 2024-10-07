import { z } from 'zod'

export const validationSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobile: z
    .string()
    .length(10, { message: "Must be exactly 10 characters long" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export const validateLogin = z.object({
  email:z.string().email({message: "Invalid email address" }),
  password:z.string().min(8,{ message: "Must be 8 or more characters long" })
})