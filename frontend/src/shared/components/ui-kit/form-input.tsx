import { Input, InputProps } from "./input";
import { FormField, FormItem, FormMessage } from "./form";
import { Label } from "@radix-ui/react-label";
import { Control, FieldValues, Path } from "react-hook-form";

type FormInputProps<T extends FieldValues> = InputProps & {
  label: string;
  control: Control<T>;
  name: Path<T>;
};

export function FormInput<T extends FieldValues>({
  label,
  control,
  name,
  ...props
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Label className="text-sm font-medium">{label}</Label>
          <Input {...props} {...field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
