import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamHowItWorksProps = {
  content: EamPageContent["howItWorks"];
};

export default function EamHowItWorks({ content }: EamHowItWorksProps) {
  return (
    <section className="py-16 sm:py-20" id="how-it-works">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <Card
              key={step.title}
              className="h-full border-border bg-surface transition-colors duration-200 hover:border-primary/25"
            >
              <div className="flex items-center justify-between gap-3">
                {step.icon ? (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MaterialSymbol name={step.icon} />
                  </span>
                ) : (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary" />
                )}
                <span className="text-sm font-semibold text-text-muted">
                  0{index + 1}
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
