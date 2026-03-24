import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { footerNavigation, productNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-border bg-background shadow-soft">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="text-sm font-semibold text-text-primary">{siteConfig.name}</p>
                <p className="text-xs text-text-secondary">
                  Product platform for Procitec applications
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary">
              Explore Procitec applications built for industrial visibility,
              reliability, and operational intelligence.
            </p>

            <p className="mt-4 text-sm text-text-secondary">
              Corporate website:{" "}
              <a
                href={siteConfig.corporateUrl}
                className="font-medium text-primary transition-colors hover:text-primary-hover"
                target="_blank"
                rel="noreferrer"
              >
                procitec.in
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Applications</h3>
            <ul className="mt-4 space-y-3">
              {productNavigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Platform</h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Procitec. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
