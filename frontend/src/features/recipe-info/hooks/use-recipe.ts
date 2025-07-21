import { publicQueryClient } from "@/shared/api/instances";

export const useRecipe = (recipeId: string | undefined) => {
  return publicQueryClient.useQuery("get", "/recipes/{id}", {
    params: {
      path: {
        id: recipeId ?? "",
      },
    },
    enabled: !!recipeId,
  });
};
