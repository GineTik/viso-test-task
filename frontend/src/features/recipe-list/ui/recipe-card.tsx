"use client";

import { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/constants/routes.constants";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export type RecipeCardProps = {
  recipe: ApiSchemas["GetRecipeDto"];
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={ROUTES.RECIPE_INFO(recipe.id)}
      className="flex items-center justify-between gap-2 border-border border-1 p-2 rounded-md w-full cursor-pointer hover:bg-muted transition-colors"
    >
      <div>
        <h2 className="text-xl font-bold">{recipe.name}</h2>
        <p className="text-sm text-muted-foreground truncate">
          {recipe.description}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {recipe.rating || "No rating"}
        </span>
        <ArrowRightIcon className="w-4 h-4 mx-2" />
      </div>
    </Link>
  );
}
