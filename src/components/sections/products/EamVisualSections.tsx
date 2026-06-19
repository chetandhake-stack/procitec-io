import Image from "next/image";
import Container from "@/components/layout/Container";
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import MaterialSymbol from "@/components/ui/MaterialSymbol";
import SectionHeader from "@/components/ui/SectionHeader";

const imageBase = "/images/EAM Images";

type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type FeatureCard = {
  title: string;
  description: string;
  icon: string;
};

function imagePath(fileName: string) {
  return `${imageBase}/${fileName}`;
}

function ImageFrame({
  image,
  className = "",
}: {
  image: ImageAsset;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-lg border border-border bg-background shadow-soft ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-auto w-full"
        sizes="(min-width: 1280px) 1180px, (min-width: 768px) 92vw, 100vw"
      />
    </div>
  );
}

function FeatureList({ items }: { items: FeatureCard[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="bg-background">
          <CardHeader className="space-y-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MaterialSymbol name={item.icon} />
            </span>
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-6 text-text-secondary">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function EamOutcomesSection() {
  const outcomes: FeatureCard[] = [
    {
      title: "Asset records",
      description:
        "Keep equipment identity, location, condition, documents, and maintenance context easier to review.",
      icon: "inventory_2",
    },
    {
      title: "Maintenance planning",
      description:
        "Move recurring work, inspections, and preventive tasks out of memory-driven follow-up.",
      icon: "event_repeat",
    },
    {
      title: "Work execution",
      description:
        "Give teams a clearer path from request, assignment, field update, and completion review.",
      icon: "assignment",
    },
  ];

  return (
    <section className="py-16 sm:py-20" id="eam-outcomes">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Operational Control"
          title="What Procitec EAM helps plant teams control."
          description="The product story should start with practical maintenance outcomes before going deep into modules."
          maxWidth="lg"
        />
        <FeatureList items={outcomes} />
      </Container>
    </section>
  );
}

export function EamAssetFoundationSection() {
  const foundationImage: ImageAsset = {
    src: imagePath("Asset Hierarchy.png"),
    alt: "EAM asset hierarchy by location, category, relationship diagrams, and plant layout",
    width: 1536,
    height: 1024,
  };

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20" id="asset-foundation">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Asset Foundation"
          title="Build the asset structure before maintenance work starts."
          description="Procitec EAM organizes assets by location, category, relationship, and plant context so teams can orient faster."
          maxWidth="lg"
        />
        <ImageFrame image={foundationImage} />
      </Container>
    </section>
  );
}

export function EamAssetRecordSection() {
  const featured: ImageAsset = {
    src: imagePath("eam_asset_overview.png"),
    alt: "EAM asset overview showing status, asset details, criticality, utilization, health index, and value",
    width: 768,
    height: 512,
  };
  const tabs: Array<ImageAsset & { title: string; description: string }> = [
    {
      title: "Documents",
      description: "Manuals, datasheets, drawings, checklists, and certificates stay linked to the asset.",
      src: imagePath("eam_asset_documents.png"),
      alt: "EAM asset documents tab showing manuals, datasheets, drawings, checklists, and certificates",
      width: 768,
      height: 512,
    },
    {
      title: "Maintenance",
      description: "Maintenance plans, next due dates, and reliability context remain visible in one place.",
      src: imagePath("eam_asset_maintenance.png"),
      alt: "EAM asset maintenance tab showing maintenance plan, next due item, and reliability benefits",
      width: 768,
      height: 512,
    },
    {
      title: "Meters & readings",
      description: "Operational readings and trends support condition review before issues become larger.",
      src: imagePath("eam_asset_meters_readings.png"),
      alt: "EAM meters and readings tab showing voltage, current, power, frequency, temperature, and vibration",
      width: 768,
      height: 512,
    },
    {
      title: "History & alerts",
      description: "Work history and active alerts help teams see recurring issues and current risk.",
      src: imagePath("eam_asset_work_history_alerts.png"),
      alt: "EAM work history and alerts tab showing maintenance events and active asset alerts",
      width: 768,
      height: 512,
    },
  ];

  return (
    <section className="py-16 sm:py-20" id="asset-record">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Digital Asset Record"
          title="Every asset has one place for status, documents, readings, history, and follow-up."
          description="The asset record is the working center of the EAM experience, connecting office review with plant-floor action."
          maxWidth="lg"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <ImageFrame image={featured} />
          <div className="grid gap-4 sm:grid-cols-2">
            {tabs.map((item) => (
              <Card key={item.title} className="overflow-hidden p-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-auto w-full border-b border-border"
                  sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 100vw"
                />
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-sm leading-6 text-text-secondary">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EamFieldWorkflowSection() {
  const workflowImages: ImageAsset[] = [
    {
      src: imagePath("Asset QR 1.png"),
      alt: "Technician scanning an asset QR code to open the EAM asset record on a tablet",
      width: 1536,
      height: 1024,
    },
    {
      src: imagePath("Work Request.png"),
      alt: "EAM work request workflow from issue identification to completion confirmation",
      width: 1536,
      height: 1024,
    },
  ];

  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20" id="field-workflow">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Field Workflow"
          title="From asset scan to work request without losing context."
          description="Plant users can start from the physical asset, open the right record, and keep follow-up connected to asset history."
          maxWidth="lg"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {workflowImages.map((image) => (
            <ImageFrame key={image.src} image={image} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EamInspectionSopSection() {
  const inspection: ImageAsset = {
    src: imagePath("Asset Inspection 1.png"),
    alt: "EAM inspection dashboard showing scheduled, completed, overdue, checklist, execution, findings, and corrective actions",
    width: 1536,
    height: 1024,
  };
  const sop: ImageAsset = {
    src: imagePath("SOP.png"),
    alt: "EAM standard operating procedure screen showing approved preventive maintenance SOP with step-by-step guidance",
    width: 1536,
    height: 1024,
  };

  return (
    <section className="py-16 sm:py-20" id="inspection-sop">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Inspections And SOPs"
          title="Standardize recurring checks and maintenance procedures."
          description="Inspections, findings, corrective action, and approved SOPs help teams make maintenance work repeatable and easier to review."
          maxWidth="lg"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <ImageFrame image={inspection} />
          <ImageFrame image={sop} />
        </div>
      </Container>
    </section>
  );
}
