import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamTransformationProps = {
  content: EamPageContent["transformation"];
};

export default function EamTransformation({ content }: EamTransformationProps) {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20" id="operational-change">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4">
          {content.items.map((item) => (
            <Card
              key={`${item.before}-${item.after}`}
              className="grid gap-4 bg-background md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Before
                </p>
                <p className="text-base leading-7 text-text-secondary">{item.before}</p>
              </div>
              <div className="flex items-center justify-center text-sm font-semibold uppercase tracking-widest text-primary">
                To
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  After
                </p>
                <p className="text-base leading-7 text-text-primary">{item.after}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
