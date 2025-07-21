import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./button";

export type LoadingButtonProps = ButtonProps & {
  isLoading?: boolean;
};

export function LoadingButton({ isLoading, ...props }: LoadingButtonProps) {
  return (
    <Button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? <Loader2 className="size-4 animate-spin" /> : props.children}
    </Button>
  );
}
