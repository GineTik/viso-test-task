"use client";

import { useParams } from "next/navigation";
import { useRecipe } from "./hooks/use-recipe";
import Markdown from "react-markdown";
import { Container } from "@/shared/components/container";
import styles from "./recipe-info.module.scss";
import { Button } from "@/shared/components/ui-kit/button";
import { useRateRecipe } from "./hooks/use-rate-recipe";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes.constants";
import { PencilIcon } from "lucide-react";

export default function RecipeInfoPage() {
  const { id } = useParams<{ id: string }>();
  const recipe = useRecipe(id);
  const rateRecipe = useRateRecipe();

  return (
    <Container className="mt-10 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{recipe.data?.name}</h1>
        <Button variant="link" asChild>
          <Link href={ROUTES.UPDATE_RECIPE(id)}>
            <PencilIcon className="w-4 h-4" />
            Update
          </Link>
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Rating: {recipe.data?.rating || "No rating"}
        </p>
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Button
              variant="outline"
              size="icon"
              key={index}
              onClick={() =>
                rateRecipe.mutate({
                  params: {
                    path: { id },
                  },
                  body: {
                    rating: index + 1,
                  },
                })
              }
              className={cn(
                "w-8 h-8",
                recipe.data?.myRating === index + 1 &&
                  "bg-primary text-primary-foreground"
              )}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>

      <div className={styles.markdown}>
        <Markdown>{recipe.data?.description}</Markdown>
      </div>
    </Container>
  );
}
