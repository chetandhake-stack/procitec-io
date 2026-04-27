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
  ibm: {
    slug: "ibm",
    name: "IBM",
    eyebrow: "Installed Base Manager",
    status: "Coming Soon",
    summary:
      "Installed-base intelligence for industrial equipment providers that need stronger service visibility, customer continuity, and long-term lifecycle control.",
    description:
      "Procitec IBM is planned to help OEMs, service teams, and industrial account owners digitize installed equipment records, track lifecycle status, coordinate service follow-up, and identify upgrade opportunities in one structured application.",
    keyBenefit:
      "Turn scattered customer asset records into a structured installed-base system for better service response, stronger customer relationships, and scalable lifecycle growth.",
    audience: [
      "Aftermarket service leaders",
      "OEM operations teams",
      "Account and service managers",
      "Customer success and support teams",
      "Industrial equipment providers",
    ],
    benefits: [
      "Digitize installed equipment, customer sites, and service history in one structured record system",
      "Improve response quality by giving support and service teams a clearer view of what is installed and what has happened before",
      "Strengthen customer satisfaction through faster follow-up, better continuity, and more informed service conversations",
      "Reduce dependence on scattered spreadsheets, personal memory, and disconnected account files",
      "Create better visibility for renewals, retrofit planning, and lifecycle upgrade opportunities",
      "Build a stronger long-term installed-base foundation for service growth and commercial planning",
    ],
    capabilities: [
      {
        title: "Installed-base digitization",
        description:
          "Convert scattered installed equipment records into a structured digital system with customer, site, and configuration context.",
      },
      {
        title: "Customer and site visibility",
        description:
          "Maintain a clearer view of where equipment is installed, who owns it, and what commercial or service relationship surrounds it.",
      },
      {
        title: "Service lifecycle visibility",
        description:
          "Track maintenance status, service coverage, support follow-up, and open lifecycle actions across the installed base.",
      },
      {
        title: "Upgrade and modernization intelligence",
        description:
          "Identify equipment groups that may need retrofit, replacement, modernization, or deeper customer engagement over time.",
      },
      {
        title: "Cross-team coordination",
        description:
          "Give service, sales, operations, and account teams one shared view of what is installed, what needs attention, and where opportunity exists.",
      },
    ],
    industries: [
      "Industrial OEMs",
      "Aftermarket service organizations",
      "Equipment manufacturers",
      "Multi-site industrial service providers",
    ],
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform",
    },
    seo: {
      title: "Installed Base Management Software for Industrial Equipment Providers",
      description:
        "Explore the Procitec IBM direction for installed-base visibility, service coordination, lifecycle tracking, and industrial customer asset intelligence.",
    },
    faq: [
      {
        question: "What is Procitec IBM designed to manage?",
        answer:
          "Procitec IBM is intended to manage the installed base of industrial equipment across customers, sites, service contracts, and lifecycle relationships in one structured view.",
      },
      {
        question: "Who is Procitec IBM for?",
        answer:
          "It is suited to OEMs, aftermarket service teams, account owners, and customer-facing operations teams that need better visibility into installed assets, service status, and lifecycle follow-up.",
      },
      {
        question: "How does Procitec IBM support digitization?",
        answer:
          "It is intended to replace fragmented spreadsheets and disconnected installed-equipment lists with a structured digital record of customers, sites, equipment, and service history.",
      },
      {
        question: "How can Procitec IBM improve customer satisfaction?",
        answer:
          "With better installed-base visibility, teams can respond faster, avoid repeated information gaps, and give customers more confident service and support conversations.",
      },
      {
        question: "What is the long-term value of Procitec IBM?",
        answer:
          "Over time, Procitec IBM is intended to create a stronger installed-base foundation for service growth, modernization planning, commercial follow-up, and more durable customer relationships.",
      },
    ],
  },
  dashflow: {
    slug: "dashflow",
    name: "DashFlow",
    eyebrow: "Dashboard Automation Display Tool",
    status: "Live",
    summary:
      "Automated fullscreen IoT dashboard rotation for TV displays, control rooms, and continuous plant visibility.",
    description:
      "Procitec DashFlow is a Chrome-based dashboard automation tool that turns IoT dashboards into fullscreen rotating displays, helping teams keep live plant, energy, utility, and operational KPIs visible without manual clicks.",
    keyBenefit:
      "Keep critical dashboards visible on shared screens with reliable fullscreen rotation, customer branding, and low-friction daily operation.",
    audience: [
      "Plant operations teams",
      "Energy managers",
      "Control room operators",
      "Production supervisors",
      "Management review teams",
    ],
    benefits: [
      "Automatically cycle selected dashboards and charts without manual navigation",
      "Keep plant, energy, and utility KPIs visible on TV displays and shared monitoring screens",
      "Support customer-branded display setups with logo upload for different sites or departments",
      "Resume rotation after browser refresh for more reliable long-running display operation",
      "Simplify wall-screen monitoring with configurable timing, spacing, and safe stop control across active tabs",
      "Improve visibility into missing or abnormal dashboards through built-in console diagnostics",
    ],
    capabilities: [
      {
        title: "Automated dashboard rotation",
        description:
          "Cycle selected IoT dashboards and charts automatically in a fullscreen TV-style display mode.",
      },
      {
        title: "Display control and timing",
        description:
          "Configure chart timing, layout spacing, and clean control sections for more practical day-to-day operation.",
      },
      {
        title: "Customer branding",
        description:
          "Upload customer-specific logos so display screens can align with plant, department, or client branding needs.",
      },
      {
        title: "License-key activation",
        description:
          "Support offline annual license activation today, with server-based activation available as a future control layer.",
      },
      {
        title: "Resilient shared-screen operation",
        description:
          "Auto-resume after refresh, show a running-state indicator, and safely stop active dashboard tabs when needed.",
      },
    ],
    industries: [
      "Manufacturing",
      "Energy monitoring",
      "Industrial IoT operations",
      "Utility and plant monitoring",
    ],
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform",
    },
    seo: {
      title: "Automated IoT Dashboard TV Display Tool for Plants and Control Rooms",
      description:
        "Explore Procitec DashFlow for fullscreen IoT dashboard rotation, customer-branded display screens, license activation, and continuous KPI visibility.",
    },
    faq: [
      {
        question: "What is Procitec DashFlow used for?",
        answer:
          "Procitec DashFlow is used to turn IoT dashboards into automated fullscreen TV displays that rotate selected charts and widgets without manual navigation.",
      },
      {
        question: "Where is DashFlow useful?",
        answer:
          "It is suited to shopfloor displays, control rooms, energy monitoring screens, management dashboards, and customer-facing KPI displays where live visibility matters.",
      },
      {
        question: "Can DashFlow support customer branding?",
        answer:
          "Yes. DashFlow supports customer-specific PNG logo upload so plants, departments, or client installations can use a branded display experience.",
      },
      {
        question: "How does DashFlow handle licensing?",
        answer:
          "DashFlow supports offline license-key activation, with each license valid for one year from activation. Server-based activation can be added later for stricter centralized control.",
      },
    ],
  },
};

export const productContentList = Object.values(productContentBySlug);

export function getProductContent(slug: string) {
  return productContentBySlug[slug];
}
