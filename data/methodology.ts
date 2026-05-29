export interface Stage {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export const methodologyStages: Stage[] = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We understand your business objectives, technical landscape, and regulatory requirements. Risks, gaps, and opportunities are identified before any solution is defined.",
    details: [
      "Technical Debt & Legacy System Review",
      "Regulatory GRC Baseline Analysis",
      "Risk Profiling & Asset Mapping"
    ]
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "We design secure, scalable architectures aligned with your goals. Clear roadmaps, timelines, and governance models are established upfront.",
    details: [
      "Landing Zone & Sandbox Blueprints",
      "Terraform IaC Plan Formulations",
      "Access & Active Directory Layout Design"
    ]
  },
  {
    step: "03",
    title: "Implementation",
    description: "Solutions are implemented using best practices and security-first principles. Our teams work collaboratively to ensure minimal disruption and controlled delivery.",
    details: [
      "Zero-Trust Access Boundary Setup",
      "Integrated CI/CD Pipeline Automation",
      "Data Encryption Array Provisioning"
    ]
  },
  {
    step: "04",
    title: "Validation & Handover",
    description: "Systems are tested, validated, and reviewed against agreed outcomes. Knowledge transfer and documentation ensure smooth operational handover.",
    details: [
      "Penetration & Secret Leak Auditing",
      "Compliance Regulatory Alignment Review",
      "Administrative Training & Playbooks Transfer"
    ]
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "We provide continuous monitoring, optimisation, and support. Long-term reliability, performance, and security remain our priority.",
    details: [
      "24/7 SIEM Logs Incident Detection",
      "Cost Allocation Tuning & Alerts Setup",
      "Security Patching & Configuration Management"
    ]
  }
];
