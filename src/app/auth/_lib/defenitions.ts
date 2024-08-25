import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(3, "Name is required").max(50, "Name is too long"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 character long")
    .max(32, "Password is too long"),
});
export type SignupFormData = z.infer<typeof SignupSchema>;

export const LoginSchema = z.object({
  email: z.string().email("Email is incorrect"),
  password: z
    .string()
    .min(6, "Password is incorrect")
    .max(32, "Password is incorrect"),
});
export type LoginFormData = z.infer<typeof LoginSchema>;
