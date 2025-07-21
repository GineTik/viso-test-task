"use client";

import { Skeleton } from "@/shared/components/ui-kit/skeleton";
import { useRecipes } from "../hooks/use-recipes";
import { RecipeCard } from "./recipe-card";
import { Input } from "@/shared/components/ui-kit/input";
import { useState } from "react";

type RecipeListProps = {
  userId?: string;
};

export function RecipeList({ userId }: RecipeListProps) {
  const [search, setSearch] = useState("");
  const recipes = useRecipes({ userId, search });

  return (
    <div className="space-y-2 w-full">
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {recipes.isLoading &&
        Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-20 w-full" />
        ))}

      {recipes?.data?.data?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
