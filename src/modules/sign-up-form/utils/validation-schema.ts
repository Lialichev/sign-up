import { z } from "zod";
import { passwordRules } from "../constants/validation-password-rules";

export const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().refine(
    (password) => passwordRules.every((rule) => rule.test(password)),
  ),
});

export type FormSchema = z.infer<typeof formSchema>;
