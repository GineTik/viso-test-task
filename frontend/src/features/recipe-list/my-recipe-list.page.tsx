"use client";

import { Container } from "@/shared/components/container";
import { RecipeList } from "./ui/recipe-list";
import { useSession } from "@/shared/api/use-session";
import { ROUTES } from "@/shared/constants/routes.constants";
import { Button } from "@/shared/components/ui-kit/button";
import Link from "next/link";

export default function MyRecipeListPage() {
  const { payload } = useSession();

  return (
    <Container className="py-8 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Recipes</h1>
        <Button asChild>
          <Link href={ROUTES.ADD_RECIPE}>Add Recipe</Link>
        </Button>
      </div>
      <RecipeList userId={payload?.userId} />
    </Container>
  );
}
