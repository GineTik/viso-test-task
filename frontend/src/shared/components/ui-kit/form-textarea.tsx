import { FormField, FormItem, FormMessage } from "./form";
import { Label } from "@radix-ui/react-label";
import { Control, FieldValues, Path } from "react-hook-form";
import { Textarea, TextareaProps } from "./textarea";

type FormTextareaProps<T extends FieldValues> = TextareaProps & {
  label: string;
  control: Control<T>;
  name: Path<T>;
};

export function FormTextarea<T extends FieldValues>({
  label,
  control,
  name,
  ...props
}: FormTextareaProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Label className="text-sm font-medium">{label}</Label>
          <Textarea {...props} {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
