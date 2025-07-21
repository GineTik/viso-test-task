import { z } from "zod";

export const addRecipeSchema = z.object({
  title: z.string().min(1),
  ingredients: z.string().min(1),
  instructions: z.string().min(1),
  details: z.string().min(1),
});

export const updateRecipeSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});
