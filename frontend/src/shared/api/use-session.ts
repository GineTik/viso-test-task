import { useAccessToken } from "./use-access-token";
import { jwtDecode } from "jwt-decode";

type SessionPayload = {
  userId: string;
};

export function useSession() {
  const { accessToken, login, logout } = useAccessToken();

  return {
    payload: accessToken ? jwtDecode<SessionPayload>(accessToken) : null,
    isAuthenticated: !!accessToken,
    login,
    logout,
  };
}
