"use client";

import { cn } from "@/shared/lib/utils";
import Link from "next/link";

type NavLinkProps = React.ComponentProps<typeof Link> & {
  active?: boolean;
};

export function NavLink({ children, href, active, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground text-sm font-medium transition-colors hover:text-primary px-2 py-2 rounded-md",
        active && "text-primary"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
