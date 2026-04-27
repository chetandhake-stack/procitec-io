import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { DashFlowPageContent } from "@/lib/content/products/dashflow";

type DashFlowHeroProps = {
  content: DashFlowPageContent["hero"];
};

export default function DashFlowHero({ content }: DashFlowHeroProps) {
  return (
    <section className="border-b border-border bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_60%)] pb-14 sm:pb-16 lg:pb-20">
      <div className="relative overflow-hidden border-b border-border bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={content.imageSrc}
          alt={content.imageAlt}
          className="block h-auto w-full object-contain"
          loading="eager"
        />
      </div>

      <Container className="space-y-8 pt-8 sm:pt-10 lg:pt-12">
        <div className="relative z-10 rounded-[24px] border border-border bg-background/95 px-6 py-6 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-primary/15 bg-background px-3 py-1 text-sm font-semibold uppercase tracking-widest text-primary shadow-soft">
              {content.eyebrow}
            </span>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              {content.headline}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
              {content.description}
            </p>

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
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {content.signals.map((signal) => (
            <Card
              key={signal.label}
              className="bg-background/95 transition-colors duration-200 hover:border-primary/25"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {signal.label}
              </p>
              <p className="mt-3 text-2xl font-semibold leading-tight text-text-primary">
                {signal.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{signal.note}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
