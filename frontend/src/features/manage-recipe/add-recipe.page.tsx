"use client";

import { Container } from "@/shared/components/container";
import { AddRecipeForm } from "./ui/add-recipe-form";

export default function AddRecipePage() {
  return (
    <Container className="mt-10 space-y-4">
      <h1 className="text-xl font-bold">Manage Recipe</h1>
      <p className="text-sm text-gray-500">
        Add a new recipe to your collection.
        <b>You can use markdown format!</b>
      </p>
      <AddRecipeForm />
    </Container>
  );
}
