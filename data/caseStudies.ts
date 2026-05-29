export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  client: string;
  metrics: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    slug: "managed-cloud-security-services-for-enterprise-government-clients",
    title: "Managed Cloud & Security Services for Government Entities",
    category: "Government",
    date: "02 February 2026",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    client: "Middle Eastern Federal Authority",
    metrics: ["100% GRC Compliance", "50% Drop in Threat Response Times", "Zero Unplanned Disruptions"],
    challenge: "The client needed a resilient, secure government cloud architecture compliant with national cyber governance guidelines while supporting hundreds of internal staff members.",
    solution: "Implemented an end-to-end managed Azure government platform incorporating strict Zero-Trust boundaries, SIEM automated isolation rules, and continuous threat monitoring.",
    results: [
      "Achieved absolute compliance with UAE national cybersecurity audits.",
      "Consolidated multi-tenant directories under a single threat management cockpit.",
      "Established fully audited access control workflows with continuous audit tracking."
    ]
  },
  {
    id: "cs2",
    slug: "microsoft-365-security-dlp-compliance-modernization",
    title: "Microsoft 365 Security, DLP & Compliance Modernization",
    category: "Enterprise",
    date: "02 February 2026",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    client: "Multi-National Professional Services Firm",
    metrics: ["Zero Data Leak Events", "98% Reduction in SPAM/Phishing", "Automated Retention Controls"],
    challenge: "Sensitive client communication was vulnerable due to outdated data loss prevention guidelines and loose access parameters across shared OneDrive/SharePoint vaults.",
    solution: "Designed and deployed a modern Microsoft Purview compliance stack. Configured strict classification tags, automated data retention rules, and advanced Conditional Access policies.",
    results: [
      "Secured proprietary consulting reports with dynamic watermarking and auto-encryption.",
      "Blocked critical data exfiltration vectors on corporate mobile endpoints.",
      "Empowered corporate risk compliance officers with automated audit reporting dashboards."
    ]
  },
  {
    id: "cs3",
    slug: "multi-cloud-security-grc-enablement-for-enterprise-group",
    title: "Multi-Cloud Infrastructure & Security for Enterprise Client",
    category: "Infrastructure",
    date: "02 February 2026",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    client: "Enterprise Conglomerate",
    metrics: ["Multi-Cloud Uniform Policies", "30% Reduction in Operations Overhead", "Real-Time Drift Prevention"],
    challenge: "Managing separate environments in both Azure and AWS led to security drift, configuration errors, and weak visibility into compliance audits.",
    solution: "Deployed a centralized Cloud Security Posture Management (CSPM) framework with automated Terraform infrastructure validation and dynamic security guardrails.",
    results: [
      "Standardized corporate security baselines across AWS and Azure cloud environments.",
      "Eliminated configuration drift with automated infrastructure compliance scanners.",
      "Reduced infrastructure security auditing cycles from months to hours."
    ]
  },
  {
    id: "cs4",
    slug: "zero-trust-microsoft-security-stack-implementation-for-bfsi-organization",
    title: "Zero Trust Implementation for BFSI Organisation (UAE / KSA)",
    category: "Fintech",
    date: "30 January 2026",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    client: "Banking & Financial Services Institution",
    metrics: ["Zero-Trust Validated", "100% MFA Enforcement", "Auditable DFSA Compliance"],
    challenge: "The client required a rigorous compliance transformation under DFSA requirements to protect highly critical customer payment databases from internal and external threat vectors.",
    solution: "Architected a Zero-Trust environment utilizing Microsoft Security Suite, including Phishing-resistant MFA, Entra ID PIM (Privileged Identity Management), and Micro-segmentation.",
    results: [
      "Secured privileged database credentials with temporary access elevations.",
      "Isolated credit verification workloads inside secure, sandboxed network zones.",
      "Passed DFSA cybersecurity validation with zero critical findings."
    ]
  },
  {
    id: "cs5",
    slug: "enterprise-cloud-cybersecurity-transformation-for-a-government-entity-middle-east",
    title: "Enterprise Cloud & Cybersecurity Transformation for Government",
    category: "Government",
    date: "30 January 2026",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    client: "Municipal UAE Public Sector Client",
    metrics: ["Modern Sovereign Cloud", "10,000+ Identities Secured", "Seamless Digital Access"],
    challenge: "Legacy datacenter systems limited performance and created vulnerabilities. High-speed digital service deployment was blocked by manual risk reviews.",
    solution: "Coordinated a complete sovereign Azure environment setup with custom landing zones, secure network gateways, and automated CI/CD security controls.",
    results: [
      "Successfully decommissioned physical server arrays with zero application outage.",
      "Automated sovereign cloud compliance checks for newly launched apps.",
      "Secured digital customer logins with modern, compliant token protocols."
    ]
  },
  {
    id: "cs6",
    slug: "devsecops-transformation-for-a-technology-startup",
    title: "DevSecOps Transformation for Technology Startup",
    category: "DevSecOps",
    date: "10 September 2025",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    client: "SaaS Tech Startup",
    metrics: ["10x Faster Build Audits", "Zero Secrets Leaked in Git", "Daily Production Deployments"],
    challenge: "The software startup deployed features rapidly but lacked code threat scanning, resulting in security vulnerabilities finding their way into live production code.",
    solution: "Configured automated GitHub Actions pipelines with integrated SAST, DAST, and software composition analysis (SCA) dependency checkpoints.",
    results: [
      "Injected automated vulnerability reviews directly into software developer pull requests.",
      "Protected operational keys with secure dynamic vault credential rotation.",
      "Accelerated secure deployment schedules from bi-weekly to daily operations."
    ]
  },
  {
    id: "cs7",
    slug: "cybersecurity-reinforcement-for-a-healthcare-provider",
    title: "Cybersecurity Reinforcement for a Healthcare Provider",
    category: "Healthcare",
    date: "10 September 2025",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    client: "Premium Specialized Medical Center Network",
    metrics: ["HIPAA-grade Encryption", "100% Endpoint Visibility", "Zero Patient Record Gaps"],
    challenge: "The medical provider required strict compliance with HIPAA/DHA data governance guidelines to safeguard electronic health record databases from ransomware threat vectors.",
    solution: "Deployed a secure host protection cluster, enterprise-grade database encryption algorithms, and centralized data access auditing matrices.",
    results: [
      "Locked down patient record databases with asymmetric key access configurations.",
      "Secured clinical staff clinic tablets with modern MDM restriction profiles.",
      "Achieved full compliance with national DHA data governance standards."
    ]
  },
  {
    id: "cs8",
    slug: "cloud-migration-for-a-leading-financial-institution",
    title: "Cloud Migration for Financial Institution",
    category: "Fintech",
    date: "10 September 2025",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    client: "Leading Investment & Brokerage Firm",
    metrics: ["Zero Trading Interruptions", "40% Server Cost Reduction", "Sub-Millisecond Execution"],
    challenge: "Outdated physical server infrastructure limited trading platform performance during high market volume periods and carried high maintenance costs.",
    solution: "Engineered a secure, highly-available Azure infrastructure landing zone, migrating trading engines into auto-scaling Kubernetes resource pools.",
    results: [
      "Migrated real-time trading engines with absolute data integrity and zero trading down-time.",
      "Enabled dynamic resource auto-scaling to absorb rapid volume spikes seamlessly.",
      "Reduced legacy hardware maintenance and hosting budgets by 40% yearly."
    ]
  }
];
