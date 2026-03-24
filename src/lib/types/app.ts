export type ProductStatus = "Live" | "Coming Soon";

export type ProductCapability = {
  title: string;
  description: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export interface ProductContent {
  slug: string;
  name: string;
  eyebrow: string;
  status: ProductStatus;
  summary: string;
  description: string;
  keyBenefit: string;
  audience: string[];
  benefits: string[];
  capabilities: ProductCapability[];
  industries: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  seo: {
    title: string;
    description: string;
  };
  faq: ProductFaq[];
}
