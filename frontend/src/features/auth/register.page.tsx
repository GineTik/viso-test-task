"use client";

import { Container } from "@/shared/components/container";
import { Form } from "@/shared/components/ui-kit/form";
import { FormInput } from "@/shared/components/ui-kit/form-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./validation.schema";
import { LoadingButton } from "@/shared/components/ui-kit/loading-button";
import { Button } from "@/shared/components/ui-kit/button";
import Link from "next/link";
import { useRegister } from "./hooks/use-register";
import { ROUTES } from "@/shared/constants/routes.constants";

export default function RegisterPage() {
  const register = useRegister();
  const form = useForm({
    resolver: zodResolver(registerSchema),
  });

  const submit = form.handleSubmit((data) => {
    register.mutate({
      body: {
        email: data.email,
        password: data.password,
      },
    });
  });

  return (
    <Container className="max-w-[300px] mt-10 space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-bold">Register your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to register your account
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={submit} className="space-y-2">
          <FormInput
            label="Email"
            control={form.control}
            name="email"
            placeholder="Email"
            type="email"
          />
          <FormInput
            label="Password"
            control={form.control}
            name="password"
            placeholder="Password"
            type="password"
          />
          <FormInput
            label="Confirm Password"
            control={form.control}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
          <LoadingButton
            type="submit"
            isLoading={register.isPending}
            className="w-full"
          >
            Register
          </LoadingButton>
          <Button variant="link" className="w-full" asChild>
            <Link href={ROUTES.LOGIN}>Already have an account? Login</Link>
          </Button>
        </form>
      </Form>
    </Container>
  );
}
