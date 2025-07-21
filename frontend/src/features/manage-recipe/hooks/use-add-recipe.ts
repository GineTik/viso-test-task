import { secureQueryClient } from "@/shared/api/instances";
import { ApiSchemas } from "@/shared/api/schema";
import { queryClient } from "@/shared/lib/query-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes.constants";

export const useAddRecipe = () => {
  const router = useRouter();

  return secureQueryClient.useMutation("post", "/recipes", {
    onSuccess: (data: ApiSchemas["GetRecipeDto"]) => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast.success("Recipe added successfully");
      router.push(ROUTES.RECIPE_INFO(data.id));
    },
    onError: () => {
      toast.error("Failed to add recipe");
    },
  });
};
