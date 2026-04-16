import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo/metadata";

type PlatformValueItem = {
  title: string;
  description: string;
  icon: string;
};

type PlatformLayer = {
  title: string;
  description: string;
  icon: string;
};

type PlatformPillar = {
  title: string;
  description: string;
};

type PlatformComparison = {
  typical: string;
  procitec: string;
};

type PlatformProduct = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: string;
};

type PlatformUseCase = {
  title: string;
  description: string;
};

type PlatformTrustItem = {
  title: string;
  description: string;
  icon: string;
};

const valueItems: PlatformValueItem[] = [
  {
    title: "Shared operational foundation",
    description:
      "Applications sit on one platform structure instead of competing across disconnected systems.",
    icon: "inventory_2",
  },
  {
    title: "Controlled multi-tenant access",
    description:
      "Tenant-aware access and role visibility help teams expand without losing control.",
    icon: "security",
  },
  {
    title: "Scalable product path",
    description:
      "Procitec can add products and workflows without rebuilding the foundation each time.",
    icon: "analytics",
  },
];

const platformLayers: PlatformLayer[] = [
  {
    title: "Application layer",
    description:
      "Procitec applications such as EAM and EMS run on one shared platform instead of separate product islands.",
    icon: "desktop_windows",
  },
  {
    title: "Workflow layer",
    description:
      "Shared workflow structure keeps operational follow-up, navigation, and product behavior more consistent.",
    icon: "assignment",
  },
  {
    title: "Access and governance layer",
    description:
      "Role-aware access, tenant separation, and audit-oriented visibility stay part of the platform foundation.",
    icon: "admin_panel_settings",
  },
  {
    title: "Deployment layer",
    description:
      "The platform supports multiple sites, teams, and future application growth through a structured deployment model.",
    icon: "factory",
  },
];

const pillars: PlatformPillar[] = [
  {
    title: "Reduced silos",
    description:
      "Shared structure makes it easier to connect products, teams, and operational context instead of multiplying isolated tools.",
  },
  {
    title: "Operational control",
    description:
      "Procitec gives teams clearer control over who can access what, where users work, and how products stay organized.",
  },
  {
    title: "Scalable governance",
    description:
      "The platform is designed to support product growth, additional sites, and controlled expansion without losing clarity.",
  },
];

const comparisons: PlatformComparison[] = [
  {
    typical: "Separate tools for each operational need",
    procitec: "A shared platform for multiple industrial applications",
  },
  {
    typical: "Integration work grows with every product addition",
    procitec: "Shared structure reduces platform fragmentation as products expand",
  },
  {
    typical: "Weak boundaries between users, teams, or environments",
    procitec: "Tenant-aware structure and role-based visibility stay built into the foundation",
  },
  {
    typical: "Dashboard-first messaging with limited operational context",
    procitec: "Operations-first structure designed for real workflows and controlled deployment",
  },
];

const platformProducts: PlatformProduct[] = [
  {
    title: "EAM",
    description:
      "Asset lifecycle, maintenance execution, inspections, and downtime visibility on one structured operational product.",
    href: "/products/eam",
    cta: "Explore EAM",
    icon: "manufacturing",
  },
  {
    title: "EMS",
    description:
      "Energy visibility and future energy-management workflows on the same Procitec product foundation.",
    href: "/products/ems",
    cta: "Explore EMS",
    icon: "analytics",
  },
  {
    title: "IBM",
    description:
      "Installed base visibility, service follow-up, and lifecycle coordination for industrial equipment providers on the same Procitec platform.",
    href: "/products/ibm",
    cta: "Explore IBM",
    icon: "inventory_2",
  },
];

const useCases: PlatformUseCase[] = [
  {
    title: "Multi-site manufacturing groups",
    description:
      "Standardize product structure across plants while keeping each operating environment clearly separated.",
  },
  {
    title: "Industrial service and facility operators",
    description:
      "Support multiple client or site contexts through tenant-aware access and clearer platform boundaries.",
  },
  {
    title: "Operations teams scaling digital systems",
    description:
      "Expand beyond a single product without rebuilding access, navigation, and product structure every time.",
  },
];

const trustItems: PlatformTrustItem[] = [
  {
    title: "Role-aware access",
    description:
      "Control who can see and do what across products, teams, and operating contexts.",
    icon: "security",
  },
  {
    title: "Tenant separation",
    description:
      "Keep tenant workspaces and visibility boundaries clearer as products expand across environments.",
    icon: "factory",
  },
  {
    title: "Audit-oriented structure",
    description:
      "Support review, accountability, and product governance through structured operational visibility.",
    icon: "history",
  },
  {
    title: "Shared platform governance",
    description:
      "Keep administrative oversight separate from daily application use so products stay practical for operators.",
    icon: "admin_panel_settings",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Industrial Software Platform For Procitec Applications | Procitec.io",
  description:
    "Explore the Procitec platform foundation for industrial applications, tenant-aware access, product growth, and controlled operational deployment.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Procitec Platform
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                A shared platform for industrial applications, operational control,
                and scalable growth.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-text-secondary sm:text-lg">
                Procitec gives EAM, EMS, and future industrial applications one
                consistent foundation for product structure, workflow clarity,
                tenant-aware access, and controlled expansion across sites and teams.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/applications" size="lg" className="w-full sm:w-auto">
                Explore Applications
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Book Demo
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {valueItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-border bg-background px-4 py-4 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={item.icon} />
                    </span>
                    <p className="pt-1 text-sm font-semibold text-text-primary">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-primary/10 bg-background p-0">
            <div className="border-b border-border px-6 py-5">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Platform View
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-text-primary">
                One core foundation connecting products, access, and operational
                structure.
              </h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                The platform keeps applications, workflows, and governance aligned
                without turning the public site into infrastructure documentation.
              </p>
            </div>

            <div className="px-6 py-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {platformLayers.map((layer) => (
                  <div
                    key={layer.title}
                    className="rounded-lg border border-border bg-surface px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MaterialSymbol name={layer.icon} />
                      </span>
                      <div className="space-y-2">
                        <p className="text-base font-semibold text-text-primary">
                          {layer.title}
                        </p>
                        <p className="text-sm leading-6 text-text-secondary">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Platform Value"
            title="One platform for products, access control, and operational structure."
            description="This page should explain why the platform matters, not just how the website is arranged."
            maxWidth="lg"
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {valueItems.map((item) => (
              <Card
                key={item.title}
                className="bg-surface transition-colors duration-200 hover:border-primary/25"
              >
                <CardHeader className="space-y-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MaterialSymbol name={item.icon} />
                  </span>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <SectionHeader
            eyebrow="Platform Layers"
            title="Built in layers for control, clarity, and product growth."
            description="Procitec should feel like a real platform foundation for industrial software, not a loose collection of pages and products."
            maxWidth="md"
          />

          <div className="grid gap-4">
            {platformLayers.map((layer, index) => (
              <Card
                key={layer.title}
                className="bg-background transition-colors duration-200 hover:border-primary/25"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={layer.icon} />
                    </span>
                    {index !== platformLayers.length - 1 ? (
                      <span className="h-10 w-px bg-border" aria-hidden="true" />
                    ) : null}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      Layer {index + 1}
                    </p>
                    <h3 className="text-xl font-semibold leading-tight text-text-primary">
                      {layer.title}
                    </h3>
                    <p className="leading-6 text-text-secondary">{layer.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Why It Exists"
            title="Built for operational reality, not disconnected product expansion."
            description="Industrial software gets harder to run when products, users, and environments grow without a shared platform structure."
            align="center"
            maxWidth="lg"
          />

          <div className="mx-auto max-w-3xl text-center text-base leading-7 text-text-secondary sm:text-lg">
            <p>
              Procitec is building the platform so products can stay connected,
              access can stay controlled, and future expansion does not create a new
              layer of operational confusion.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-6 text-text-secondary">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Differentiation"
            title="Why Procitec is not just another platform story."
            description="The platform should communicate product readiness, operational control, and a clearer path to expansion."
            maxWidth="lg"
          />

          <div className="overflow-hidden rounded-lg border border-border bg-background shadow-soft">
            <div className="grid grid-cols-1 border-b border-border bg-surface md:grid-cols-2">
              <div className="px-6 py-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
                Typical Systems
              </div>
              <div className="border-t border-border px-6 py-4 text-sm font-semibold uppercase tracking-widest text-primary md:border-l md:border-t-0">
                Procitec
              </div>
            </div>
            {comparisons.map((comparison, index) => (
              <div
                key={comparison.typical}
                className={[
                  "grid grid-cols-1 md:grid-cols-2",
                  index !== comparisons.length - 1 ? "border-b border-border" : "",
                ].join(" ")}
              >
                <div className="px-6 py-5 text-sm leading-6 text-text-secondary">
                  {comparison.typical}
                </div>
                <div className="border-t border-border bg-primary/5 px-6 py-5 text-sm leading-6 text-text-primary md:border-l md:border-t-0">
                  {comparison.procitec}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Products On Platform"
            title="Applications powered by the same Procitec foundation."
            description="Buyers should be able to see how current and future products sit on the platform instead of guessing what the platform actually powers."
            maxWidth="lg"
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {platformProducts.map((product) => (
              <Card key={product.title} className="flex h-full flex-col bg-surface">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MaterialSymbol name={product.icon} />
                    </span>
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <div className="mt-auto px-6 pb-6">
                  <Button href={product.href} variant="secondary" className="w-full sm:w-auto">
                    {product.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm font-medium leading-6 text-text-secondary">
            Each product benefits from the same structure for access, navigation,
            governance, and future platform growth.
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeader
            eyebrow="Use Cases"
            title="A platform model suited to industrial teams operating across sites, products, and environments."
            description="These examples help the page feel operationally grounded instead of conceptually abstract."
            maxWidth="lg"
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="bg-background">
                <h3 className="text-lg font-semibold text-text-primary">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <SectionHeader
            eyebrow="Trust And Governance"
            title="Enterprise-ready control without turning the platform into a maze."
            description="Governance should support buyer confidence, but it should appear after the platform value is already clear."
            maxWidth="md"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map((item) => (
              <Card key={item.title} className="bg-surface">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MaterialSymbol name={item.icon} />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                    <p className="text-sm leading-6 text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-text-primary py-16 sm:py-20">
        <Container size="lg">
          <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-8 text-center shadow-medium sm:px-8 sm:py-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Next Step
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                See how Procitec connects industrial applications on one controlled
                platform.
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-7 text-white/80">
                Review the application path, discuss platform fit, and move toward
                a product foundation that scales more cleanly with your operations.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Book Demo
              </Button>
              <Button
                href="/applications"
                size="lg"
                variant="secondary"
                className="w-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              >
                Explore Applications
              </Button>
              <Button
                href="/products/eam"
                size="lg"
                variant="ghost"
                className="w-full text-white hover:bg-white/10 sm:w-auto"
              >
                Explore EAM
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
