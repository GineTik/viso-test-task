import { useForm } from "react-hook-form";
import { useAddRecipe } from "./use-add-recipe";
import { useUpdateRecipe } from "./use-update-recipe";
import { zodResolver } from "@hookform/resolvers/zod";
import { addRecipeSchema } from "../validation.schema";

export const useManageRecipeForm = () => {
  const form = useForm({
    resolver: zodResolver(addRecipeSchema),
  });

  const addRecipe = useAddRecipe();
  const updateRecipe = useUpdateRecipe();

  const submit = form.handleSubmit((data) => {
    addRecipe.mutate({
      body: {
        name: data.title,
        description: ` 
## Ingredients
${data.ingredients}

## Instructions
${data.instructions}

## Details
${data.details}
        `,
      },
    });
  });

  return {
    form,
    submit,
    isLoading: addRecipe.isPending || updateRecipe.isPending,
  };
};
