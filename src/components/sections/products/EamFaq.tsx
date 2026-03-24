import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import type { EamPageContent } from "@/lib/content/products/eam";

type EamFaqProps = {
  content: EamPageContent["faq"];
};

export default function EamFaq({ content }: EamFaqProps) {
  return (
    <section className="py-16 sm:py-20" id="faq">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          maxWidth="lg"
        />

        <dl className="grid gap-4">
          {content.items.map((item) => (
            <Card
              key={item.question}
              className="bg-background transition-colors duration-200 hover:border-primary/25"
            >
              <dt>
                <h3 className="text-lg font-semibold text-text-primary">
                  {item.question}
                </h3>
              </dt>
              <dd className="mt-3 text-sm leading-6 text-text-secondary">
                {item.answer}
              </dd>
            </Card>
          ))}
        </dl>
      </Container>
    </section>
  );
}
