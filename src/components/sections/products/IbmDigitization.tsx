import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { IbmPageContent } from "@/lib/content/products/ibm";

type IbmDigitizationProps = {
  content: IbmPageContent["digitization"];
};

export default function IbmDigitization({ content }: IbmDigitizationProps) {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20" id="digitization">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {content.stages.map((stage, index) => (
            <Card
              key={stage.title}
              className="h-full bg-background transition-colors duration-200 hover:border-primary/25"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MaterialSymbol name={stage.icon} />
                </span>
                <span className="text-sm font-semibold text-text-muted">0{index + 1}</span>
              </div>

              <div className="mt-5 space-y-3">
                <h3 className="text-lg font-semibold text-text-primary">{stage.title}</h3>
                <p className="text-sm leading-6 text-text-secondary">{stage.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-background">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                From Manual To Structured
              </p>
              <h3 className="text-2xl font-semibold leading-tight text-text-primary">
                IBM helps providers move from scattered installed knowledge to durable lifecycle visibility.
              </h3>
              <p className="text-sm leading-6 text-text-secondary">
                The value is cumulative: first digitize the installed base, then
                connect teams, then improve service quality and long-term customer
                planning.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Before
                </p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Spreadsheets, inbox history, and account memory drive installed-base work.
                </p>
              </div>
              <div className="rounded-lg border border-primary/15 bg-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Transition
                </p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Teams begin managing equipment, service context, and account follow-up in one system.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Outcome
                </p>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Customer-facing work becomes more consistent, scalable, and easier to plan long-term.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
