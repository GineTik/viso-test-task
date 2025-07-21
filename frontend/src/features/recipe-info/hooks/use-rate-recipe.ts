import { secureQueryClient } from "@/shared/api/instances";
import { useQueryClient } from "@tanstack/react-query";

export const useRateRecipe = () => {
  const queryClient = useQueryClient();

  return secureQueryClient.useMutation("post", "/recipes/{id}/rate", {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["recipes/{id}"],
      });
    },
  });
};
