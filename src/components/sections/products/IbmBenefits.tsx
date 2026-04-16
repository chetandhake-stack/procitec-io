import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { IbmPageContent } from "@/lib/content/products/ibm";

type IbmBenefitsProps = {
  content: IbmPageContent["userBenefits"];
};

export default function IbmBenefits({ content }: IbmBenefitsProps) {
  return (
    <section className="py-16 sm:py-20" id="user-benefits">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="space-y-10">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            maxWidth="lg"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {content.items.map((item) => (
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

        <Card className="bg-surface">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {content.chartTitle}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-text-primary">
            Clearer installed-base workflows create better outcomes for daily users.
          </h3>
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            {content.chartDescription}
          </p>

          <div className="mt-6 space-y-5">
            {content.chartSignals.map((signal) => (
              <div key={signal.label} className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-text-primary">{signal.label}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Illustrative
                  </p>
                </div>
                <div className="grid grid-cols-5 gap-2" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => {
                    const threshold = ((index + 1) / 5) * 100;
                    const isActive = signal.value >= threshold;

                    return (
                      <span
                        key={`${signal.label}-${threshold}`}
                        className={
                          isActive
                            ? "h-12 rounded-md bg-primary shadow-soft"
                            : "h-12 rounded-md bg-background"
                        }
                      />
                    );
                  })}
                </div>
                <p className="text-sm leading-6 text-text-secondary">{signal.note}</p>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
