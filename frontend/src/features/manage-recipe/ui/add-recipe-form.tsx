"use client";

import { Form } from "@/shared/components/ui-kit/form";
import { FormTextarea } from "@/shared/components/ui-kit/form-textarea";
import { useManageRecipeForm } from "../hooks/use-manage-recipe-form";
import { FormInput } from "@/shared/components/ui-kit/form-input";
import { LoadingButton } from "@/shared/components/ui-kit/loading-button";

export function AddRecipeForm() {
  const { form, submit, isLoading } = useManageRecipeForm();

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
          label="Ingredients"
          control={form.control}
          name="ingredients"
          placeholder="Ingredients"
        />
        <FormTextarea
          label="Instructions"
          control={form.control}
          name="instructions"
          placeholder="Instructions"
        />
        <FormTextarea
          label="Details"
          control={form.control}
          name="details"
          placeholder="Details"
        />
        <LoadingButton
          type="submit"
          className="ml-auto w-full"
          isLoading={isLoading}
        >
          Add Recipe
        </LoadingButton>
      </form>
    </Form>
  );
}
