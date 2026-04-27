import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import EamArchitecture from "@/components/sections/products/EamArchitecture";
import EamCta from "@/components/sections/products/EamCta";
import EamFaq from "@/components/sections/products/EamFaq";
import EamGettingStarted from "@/components/sections/products/EamGettingStarted";
import EamHero from "@/components/sections/products/EamHero";
import EamHowItWorks from "@/components/sections/products/EamHowItWorks";
import EamModules from "@/components/sections/products/EamModules";
import EamProblem from "@/components/sections/products/EamProblem";
import EamTransformation from "@/components/sections/products/EamTransformation";
import EamUseCases from "@/components/sections/products/EamUseCases";
import DashFlowCta from "@/components/sections/products/DashFlowCta";
import DashFlowFaq from "@/components/sections/products/DashFlowFaq";
import DashFlowFeatureGrid from "@/components/sections/products/DashFlowFeatureGrid";
import DashFlowHero from "@/components/sections/products/DashFlowHero";
import IbmBenefits from "@/components/sections/products/IbmBenefits";
import IbmCta from "@/components/sections/products/IbmCta";
import IbmDigitization from "@/components/sections/products/IbmDigitization";
import IbmFaq from "@/components/sections/products/IbmFaq";
import IbmHero from "@/components/sections/products/IbmHero";
import IbmImpact from "@/components/sections/products/IbmImpact";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import { dashflowPageContent } from "@/lib/content/products/dashflow";
import { eamPageContent } from "@/lib/content/products/eam";
import { ibmPageContent } from "@/lib/content/products/ibm";
import { siteConfig } from "@/lib/site";
import {
  getProductContent,
  productContentList,
} from "@/lib/content/products/[productSlug]";
import { buildMetadata } from "@/lib/seo/metadata";

type ProductPageProps = {
  params: Promise<{ productSlug: string }>;
};

const eamKeywords = [
  "enterprise asset management software",
  "industrial maintenance software",
  "preventive maintenance software",
  "asset management software for manufacturing",
  "tenant-safe EAM platform",
];

const ibmKeywords = [
  "installed base management software",
  "industrial installed base manager",
  "OEM service lifecycle software",
  "installed equipment visibility platform",
  "customer asset lifecycle intelligence",
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

const dashflowKeywords = [
  "dashboard tv rotation tool",
  "iot dashboard automation",
  "fullscreen dashboard display software",
  "control room dashboard rotation",
  "plant kpi tv display",
];

export function generateStaticParams() {
  return productContentList.map((product) => ({
    productSlug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;

  if (productSlug === "eam") {
    const metadata = buildMetadata({
      title: eamPageContent.seo.title,
      description: eamPageContent.seo.description,
      path: `/products/${productSlug}`,
    });

    return {
      ...metadata,
      keywords: eamKeywords,
    };
  }

  if (productSlug === "ibm") {
    const metadata = buildMetadata({
      title: ibmPageContent.seo.title,
      description: ibmPageContent.seo.description,
      path: `/products/${productSlug}`,
    });

    return {
      ...metadata,
      keywords: ibmKeywords,
    };
  }

  if (productSlug === "dashflow") {
    const metadata = buildMetadata({
      title: dashflowPageContent.seo.title,
      description: dashflowPageContent.seo.description,
      path: `/products/${productSlug}`,
    });
    const imageUrl = new URL("/dashflow-hero.png", siteUrl).toString();

    return {
      ...metadata,
      keywords: dashflowKeywords,
      openGraph: {
        ...metadata.openGraph,
        images: [
          {
            url: imageUrl,
            alt: dashflowPageContent.hero.imageAlt,
            width: 1200,
            height: 675,
            type: "image/png",
          },
        ],
      },
      twitter: {
        ...metadata.twitter,
        images: [imageUrl],
      },
    };
  }

  const product = getProductContent(productSlug);

  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested Procitec product page could not be found.",
      path: `/products/${productSlug}`,
    });
  }

  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params;

  if (productSlug === "eam") {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          name: "Procitec EAM",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://procitec.io/products/eam",
          description: eamPageContent.seo.description,
          featureList: eamPageContent.modules.items.map((item) => item.title),
          publisher: {
            "@type": "Organization",
            name: "Procitec",
            url: "https://procitec.io",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: eamPageContent.faq.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <EamHero content={eamPageContent.hero} />
        <EamProblem content={eamPageContent.problem} />
        <EamTransformation content={eamPageContent.transformation} />
        <EamHowItWorks content={eamPageContent.howItWorks} />
        <EamModules content={eamPageContent.modules} />
        <EamGettingStarted content={eamPageContent.fieldUse} />
        <EamUseCases content={eamPageContent.useCases} />
        <EamArchitecture content={eamPageContent.architecture} />
        <EamFaq content={eamPageContent.faq} />
        <EamCta content={eamPageContent.cta} />
      </>
    );
  }

  if (productSlug === "ibm") {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          name: "Procitec IBM",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://procitec.io/products/ibm",
          description: ibmPageContent.seo.description,
          featureList: [
            "Installed-base digitization",
            "Service lifecycle visibility",
            "Customer and site visibility",
            "Upgrade and modernization intelligence",
          ],
          publisher: {
            "@type": "Organization",
            name: "Procitec",
            url: "https://procitec.io",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: ibmPageContent.faq.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <IbmHero content={ibmPageContent.hero} />
        <IbmBenefits content={ibmPageContent.userBenefits} />
        <IbmDigitization content={ibmPageContent.digitization} />
        <IbmImpact content={ibmPageContent.impact} />
        <IbmFaq content={ibmPageContent.faq} />
        <IbmCta content={ibmPageContent.cta} />
      </>
    );
  }

  if (productSlug === "dashflow") {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          name: "Procitec DashFlow",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Chrome Extension",
          url: "https://procitec.io/products/dashflow",
          description: dashflowPageContent.seo.description,
          featureList: [
            "Automated dashboard rotation",
            "Fullscreen TV display mode",
            "Customer logo upload",
            "Offline license activation",
            "Auto-resume after refresh",
          ],
          publisher: {
            "@type": "Organization",
            name: "Procitec",
            url: "https://procitec.io",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: dashflowPageContent.faq.items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <DashFlowHero content={dashflowPageContent.hero} />
        <DashFlowFeatureGrid content={dashflowPageContent.benefits} id="benefits" />
        <DashFlowFeatureGrid
          content={dashflowPageContent.operations}
          id="operations"
          surface="surface"
        />
        <DashFlowFeatureGrid content={dashflowPageContent.rollout} id="rollout" />
        <DashFlowFaq content={dashflowPageContent.faq} />
        <DashFlowCta content={dashflowPageContent.cta} />
      </>
    );
  }

  const product = getProductContent(productSlug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <Container className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-text-secondary">
              {product.status}
            </span>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {product.eyebrow}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl">
              {product.seo.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={product.primaryCta.href} size="lg" className="w-full sm:w-auto">
              {product.primaryCta.label}
            </Button>
            {product.secondaryCta ? (
              <Button
                href={product.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {product.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <SectionHeader
            eyebrow="Capabilities"
            title={`What ${product.name} helps teams do.`}
            description={product.summary}
          />

          <div className="grid gap-4">
            {product.capabilities.map((capability) => (
              <Card key={capability.title}>
                <h2 className="text-lg font-semibold text-text-primary">
                  {capability.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Card className="bg-background">
            <h2 className="text-lg font-semibold text-text-primary">Benefits</h2>
            <ul className="mt-5 space-y-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="text-sm leading-6 text-text-secondary">
                  {benefit}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-background">
            <h2 className="text-lg font-semibold text-text-primary">Fit</h2>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Audience
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {product.audience.join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Industries
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {product.industries.join(", ")}
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="FAQ"
            title={`Common questions about ${product.name}.`}
            description="Structured answers help both human readers and AI systems extract the right context quickly."
          />

          <div className="grid gap-4">
            {product.faq.map((item) => (
              <Card key={item.question}>
                <h2 className="text-lg font-semibold text-text-primary">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
