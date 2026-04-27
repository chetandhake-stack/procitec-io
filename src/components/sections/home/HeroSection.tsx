import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { heroHighlights } from "@/lib/content/home";
import { siteConfig } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="border-b border-border bg-background">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Procitec Applications
            </p>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                Industrial applications built for reliability, visibility, and scale.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
                Procitec.io is the product platform for industrial applications such
                as EAM, EMS, IBM, DashFlow, and future software products. It helps operational
                teams understand what matters quickly and move directly into the
                right product path.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {siteConfig.primaryCta.label}
              </Button>
              <Button
                href={siteConfig.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {siteConfig.secondaryCta.label}
              </Button>
            </div>
          </div>

          <Card className="bg-surface">
            <p className="text-sm font-semibold text-text-primary">Why this platform works</p>
            <ul className="mt-5 space-y-4">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm leading-6 text-text-secondary">{item}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
