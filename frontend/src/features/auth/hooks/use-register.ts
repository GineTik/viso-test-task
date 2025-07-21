"use client";

import { publicQueryClient } from "@/shared/api/instances";

export function useRegister() {
  return publicQueryClient.useMutation("post", "/auth/register");
}
