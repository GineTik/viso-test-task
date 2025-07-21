import { z } from "zod";

const EMAIL_ERROR_MESSAGE = "Invalid email address";
const PASSWORD_ERROR_MESSAGE = "Password must be at least 8 characters long";
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_CONFIRMATION_ERROR_MESSAGE = "Passwords do not match";

export const loginSchema = z.object({
  email: z.email({ message: EMAIL_ERROR_MESSAGE }),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH, { message: PASSWORD_ERROR_MESSAGE }),
});

export const registerSchema = z
  .object({
    email: z.email({ message: EMAIL_ERROR_MESSAGE }),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, { message: PASSWORD_ERROR_MESSAGE }),
    confirmPassword: z
      .string()
      .min(PASSWORD_MIN_LENGTH, { message: PASSWORD_ERROR_MESSAGE }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: PASSWORD_CONFIRMATION_ERROR_MESSAGE,
  });
