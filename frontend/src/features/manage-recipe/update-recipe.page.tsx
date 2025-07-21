"use client";

import { Container } from "@/shared/components/container";
import { UpdateRecipeForm } from "./ui/update-recipe-form";
import { useRecipe } from "@/features/recipe-info";
import { useParams } from "next/navigation";

export default function UpdateRecipePage() {
  const { id } = useParams<{ id: string }>();
  const recipe = useRecipe(id);

  return (
    <Container className="mt-10 space-y-4">
      <h1 className="text-2xl font-bold">Update Recipe</h1>
      {recipe.data && <UpdateRecipeForm recipe={recipe.data} />}
    </Container>
  );
}
