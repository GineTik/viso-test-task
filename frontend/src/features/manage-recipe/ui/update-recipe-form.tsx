import { Form } from "@/shared/components/ui-kit/form";
import { FormInput } from "@/shared/components/ui-kit/form-input";
import { FormTextarea } from "@/shared/components/ui-kit/form-textarea";
import { LoadingButton } from "@/shared/components/ui-kit/loading-button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateRecipeSchema } from "../validation.schema";
import { useUpdateRecipe } from "../hooks/use-update-recipe";
import { ApiSchemas } from "@/shared/api/schema";

type UpdateRecipeFormProps = {
  recipe: ApiSchemas["GetRecipeDto"];
};

export function UpdateRecipeForm({ recipe }: UpdateRecipeFormProps) {
  const updateRecipe = useUpdateRecipe();
  const form = useForm({
    defaultValues: {
      title: recipe.name,
      description: recipe.description,
    },
    resolver: zodResolver(updateRecipeSchema),
  });

  const submit = form.handleSubmit((data) => {
    updateRecipe.mutate({
      params: {
        path: {
          id: recipe.id,
        },
      },
      body: {
        name: data.title ?? "",
        description: data.description ?? "",
      },
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={submit} className="space-y-4">
        <FormInput
          label="Title"
          control={form.control}
          name="title"
          placeholder="Title"
        />
        <FormTextarea
          label="Description"
          control={form.control}
          name="description"
          placeholder="Description"
          rows={20}
        />
        <LoadingButton
          type="submit"
          className="ml-auto w-full"
          isLoading={updateRecipe.isPending}
        >
          Update Recipe
        </LoadingButton>
      </form>
    </Form>
  );
}
