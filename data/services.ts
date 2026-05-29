export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  iconName: string;
}

export const services: Service[] = [
  {
    id: "s1",
    slug: "cloud-consultation",
    title: "Cloud Consultation",
    shortDescription: "Secure, structured analysis and architecture design to align cloud capabilities with executive business goals.",
    fullDescription: "We provide comprehensive, corporate-grade cloud consulting. From assessing digital maturity to designing resilient hybrid structures, our cloud architects align platform services with your long-term business strategy.",
    features: [
      "Digital Cloud Readiness Audits",
      "Multi-Cloud & Hybrid Architecture Blueprints",
      "Financial Management & Cost Optimization Frameworks",
      "Executive Technical Advisory & Strategy Plans"
    ],
    iconName: "Compass"
  },
  {
    id: "s2",
    slug: "cloud-migration",
    title: "Cloud Migration",
    shortDescription: "Seamless, minimal-disruption migration of enterprise and legacy architectures to secure cloud environments.",
    fullDescription: "We securely migrate private, hybrid, or public cloud environments. Applying industry-standard frameworks and automated deployment scripts, we ensure zero operational disruption and maximum security.",
    features: [
      "Database Replatforming & Cloud Refactoring",
      "Secure NHS & Regulated Industry Transfers",
      "Legacy Virtual Machine Modernization",
      "Automated Large-Scale Migration Scripts"
    ],
    iconName: "CloudDownload"
  },
  {
    id: "s3",
    slug: "cybersecurity-architecture",
    title: "Cybersecurity Architecture",
    shortDescription: "Zero-Trust security architectures designed to secure identity, data, networks, and compliance.",
    fullDescription: "Security is built directly into the foundation of our infrastructure. We architect robust threat-prevention, zero-trust network boundaries, and continuous SIEM monitoring to protect regulated corporate data.",
    features: [
      "Zero-Trust Network Access Control",
      "Advanced SIEM & 24/7 Threat Management",
      "Zero-Day Threat Isolation & Network Sandboxing",
      "MFA & Conditional Access Optimization"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "s4",
    slug: "devsecops-enablement",
    title: "DevSecOps Enablement",
    shortDescription: "Integrating security automated checkpoints directly into your engineering CI/CD development pipelines.",
    fullDescription: "Our engineers integrate security at every stage of the lifecycle. We automate vulnerability scanning, dependency auditing, and compliance validation directly inside the CI/CD pipeline.",
    features: [
      "Automated CI/CD Vulnerability Scanning",
      "Infrastructure as Code (Terraform/ARM) Security Checks",
      "Continuous Compliance Testing & Validation",
      "Developer Security Guardrails & Gateways"
    ],
    iconName: "Activity"
  },
  {
    id: "s5",
    slug: "custom-application-development",
    title: "Custom Application Development",
    shortDescription: "Secure, highly scalable cloud-native applications tailored for complex modern operations.",
    fullDescription: "We design and build secure cloud-native software and applications. Utilizing microservices architectures, serverless backends, and strict code isolation principles, we support seamless corporate scaling.",
    features: [
      "Microservices & Serverless Architecture Designs",
      "Secure Corporate API Design & Protection",
      "High-Availability Scaling Configurations",
      "Multi-Tenant SaaS Foundation Development"
    ],
    iconName: "Laptop"
  },
  {
    id: "s6",
    slug: "consulting-outsourcing",
    title: "Consulting & Outsourcing",
    shortDescription: "Dedicated pods of elite cloud and cybersecurity engineers to accelerate critical projects.",
    fullDescription: "We provide specialized, high-performing dedicated engineering teams. Our elite cloud engineers, security consultants, and DevSecOps practitioners integrate into your team to accelerate digital programs.",
    features: [
      "Elite Cloud & Security Architect Allocations",
      "DevSecOps Implementation Specialists",
      "Compliance & GRC Engineering Teams",
      "24/7 Infrastructure Operations Support"
    ],
    iconName: "Users"
  },
  {
    id: "s7",
    slug: "fintech-solutions",
    title: "Fintech Solutions",
    shortDescription: "Scalable backend configurations, payment gateways, and core platforms built for fintech.",
    fullDescription: "Modern financial institutions require resilient infrastructure. We develop custom backend integrations, payment gateways, and highly reliable processing solutions built to handle millions of transactions safely.",
    features: [
      "High-Throughput Payment Backends",
      "Core Banking Integrations & API Middlewares",
      "Real-Time Audit Trail Logging Architectures",
      "Highly Available Ledger Integrations"
    ],
    iconName: "Coins"
  },
  {
    id: "s8",
    slug: "fintech-security",
    title: "Fintech Security",
    shortDescription: "Strict regulatory compliance and zero-trust safeguards safeguarding transactions.",
    fullDescription: "We protect highly sensitive transaction records. Our specialized frameworks implement rigorous data encryption, automated GRC validation, and strict PCI-DSS, DFSA, and local KSA/UAE compliance controls.",
    features: [
      "DFSA, PCI-DSS, & ADGM Security Controls",
      "Hardware Security Module (HSM) Cryptography Key Setup",
      "End-to-End Database Transaction Encryption",
      "Anti-Fraud Real-Time Threat Analysis"
    ],
    iconName: "Lock"
  }
];
