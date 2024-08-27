import { z } from "zod";

export const SignupSchema = z.object({
  name: z
    .string()
    .min(3, "Name is required")
    .max(50, "Name is too long")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .trim(),
  password: z
    .string()
    .min(6, { message: "Be at least 6 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
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
