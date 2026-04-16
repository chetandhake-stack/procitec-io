import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import type { IbmPageContent } from "@/lib/content/products/ibm";

type IbmHeroProps = {
  content: IbmPageContent["hero"];
};

function SignalBars({
  label,
  value,
  note,
}: IbmPageContent["hero"]["dashboardSignals"][number]) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-text-primary">{label}</p>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Signal
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${value}%` }}
          aria-hidden="true"
        />
      </div>
      <p className="text-sm leading-6 text-text-secondary">{note}</p>
    </div>
  );
}

export default function IbmHero({ content }: IbmHeroProps) {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-16 lg:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-center">
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

          <div className="grid gap-4 md:grid-cols-3">
            {content.highlights.map((item) => (
              <Card
                key={item.title}
                className="h-full bg-background transition-colors duration-200 hover:border-primary/25"
              >
                <div className="space-y-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MaterialSymbol name={item.icon} />
                  </span>
                  <h2 className="text-lg font-semibold text-text-primary">{item.title}</h2>
                  <p className="text-sm leading-6 text-text-secondary">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="border-primary/10 bg-background p-0">
          <div className="border-b border-border px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {content.dashboardTitle}
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-text-primary">
              User-facing value that grows as installed data becomes more structured.
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {content.dashboardDescription}
            </p>
          </div>

          <div className="space-y-6 px-6 py-6">
            <svg
              viewBox="0 0 320 160"
              className="h-auto w-full rounded-lg border border-border bg-surface p-4"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ibm-trend" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#8b3dff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8b3dff" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <line x1="28" y1="132" x2="292" y2="132" stroke="#cbd5e1" strokeWidth="1.5" />
              <line x1="28" y1="28" x2="28" y2="132" stroke="#cbd5e1" strokeWidth="1.5" />
              <path
                d="M28 110 C70 102, 90 92, 128 80 S196 58, 228 52 S272 40, 292 32"
                fill="none"
                stroke="url(#ibm-trend)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="128" cy="80" r="7" fill="#8b3dff" />
              <circle cx="228" cy="52" r="7" fill="#8b3dff" />
              <circle cx="292" cy="32" r="7" fill="#8b3dff" />
              <text x="34" y="26" fill="#475569" fontSize="12">
                Scattered
              </text>
              <text x="222" y="26" fill="#0f172a" fontSize="12" fontWeight="600">
                Structured
              </text>
              <text x="36" y="148" fill="#475569" fontSize="12">
                Installed-base maturity
              </text>
            </svg>

            <div className="space-y-5">
              {content.dashboardSignals.map((signal) => (
                <SignalBars
                  key={signal.label}
                  label={signal.label}
                  value={signal.value}
                  note={signal.note}
                />
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
