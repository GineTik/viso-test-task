"use client";

import { Button } from "@/shared/components/ui-kit/button";
import { NavLink } from "./nav-link";
import { ROUTES } from "@/shared/constants/routes.constants";
import Link from "next/link";
import { Container } from "@/shared/components/container";
import { useSession } from "@/shared/api/use-session";

export function Header() {
  const { isAuthenticated, logout } = useSession();

  return (
    <Container>
      <header className="flex items-center justify-between pt-4">
        <Link href={ROUTES.HOME}>
          <h1 className="text-2xl font-bold">FlavorAI</h1>
        </Link>
        <div className="flex items-center justify-center flex-1">
          <NavLink href={ROUTES.ALL_RECIPES}>All Recipes</NavLink>
          {isAuthenticated && (
            <NavLink href={ROUTES.MY_RECIPES}>My Recipes</NavLink>
          )}
        </div>
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => logout()}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href={ROUTES.LOGIN}>Login</Link>
            </Button>
            <Button asChild>
              <Link href={ROUTES.REGISTER}>Signup</Link>
            </Button>
          </div>
        )}
      </header>
    </Container>
  );
}
