import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { productContentList } from "@/lib/content/products/[productSlug]";

export default function ApplicationsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Applications"
          title="Product entry points built around real operational needs."
          description="Procitec.io keeps the website product-first. Each application card explains the fit, the benefit, and the next action clearly."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {productContentList.map((product) => (
            <Card key={product.slug} className="flex h-full flex-col">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <CardTitle>{product.name}</CardTitle>
                  <span className="rounded-full bg-muted-surface px-3 py-1 text-xs font-semibold text-text-secondary">
                    {product.status}
                  </span>
                </div>
                <CardDescription>{product.summary}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <p className="text-sm font-medium text-text-primary">{product.keyBenefit}</p>
                <ul className="space-y-2">
                  {product.benefits.slice(0, 2).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="text-sm leading-6 text-text-secondary">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-col items-stretch sm:flex-row">
                <Button href={`/products/${product.slug}`} className="w-full sm:w-auto">
                  View {product.name}
                </Button>
                {product.secondaryCta ? (
                  <Button
                    href={product.secondaryCta.href}
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    {product.secondaryCta.label}
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
