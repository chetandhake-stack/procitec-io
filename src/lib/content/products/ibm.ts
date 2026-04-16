export type IbmLink = {
  label: string;
  href: string;
};

export type IbmFeature = {
  title: string;
  description: string;
  icon: string;
};

export type IbmSignal = {
  label: string;
  value: number;
  note: string;
};

export type IbmStage = {
  title: string;
  description: string;
  icon: string;
};

export type IbmFaqItem = {
  question: string;
  answer: string;
};

export interface IbmPageContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: IbmLink;
    secondaryCta: IbmLink;
    tertiaryCta: IbmLink;
    highlights: IbmFeature[];
    dashboardTitle: string;
    dashboardDescription: string;
    dashboardSignals: IbmSignal[];
  };
  userBenefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: IbmFeature[];
    chartTitle: string;
    chartDescription: string;
    chartSignals: IbmSignal[];
  };
  digitization: {
    eyebrow: string;
    title: string;
    description: string;
    stages: IbmStage[];
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
    customerSignals: IbmSignal[];
    longTermItems: IbmFeature[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: IbmFaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    trustLine: string;
    primaryCta: IbmLink;
    secondaryCta: IbmLink;
    tertiaryCta: IbmLink;
  };
}

export const ibmPageContent: IbmPageContent = {
  seo: {
    title: "Installed Base Management Software for Industrial Equipment Providers | Procitec IBM",
    description:
      "Procitec IBM helps OEMs and service teams digitize installed equipment records, improve customer continuity, and build long-term installed-base intelligence.",
  },
  hero: {
    eyebrow: "Procitec IBM",
    headline:
      "Digitize the installed base so service teams, account teams, and customers work from the same equipment truth.",
    description:
      "Procitec IBM is planned for industrial equipment providers that need a cleaner view of installed assets, service follow-up, modernization opportunities, and customer history across sites and accounts.",
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "See User Benefits",
      href: "#user-benefits",
    },
    tertiaryCta: {
      label: "Explore Applications",
      href: "/applications",
    },
    highlights: [
      {
        title: "Installed-base visibility",
        description:
          "Track what is installed, where it is running, and how each account is configured.",
        icon: "inventory_2",
      },
      {
        title: "Service continuity",
        description:
          "Help support and field teams pick up the right context faster instead of restarting each customer conversation.",
        icon: "assignment",
      },
      {
        title: "Lifecycle intelligence",
        description:
          "Surface service needs, retrofit candidates, and long-term account opportunities with more confidence.",
        icon: "analytics",
      },
    ],
    dashboardTitle: "Installed Base View",
    dashboardDescription:
      "A lightweight visual of the value IBM gives users: cleaner records, stronger service follow-up, and better account continuity.",
    dashboardSignals: [
      {
        label: "Equipment clarity",
        value: 88,
        note: "Installed units, site context, and configuration records stay easier to review.",
      },
      {
        label: "Service readiness",
        value: 79,
        note: "Teams can orient faster before support, maintenance, or renewal conversations.",
      },
      {
        label: "Customer continuity",
        value: 84,
        note: "Less dependence on personal memory when accounts change hands or grow.",
      },
    ],
  },
  userBenefits: {
    eyebrow: "User Benefits",
    title: "Better tools for the teams who manage installed equipment, service follow-up, and customer continuity.",
    description:
      "IBM should make daily work clearer for the people responsible for customer assets after installation, not just create another reporting layer.",
    items: [
      {
        title: "Faster service orientation",
        description:
          "Support and field teams can understand the installed equipment picture faster before they respond or escalate.",
        icon: "assignment",
      },
      {
        title: "Less spreadsheet dependency",
        description:
          "Installed-base records move out of disconnected files and into one system teams can maintain together.",
        icon: "desktop_windows",
      },
      {
        title: "Stronger customer confidence",
        description:
          "Customers experience better continuity when teams already know the installed context and service history.",
        icon: "security",
      },
      {
        title: "Clearer upgrade planning",
        description:
          "Account and lifecycle teams gain better visibility into modernization, retrofit, and replacement opportunities.",
        icon: "work",
      },
    ],
    chartTitle: "Illustrative User Value Signals",
    chartDescription:
      "These graphics show the kind of user-facing improvement IBM is designed to support across the installed-base workflow.",
    chartSignals: [
      {
        label: "Response quality",
        value: 82,
        note: "Better context before customer-facing work begins.",
      },
      {
        label: "Cross-team alignment",
        value: 76,
        note: "Service, sales, and account teams work from a more shared record.",
      },
      {
        label: "Data continuity",
        value: 90,
        note: "Installed-base knowledge is less likely to disappear into local files.",
      },
    ],
  },
  digitization: {
    eyebrow: "Digitization Path",
    title: "Move from scattered installed records to a structured lifecycle system.",
    description:
      "IBM should help equipment providers digitize what they know today, connect service history over time, and build a stronger installed-base foundation for tomorrow.",
    stages: [
      {
        title: "Capture installed assets",
        description:
          "Bring customer equipment, locations, and configuration details into one structured register.",
        icon: "inventory_2",
      },
      {
        title: "Connect service history",
        description:
          "Tie support activity, field follow-up, and lifecycle context back to the installed asset record.",
        icon: "history",
      },
      {
        title: "Coordinate teams",
        description:
          "Give service, sales, and account owners one view of what is installed and what needs attention.",
        icon: "assignment",
      },
      {
        title: "Plan long-term growth",
        description:
          "Use the installed base as a foundation for retention, modernization, and customer expansion planning.",
        icon: "analytics",
      },
    ],
  },
  impact: {
    eyebrow: "Customer And Long-Term Impact",
    title: "Better installed-base management improves both daily service work and long-term customer value.",
    description:
      "The strongest IBM story is not just internal visibility. It is the combination of faster user workflows, stronger customer satisfaction, and a more durable lifecycle business model.",
    customerSignals: [
      {
        label: "Customer satisfaction",
        value: 86,
        note: "Conversations start with context instead of repeated information gathering.",
      },
      {
        label: "Service trust",
        value: 81,
        note: "Teams look more prepared because installed history is easier to review.",
      },
      {
        label: "Lifecycle continuity",
        value: 85,
        note: "Account transitions and follow-up stay more stable over time.",
      },
    ],
    longTermItems: [
      {
        title: "Higher retention potential",
        description:
          "Installed-base clarity helps providers maintain stronger relationships after the initial sale.",
        icon: "security",
      },
      {
        title: "More reliable modernization planning",
        description:
          "Teams can identify equipment populations that may need upgrades, retrofits, or replacement programs.",
        icon: "analytics",
      },
      {
        title: "Stronger service business foundation",
        description:
          "A structured installed-base system supports more scalable service delivery as customers and sites grow.",
        icon: "factory",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions about Procitec IBM.",
    description:
      "These answers help buyers understand the installed-base use case, the user benefits, and the longer-term customer value more quickly.",
    items: [
      {
        question: "What is Procitec IBM designed to manage?",
        answer:
          "Procitec IBM is intended to manage the installed base of industrial equipment across customers, sites, service relationships, and lifecycle follow-up in one structured system.",
      },
      {
        question: "Who benefits most from Procitec IBM?",
        answer:
          "OEM service teams, account owners, support leads, and customer-facing operations teams benefit when installed records, history, and follow-up are easier to access and maintain.",
      },
      {
        question: "How does IBM help with digitization?",
        answer:
          "IBM is intended to replace scattered spreadsheets and fragmented account notes with a cleaner digital record of installed equipment, customer context, and service history.",
      },
      {
        question: "How can IBM improve customer satisfaction?",
        answer:
          "Teams can respond with better context, reduce repeated information requests, and maintain stronger continuity across support, service, and lifecycle conversations.",
      },
      {
        question: "What is the long-term value of IBM?",
        answer:
          "Over time, IBM is intended to support stronger retention, modernization planning, service growth, and more durable installed-base intelligence across the business.",
      },
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "See how Procitec IBM can turn installed-base data into better service and stronger customer continuity.",
    description:
      "Procitec IBM is positioned for industrial equipment providers that want a more structured installed-base foundation before service complexity and customer expectations grow further.",
    trustLine:
      "Built for industrial teams that need practical digitization, controlled lifecycle visibility, and more confident customer-facing workflows.",
    primaryCta: {
      label: "Book Demo",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform",
    },
    tertiaryCta: {
      label: "View Applications",
      href: "/applications",
    },
  },
};
