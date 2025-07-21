"use client";

import { publicQueryClient } from "@/shared/api/instances";
import { useAccessToken } from "@/shared/api/use-access-token";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes.constants";

export function useLogin() {
  const router = useRouter();
  const { login: setAccessToken } = useAccessToken();

  return publicQueryClient.useMutation("post", "/auth/login", {
    onSuccess: (data) => {
      setAccessToken(data?.accessToken);
      toast.success("Login successful");
      router.push(ROUTES.ALL_RECIPES);
    },
    onError: () => {
      toast.error("Login failed");
    },
  });
}
