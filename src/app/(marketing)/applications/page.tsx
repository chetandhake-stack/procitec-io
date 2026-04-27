import type { Metadata } from "next";
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
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Applications",
  description:
    "Review Procitec application entry points for EAM, EMS, IBM, DashFlow, and future industrial software products.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Applications"
          title="Explore Procitec applications by product path."
          description="Each product page is structured for clarity, fast scanning, and practical next steps."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
              <CardContent className="flex-1 space-y-3">
                <p className="font-medium text-text-primary">{product.keyBenefit}</p>
                <ul className="space-y-2">
                  {product.audience.map((item) => (
                    <li key={item} className="text-sm leading-6 text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col items-stretch sm:flex-row">
                <Button href={`/products/${product.slug}`} className="w-full sm:w-auto">
                  View {product.name}
                </Button>
                <Button
                  href={product.primaryCta.href}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {product.primaryCta.label}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
