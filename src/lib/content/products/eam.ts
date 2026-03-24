export type EamLink = {
  label: string;
  href: string;
};

export type EamHeroHighlight = {
  title: string;
  description: string;
  icon?: string;
};

export type EamFeatureCard = {
  title: string;
  description: string;
  icon?: string;
  points?: string[];
};

export type EamWorkflowStep = {
  title: string;
  description: string;
  icon?: string;
};

export type EamFaqItem = {
  question: string;
  answer: string;
};

export type EamSection<T> = {
  eyebrow: string;
  title: string;
  description: string;
  items: T[];
};

export interface EamPageContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: EamLink;
    secondaryCta: EamLink;
    highlights: EamHeroHighlight[];
  };
  architecture: EamSection<EamFeatureCard>;
  modules: EamSection<EamFeatureCard>;
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: EamWorkflowStep[];
  };
  gettingStarted: EamSection<EamFeatureCard>;
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: EamFaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    trustLine: string;
    primaryCta: EamLink;
    secondaryCta: EamLink;
    tertiaryCta: EamLink;
  };
}

export const eamPageContent: EamPageContent = {
  seo: {
    title: "Enterprise Asset Management Software for Industrial Maintenance | Procitec EAM",
    description:
      "Procitec EAM helps industrial teams manage assets, maintenance operations, preventive work, inspections, and tenant-safe access from one structured platform.",
  },
  hero: {
    eyebrow: "Procitec EAM",
    headline:
      "Enterprise asset management for industrial plants that need maintenance control, field visibility, and tenant-safe operations.",
    description:
      "Procitec EAM helps maintenance and operations teams manage assets, work orders, preventive activity, inspections, and access control through one structured industrial platform.",
    primaryCta: {
      label: "Open EAM",
      href: "https://eam.procitec.io/",
    },
    secondaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    highlights: [
      {
        title: "Reliability-focused workflows",
        description:
          "Track assets, maintenance work, inspections, and downtime from one operational view.",
        icon: "manufacturing",
      },
      {
        title: "Tenant-safe by design",
        description:
          "Separate tenant workspaces, role-aware access, and controlled platform surfaces reduce cross-tenant risk.",
        icon: "shield_lock",
      },
      {
        title: "Usable in plant and field contexts",
        description:
          "Give teams a structured entry point for daily maintenance activity without exposing the full application manual on the public site.",
        icon: "phone_iphone",
      },
    ],
  },
  architecture: {
    eyebrow: "Platform Architecture",
    title:
      "Platform architecture that keeps buyer clarity, administrative control, and daily operations properly separated.",
    description:
      "Procitec EAM combines a central product entry with tenant-specific workspaces so industrial teams can scale access without losing control, auditability, or operational clarity.",
    items: [
      {
        title: "Centralized product entry",
        description:
          "Procitec.io explains the platform, while the live EAM application opens from one clear base-host entry point.",
        icon: "desktop_windows",
      },
      {
        title: "Tenant subdomains",
        description:
          "Each tenant runs within its own application space so sites and business units can operate with clear separation.",
        icon: "factory",
      },
      {
        title: "Controlled roles and access",
        description:
          "JWT-backed authentication and RBAC help align permissions with operational responsibilities.",
        icon: "security",
      },
      {
        title: "Portal administration",
        description:
          "Platform governance stays separate from daily maintenance work so oversight does not crowd the operational workspace.",
        icon: "admin_panel_settings",
      },
      {
        title: "Audit-oriented isolation",
        description:
          "Tenant-safe boundaries, role visibility, and structured access flows support reviews, accountability, and buyer confidence.",
        icon: "shield_lock",
      },
    ],
  },
  modules: {
    eyebrow: "Core Modules",
    title: "Operational coverage that buyers can scan quickly and evaluate with confidence.",
    description:
      "The EAM platform is organized around the day-to-day objects and workflows maintenance teams already manage, not around generic software language.",
    items: [
      {
        title: "Assets",
        description:
          "Maintain structured asset records, status context, and ownership details in one place.",
        icon: "inventory_2",
      },
      {
        title: "Work Orders",
        description:
          "Plan, assign, and track maintenance activity with clearer execution visibility.",
        icon: "assignment",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Set recurring plans and scheduled work so preventive activity does not depend on memory or spreadsheets.",
        icon: "event_repeat",
      },
      {
        title: "Inspections",
        description:
          "Capture routine inspections and standard checks as part of the operational workflow.",
        icon: "checklist",
      },
      {
        title: "Downtime Events",
        description:
          "Record interruptions, review patterns, and connect downtime visibility to asset follow-up.",
        icon: "history",
      },
      {
        title: "Spare Parts",
        description:
          "Support maintenance readiness with clearer spare-part tracking and use context.",
        icon: "warehouse",
      },
      {
        title: "Audit Visibility",
        description:
          "Keep role-aware history and structured records available for reviews and accountability.",
        icon: "shield_lock",
      },
      {
        title: "Analytics Baselines",
        description:
          "Review maintenance and asset signals through baseline reporting that supports better decisions.",
        icon: "analytics",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "A simple flow from platform setup to operational review.",
    description:
      "The public product page should make the system understandable quickly: how access is provisioned, how work is run, and how visibility is reviewed.",
    steps: [
      {
        title: "Provision",
        description:
          "Set up the tenant workspace, base structure, and role access so teams start from a controlled operating context.",
        icon: "admin_panel_settings",
      },
      {
        title: "Operate",
        description:
          "Manage assets, work orders, preventive plans, inspections, and daily maintenance activity inside the tenant workspace.",
        icon: "work",
      },
      {
        title: "Review",
        description:
          "Use reporting, audit visibility, and operational history to monitor performance and support follow-up decisions.",
        icon: "analytics",
      },
    ],
  },
  gettingStarted: {
    eyebrow: "Using Procitec EAM",
    title: "A concise view of how teams enter the system, work daily, and stay productive in the field.",
    description:
      "This section gives buyers a practical sense of daily usage without turning the public page into a full training guide.",
    items: [
      {
        title: "Getting Started",
        description:
          "Users enter through the EAM login, land in their tenant workspace, and work inside the right site and operational context.",
        icon: "login",
        points: [
          "Clear application entry from the public product page",
          "Tenant-specific workspace after sign-in",
          "Site-aware structure for faster orientation",
        ],
      },
      {
        title: "Daily Operations",
        description:
          "Teams move through assets, work orders, preventive work, and inspections with one connected operational model.",
        icon: "manufacturing",
        points: [
          "Asset records and maintenance history stay connected",
          "Planned and routine work is easier to review",
          "Inspection and downtime activity remain visible",
        ],
      },
      {
        title: "Field Access",
        description:
          "Procitec EAM is designed to support practical mobile and PWA-based access so work does not stop at the desk.",
        icon: "phone_iphone",
        points: [
          "Mobile-ready application access",
          "PWA install path for repeat daily use",
          "Useful for technicians and site users working in motion",
        ],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions buyers ask before opening the application or booking a demo.",
    description:
      "Short answers improve scan speed for human readers and make the product easier for search engines and AI systems to interpret accurately.",
    items: [
      {
        question: "What is the difference between the main domain and a tenant subdomain?",
        answer:
          "Procitec.io is the public product platform. Tenant subdomains are the application workspaces where authorized teams use Procitec EAM inside their own isolated environment.",
      },
      {
        question: "Which modules are available in Procitec EAM?",
        answer:
          "The current public scope covers assets, work orders, preventive maintenance plans, inspections, downtime events, spare parts, audit visibility, and baseline analytics.",
      },
      {
        question: "Does Procitec EAM support mobile use?",
        answer:
          "Yes. The product is intended to support mobile access and a practical PWA-style entry for field and plant users who need quick operational visibility.",
      },
      {
        question: "How does Procitec EAM handle multi-tenant and role-aware access?",
        answer:
          "The platform uses tenant-specific workspaces together with controlled authentication and RBAC so access can be aligned with responsibility and tenant boundaries.",
      },
      {
        question: "Can Procitec help with onboarding and product evaluation?",
        answer:
          "Yes. Buyers can book a demo, talk to an expert, or open the application entry point depending on whether they are evaluating, onboarding, or returning to work.",
      },
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "Review the product with Procitec, discuss your rollout, or go directly into the application.",
    description:
      "Choose the action that fits your stage: product review, implementation discussion, or direct application access.",
    trustLine:
      "Built for industrial teams that need reliability, clear access boundaries, and practical maintenance visibility.",
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Talk to Expert",
      href: "/support",
    },
    tertiaryCta: {
      label: "Open EAM",
      href: "https://eam.procitec.io/",
    },
  },
};
