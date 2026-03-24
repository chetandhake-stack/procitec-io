import type { ProductContent } from "@/lib/types/app";

export const productContentBySlug: Record<string, ProductContent> = {
  eam: {
    slug: "eam",
    name: "EAM",
    eyebrow: "Enterprise Asset Management",
    status: "Live",
    summary:
      "Asset and maintenance workflows designed for industrial reliability, visibility, and structured execution.",
    description:
      "Procitec EAM helps industrial teams manage assets, maintenance activity, and operational visibility with a clear, application-first workflow.",
    keyBenefit: "Improve asset reliability and reduce maintenance uncertainty.",
    audience: [
      "Plant heads",
      "Maintenance managers",
      "Engineering teams",
      "Multi-site industrial operations",
    ],
    benefits: [
      "Clearer visibility into asset status and maintenance priorities",
      "Structured work execution for teams managing complex equipment",
      "Operational context that supports better planning and faster response",
    ],
    capabilities: [
      {
        title: "Asset visibility",
        description:
          "Organize asset context and maintenance information so teams can see priorities clearly.",
      },
      {
        title: "Maintenance execution",
        description:
          "Support planned work, routine tasks, and follow-through with consistent workflows.",
      },
      {
        title: "Operational alignment",
        description:
          "Keep stakeholders aligned across sites with shared application structure and clearer status visibility.",
      },
    ],
    industries: ["Manufacturing", "Process plants", "Infrastructure operations"],
    primaryCta: {
      label: "Open EAM",
      href: "https://eam.procitec.io/",
    },
    secondaryCta: {
      label: "Talk to Expert",
      href: "/contact",
    },
    seo: {
      title: "Enterprise Asset Management Software for Industrial Plants",
      description:
        "Explore Procitec EAM for industrial asset visibility, maintenance workflows, and reliability-focused operations.",
    },
    faq: [
      {
        question: "What is Procitec EAM used for?",
        answer:
          "Procitec EAM is used to manage industrial assets, maintenance visibility, and execution workflows in one structured application.",
      },
      {
        question: "Who should use Procitec EAM?",
        answer:
          "It is suited to plant heads, maintenance managers, and engineering teams responsible for asset performance and maintenance control.",
      },
    ],
  },
  ems: {
    slug: "ems",
    name: "EMS",
    eyebrow: "Energy Management System",
    status: "Coming Soon",
    summary:
      "Energy monitoring and performance visibility designed for industrial environments that need practical insight.",
    description:
      "Procitec EMS is planned as the energy intelligence layer of the Procitec application platform, helping teams monitor performance and act on meaningful energy signals.",
    keyBenefit: "Improve energy visibility and focus action where efficiency gains are real.",
    audience: [
      "Energy managers",
      "Plant leadership",
      "Operational excellence teams",
      "Industrial sites tracking energy performance",
    ],
    benefits: [
      "Centralized energy visibility for industrial operations",
      "Structured monitoring that supports quicker identification of waste or variation",
      "A clearer path from energy data to action",
    ],
    capabilities: [
      {
        title: "Energy monitoring",
        description:
          "Track energy performance in a cleaner, more structured application experience.",
      },
      {
        title: "Operational insight",
        description:
          "Support teams with information that is easier to review, compare, and discuss.",
      },
      {
        title: "Scalable platform fit",
        description:
          "Extend the Procitec product platform with a dedicated application for energy intelligence.",
      },
    ],
    industries: ["Manufacturing", "Utilities", "Energy-intensive operations"],
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform",
    },
    seo: {
      title: "Energy Management System for Industrial Operations",
      description:
        "Review the planned Procitec EMS direction for energy monitoring, operational visibility, and industrial efficiency improvement.",
    },
    faq: [
      {
        question: "What will Procitec EMS focus on?",
        answer:
          "Procitec EMS is planned to focus on industrial energy monitoring, performance visibility, and action-oriented energy intelligence.",
      },
      {
        question: "Who is Procitec EMS for?",
        answer:
          "It is intended for energy managers, plant leadership, and teams responsible for improving industrial energy performance.",
      },
    ],
  },
};

export const productContentList = Object.values(productContentBySlug);

export function getProductContent(slug: string) {
  return productContentBySlug[slug];
}
