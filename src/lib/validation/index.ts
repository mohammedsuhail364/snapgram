import { z } from "zod";

export const signUpValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2,{message:'Too short'}),
  email:z.string().email(),
  password:z.string().max(8,{message:"Password contains less than 8 characters"})
});
