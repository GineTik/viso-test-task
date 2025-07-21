import { secureQueryClient } from "@/shared/api/instances";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRateRecipe = () => {
  const queryClient = useQueryClient();

  return secureQueryClient.useMutation("post", "/recipes/{id}/rate", {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get", "recipes/{id}"],
      });
      toast.success("Recipe rated successfully");
    },
    onError: () => {
      toast.error("Failed to rate recipe");
    },
  });
};
