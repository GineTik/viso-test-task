"use client";

import { publicFetchClient } from "@/shared/api/instances";
import { useQuery } from "@tanstack/react-query";

type UseRecipesProps = {
  userId?: string;
  search?: string;
};

export function useRecipes({ userId, search }: UseRecipesProps) {
  return useQuery({
    queryKey: ["get", "/recipes", userId, search],
    queryFn: () =>
      publicFetchClient.GET("/recipes", {
        params: {
          query: {
            userId,
            search,
          },
        },
      }),
  });
}
