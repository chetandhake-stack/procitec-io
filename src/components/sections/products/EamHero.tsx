import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamHeroProps = {
  content: EamPageContent["hero"];
};

export default function EamHero({ content }: EamHeroProps) {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-center">
        <div className="space-y-7">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-primary/15 bg-background px-3 py-1 text-sm font-semibold uppercase tracking-widest text-primary shadow-soft">
              {content.eyebrow}
            </span>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              {content.headline}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={content.primaryCta.href} size="lg" className="w-full sm:w-auto">
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
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              {content.tertiaryCta.label}
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {content.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-md border border-border bg-background px-4 py-4 shadow-soft"
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
        </div>

        <Card className="border-primary/10 bg-background p-0">
          <div className="border-b border-border px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {content.previewTitle}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-text-primary">
              Structured workflows that feel easier to evaluate quickly.
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {content.previewDescription}
            </p>
          </div>
          <div className="space-y-0">
            {content.previewItems.map((item, index) => (
              <div
                key={item.title}
                className={[
                  "px-6 py-5",
                  index !== content.previewItems.length - 1 ? "border-b border-border" : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-3">
                  {item.icon ? (
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={item.icon} />
                    </span>
                  ) : null}
                  <p className="pt-1 text-base font-semibold text-text-primary">
                    {item.title}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
