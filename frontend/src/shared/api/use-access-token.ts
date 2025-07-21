"use client";

import { create } from "zustand";
import { CONFIG } from "@/shared/constants/config.constants";
import Cookies from "js-cookie";

export const useAccessToken = create<{
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
}>((set) => ({
  accessToken: Cookies.get(CONFIG.ACCESS_COOKIE_KEY || "") || null,
  login: (accessToken: string) => {
    Cookies.set(CONFIG.ACCESS_COOKIE_KEY || "", accessToken);
    set({ accessToken });
  },
  logout: () => {
    Cookies.remove(CONFIG.ACCESS_COOKIE_KEY || "");
    set({ accessToken: null });
  },
}));
