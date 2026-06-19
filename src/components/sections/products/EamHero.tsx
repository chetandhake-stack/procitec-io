import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamHeroProps = {
  content: EamPageContent["hero"];
};

export default function EamHero({ content }: EamHeroProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface pb-14 pt-6 sm:pb-16 lg:pb-20">
        <Image
          src="/images/EAM Images/shopfloow raw img.png"
          alt=""
          width={1536}
          height={1024}
          priority
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/25" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-background/0"
          aria-hidden="true"
        />

        <Container className="relative">
          <div className="max-w-4xl space-y-7">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-primary/15 bg-background px-3 py-1 text-sm font-semibold uppercase tracking-widest text-primary shadow-soft">
                {content.eyebrow}
              </span>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl xl:text-6xl">
                {content.headline}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={content.primaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {content.primaryCta.label}
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {content.secondaryCta.label}
              </Button>
              <Button
                href={content.tertiaryCta.href}
                size="lg"
                className="w-full sm:w-auto"
              >
                {content.tertiaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-8 sm:py-10">
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            {content.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-md border border-border bg-surface px-4 py-4 shadow-soft"
              >
                <div className="flex items-start gap-3">
                  {highlight.icon ? (
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={highlight.icon} />
                    </span>
                  ) : null}
                  <p className="pt-1 text-sm font-semibold text-text-primary">
                    {highlight.title}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
