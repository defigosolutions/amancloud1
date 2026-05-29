export interface Insight {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  imageUrl: string;
  author: string;
  content?: string;
}

export const insights: Insight[] = [
  {
    id: "in1",
    slug: "zero-trust-architecture-for-modern-fintech",
    title: "Zero Trust Architecture: The New Baseline for Modern Fintech Platforms",
    category: "Security",
    date: "14 April 2026",
    readTime: "6 min read",
    summary: "As financial platforms decentralize, traditional network parameters are obsolete. We analyze how Zero-Trust secures distributed transactions through identity-first barriers.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    author: "Imran Shah"
  },
  {
    id: "in2",
    slug: "shifting-left-automated-security-in-cicd",
    title: "Shifting Left: Automating Security Checks Inside CI/CD Development Pipelines",
    category: "DevSecOps",
    date: "28 March 2026",
    readTime: "5 min read",
    summary: "Relying on manual auditing before deployment blocks innovation. Learn how injecting automated SAST/DAST testing into developers' pipelines delivers safer products, faster.",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800",
    author: "Imran Shah"
  },
  {
    id: "in3",
    slug: "sovereign-cloud-compliance-in-uae-and-uk",
    title: "Navigating Sovereign Cloud Compliance Controls Across UAE & UK Regulations",
    category: "Compliance",
    date: "05 February 2026",
    readTime: "7 min read",
    summary: "Government agencies and healthcare systems require strict geographical data residency controls. We clarify how to establish audited landing zones that satisfy local laws.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    author: "Imran Shah"
  }
];
