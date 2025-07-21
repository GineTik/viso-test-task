import { secureQueryClient } from "@/shared/api/instances";
import { ROUTES } from "@/shared/constants/routes.constants";
import { queryClient } from "@/shared/lib/query-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ApiSchemas } from "@/shared/api/schema";

export const useUpdateRecipe = () => {
  const router = useRouter();

  return secureQueryClient.useMutation("put", "/recipes/{id}", {
    onSuccess: (data: ApiSchemas["GetRecipeDto"]) => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast.success("Recipe updated successfully");
      router.push(ROUTES.RECIPE_INFO(data.id));
    },
    onError: () => {
      toast.error("Failed to update recipe");
    },
  });
};
