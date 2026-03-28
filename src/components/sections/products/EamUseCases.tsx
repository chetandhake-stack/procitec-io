import Container from "@/components/layout/Container";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamUseCasesProps = {
  content: EamPageContent["useCases"];
};

export default function EamUseCases({ content }: EamUseCasesProps) {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20" id="use-cases">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => (
            <Card
              key={item.title}
              className="h-full bg-background transition-colors duration-200 hover:border-primary/25"
            >
              <CardHeader className="space-y-3">
                {item.icon ? (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MaterialSymbol name={item.icon} />
                  </span>
                ) : null}
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-6 text-text-secondary">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
