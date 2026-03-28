import Container from "@/components/layout/Container";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamGettingStartedProps = {
  content: EamPageContent["fieldUse"];
};

export default function EamGettingStarted({ content }: EamGettingStartedProps) {
  return (
    <section
      className="py-16 sm:py-20"
      id="field-use"
    >
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {content.items.map((item) => (
            <Card
              key={item.title}
              className="h-full bg-background transition-colors duration-200 hover:border-primary/25"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  {item.icon ? (
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={item.icon} />
                    </span>
                  ) : null}
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.title}
                  </p>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-sm leading-6 text-text-secondary">{item.description}</p>
              </CardHeader>
              {item.points ? (
                <CardContent>
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                        <span className="leading-6 text-text-secondary">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
