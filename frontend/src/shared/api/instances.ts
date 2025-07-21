import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./generated";
import { CONFIG } from "@/shared/constants/config.constants";
import { useAccessToken } from "./use-access-token";

export const publicFetchClient = createFetchClient<paths>({
  baseUrl: CONFIG.API_BASE_URL,
});

export const publicQueryClient = createClient(publicFetchClient);

export const secureFetchClient = createFetchClient<paths>({
  baseUrl: CONFIG.API_BASE_URL,
});

export const secureQueryClient = createClient(secureFetchClient);

secureFetchClient.use({
  onRequest: async ({ request }) => {
    const accessToken = useAccessToken.getState().accessToken;
    if (accessToken) {
      request.headers.set("Authorization", `Bearer ${accessToken}`);
    }
  },
});
