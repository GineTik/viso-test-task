"use client";
import { Button } from "@/shared/components/ui-kit/button";

import { Container } from "@/shared/components/container";
import { FormInput } from "@/shared/components/ui-kit/form-input";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@/shared/components/ui-kit/loading-button";
import { useLogin } from "./hooks/use-login";
import { Form } from "@/shared/components/ui-kit/form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./validation.schema";
import { ROUTES } from "@/shared/constants/routes.constants";

export default function LoginPage() {
  const login = useLogin();
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submit = form.handleSubmit((data) => {
    login.mutate({
      body: {
        email: data.email,
        password: data.password,
      },
    });
  });

  return (
    <Container className="max-w-[300px] mt-10 space-y-4">
      <div className="space-y-1">
        <h1 className="text-xl font-bold">Login to your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
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
          <LoadingButton
            type="submit"
            isLoading={login.isPending}
            className="w-full"
          >
            Login
          </LoadingButton>
          <Button variant="link" className="w-full" asChild>
            <Link href={ROUTES.REGISTER}>
              Don&apos;t have an account? Register
            </Link>
          </Button>
        </form>
      </Form>
    </Container>
  );
}
