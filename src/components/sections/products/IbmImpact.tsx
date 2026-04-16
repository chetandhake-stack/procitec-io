import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { IbmPageContent } from "@/lib/content/products/ibm";

type IbmImpactProps = {
  content: IbmPageContent["impact"];
};

function RingGraphic({ value }: { value: number }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" aria-hidden="true">
      <circle cx="60" cy="60" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="12" />
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="#8b3dff"
        strokeWidth="12"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="#0f172a"
        fontSize="18"
        fontWeight="700"
      >
        {value}
      </text>
    </svg>
  );
}

export default function IbmImpact({ content }: IbmImpactProps) {
  return (
    <section className="py-16 sm:py-20" id="long-term-impact">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Card className="bg-surface">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Customer Satisfaction Signals
            </p>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
              <RingGraphic value={content.customerSignals[0]?.value ?? 0} />
              <div className="space-y-4">
                {content.customerSignals.map((signal) => (
                  <div key={signal.label} className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-text-primary">
                        {signal.label}
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                        Signal
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-background">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${signal.value}%` }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm leading-6 text-text-secondary">{signal.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3">
            {content.longTermItems.map((item) => (
              <Card
                key={item.title}
                className="h-full bg-background transition-colors duration-200 hover:border-primary/25"
              >
                <div className="space-y-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MaterialSymbol name={item.icon} />
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-sm leading-6 text-text-secondary">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
