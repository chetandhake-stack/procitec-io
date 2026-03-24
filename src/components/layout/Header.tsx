"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground shadow-soft">
              P
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-text-primary">{siteConfig.name}</p>
              <p className="hidden text-xs text-text-secondary sm:block">
                Industrial Applications Platform
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-text-primary",
                  pathname === item.href ? "text-text-primary" : "text-text-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={siteConfig.primaryCta.href} size="md">
              {siteConfig.primaryCta.label}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium text-text-primary transition-colors hover:bg-muted-surface md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border bg-background md:hidden">
          <Container className="space-y-2 py-4">
            <nav className="grid gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-muted-surface",
                    pathname === item.href
                      ? "bg-muted-surface text-text-primary"
                      : "text-text-secondary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              href={siteConfig.primaryCta.href}
              size="lg"
              className="w-full"
            >
              {siteConfig.primaryCta.label}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
