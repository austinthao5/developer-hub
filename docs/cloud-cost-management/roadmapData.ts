export type Feature = {
  tag: string[];
  title: string;
  description: string;
  link?: string;
  backgroundColor: string;
};
interface Horizon {
  [key: string]: {
    description: string;
    feature: Feature[];
  };
}

export const CcmData: Horizon = {
  "Q1 CY'23": {
    description: "Q1 CY'23, Feb-Apr 2023",
    feature: [
      {
        tag: [],
        title: "Azure VM Recommendations",
        description: "Support for Azure VM optimisation (Rightsizing, Cleanup)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "On-Prem/Self-Managed Support",
        description: "Support to run CCM in an On-Premise customer environment",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Margin Obfuscation & Markups for MSPs",
        description:
          "Ability for MSPs to set markups at various levels of granularity (Accounts, Service etc.)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "CDN Support for AutoStopping",
        description:
          "Fine-tune cost anomaly detection with an ignore list, added support for comments, and integrations with popular ticketing systems (JIRA, ServiceNow).",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "ALB Support Perfromance Improvements ",
        description:
          "Significant reduction in resource requirements for ALB based AS Rules",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Budget Groups",
        description:
          "Hierarchial Organisation of budgets with roll ups & cascading effects",
        backgroundColor: "#b7d7a8",
      },
    ],
  },
  "Q2 CY'23": {
    description: "Q2 CY'23, May-Jul 2023",
    feature: [
      {
        tag: [],
        title: "Recommendation Workflows ",
        description:
          "Support for Ignore list, JIRA/ SNOW integration, Applied recommendations dashboard (Docs)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Perspective Preferences ",
        description:
          "Flexibility to tailor the cost data presented in your perspective. Ex. Include/ Exclude discounts, Tax etc (Docs)",
        backgroundColor: "#b4a7d7",
      },
      {
        tag: [],
        title: "Shared Costs support - Cost Categories ",
        description:
          "Share Costs across various cost buckets with various sharing strategies (Docs)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "K8s AutoStopping Improvements",
        description:
          "Support for State Sync, Fixed Schedules & Inline dependencies",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Cloud Asset Governance for AWS",
        description:
          "FinOps-as-code policies for AWS with Out of  the box recommendations (Docs)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Budgets - Capacity Planning ",
        description: "Support for yearly forecasts in Budgets",
        backgroundColor: "#b7d7a8",
      },
    ],
  },
  "Q3 CY'23": {
    description: "Q3 CY'23, Aug-Oct 2023",
    feature: [
      {
        tag: [],
        title: "Forecasting Enhancements ",
        description:
          "Fine-tuned custom forecasting alogorithms resulting in improved accuracy",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Anomaly Detection Improvements ",
        description:
          "Improved accuracy to avoid False positives, Support for Harness K8s Tag based anomaly detection",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "On-Prem/Self-Managed Airgapped Support - AWS",
        description:
          "Support to run CCM in an On-Premise customer environment in an Airgapped setup",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Sample AutoStopping Rule Creation",
        description:
          "Automated creation of sample applications via Terraform that can be used to trial AutoStopping",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "HPA Support for K8s AutoStopping ",
        description:
          "Support to scale down workloads to a non-zero replica count to work with HPA",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "AIDA for Asset Governance ",
        description:
          "Craft policies using AI with natural language queries (Docs)",
        backgroundColor: "#b4a7d7",
      },
      {
        tag: [],
        title: "Cost Correlation for AWS Asset Governance",
        description: "Correlate cost impact of policy runs to identify savings",
        backgroundColor: "#b7d7a8",
      },
    ],
  },
  "Q4 CY'23": {
    description: "Q4 CY'23, Nov-Jan 2024",
    feature: [
      {
        tag: [],
        title: "Improved RBAC ",
        description:
          "Support for granular RBAC for Recommendations, Anomalies, Budgets & Asset Governance entities (Docs)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Label Performance Enhancements ",
        description:
          "3x improvements in query times for dashboards leveraging cloud labels & tags",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Terraform Provider for Autostopping Rules",
        description: "Programmatically manage and configure AutoStopping Rules",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Commitment Orchestrator for AWS",
        description:
          "Automated purchasing and management of commitments to maximize savings, compute coverage and utilization",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Cloud Asset Governance for Azure",
        description:
          "FinOps-as-code policies for AWS with Out of  the box recommendations (Docs)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Cost Correlation for Azure Asset Governance",
        description: "Correlate cost impact of policy runs to identify savings",
        backgroundColor: "#b7d7a8",
      },
    ],
  },
  "Q1 CY'24": {
    description: "Q1 CY'23, Feb-Apr 2024",
    feature: [
      {
        tag: [],
        title: "Cost Category Enhancements",
        description:
          "Performance improvements - 2x Query speeds, Support to leverage cost categories across all CCM features: Recommendations, Asset Governance, Budgets",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Cost Anomaly Workflows ",
        description:
          "Ignore list, support for comments, JIRA/ SNOW integration",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Universal Cost Adaptor for External Data Ingestion",
        description:
          "Unified way to ingest cost data from any external sources for a unified SaaS + Cloud spend management",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Cluster Orchestrator for EKS",
        description:
          "Workload-driven intelligent node autoscaling with distributed spot orchestration",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Commitment Orchestrator - User Approvals ",
        description:
          "Manual user approval of commitment purchases and exchanges for more granular control",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Multi-Policy Support",
        description:
          "Support to run multiple policies in a single rule to create a workflow of policies",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Cloud Asset Governance for GCP",
        description:
          "FinOps-as-code policies for GCP with out-of-the-box recommendations (Docs)",
        backgroundColor: "#b7d7a8",
      },
      {
        tag: [],
        title: "Cost Correlation for GCP Asset Governance",
        description: "Correlate cost impact of policy runs to identify savings",
        backgroundColor: "#b7d7a8",
      },
    ],
  },
  "Q2 CY'24": {
    description: "Q4 CY'24, May-Jul 2024",
    feature: [
      {
        tag: [],
        title: "Terraform Support for Perspectives ",
        description: "Programmatically manage and configure different views",
        backgroundColor: "#ffe598",
      },
      {
        tag: [],
        title: "Recommendation Preferences ",
        description:
          "Global preferences to select presets for fine tuning recommendations (Ex. Buffer, instance family etc.)",
        backgroundColor: "#ffe598",
      },
      {
        tag: [],
        title: "AutoStopping Bulk Rule Creation",
        description:
          "Creation of AutoStopping Rules in bulk based on tags and other resource filtering for faster adoption at scale",
        backgroundColor: "#ffe598",
      },
      {
        tag: [],
        title: "Smart Advisor for AutoStopping",
        description:
          "Categorization of short-lived non-production cloud accounts and clusters to track savings potential and progress made",
        backgroundColor: "#ffe598",
      },
      {
        tag: [],
        title: "Workload Bin-packing for EKS Cluster Orchestrator",
        description:
          "Efficient scheduling and placement of containers onto nodes for optimizing node count and utilization",
        backgroundColor: "#ffe598",
      },
      {
        tag: [],
        title: "FinOps Workflows ",
        description:
          "Automated workflow to adopt FinOps practices and CCM features at scale",
        backgroundColor: "#ffe598",
      },
    ],
  },
  "Q3 CY'24": {
    description: "Q3 CY'24, Aug-Oct 2024",
    feature: [
      {
        tag: [],
        title: "Cost Anomaly Preferences ",
        description:
          "Global preferences to select percentage deviation, minimum cost thresholds",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "AutoStopping Enforcement",
        description:
          "Compliance enforcement to ensure that all target resources have AutoStopping Rules created to manage them and deliver savings during idle windows",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "Commitment Orchestrator for Azure ",
        description:
          "Automated purchasing and management of commitments to maximize savings, compute coverage and utilization",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "Cluster Orchestrator for AKS ",
        description:
          "Workload-driven intelligent node autoscaling with distributed spot orchestration",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "Cloud Asset Governance - IaCM Integration ",
        description:
          "Shifting left FinOps-as-code guardrails to prevent leaks at the point of infrastructure provisioning",
        backgroundColor: "#a0c5e8",
      },
    ],
  },
  "Q4 CY'24": {
    description: "Q4 CY'24, Nov-Jan 2025",
    feature: [
      {
        tag: [],
        title: "Conversational FinOps",
        description:
          "Natural language prompts to query complex cloud cost analaytics and insights",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "Cluster Orchestrator for GKE ",
        description:
          "Workload-driven intelligent node autoscaling with distributed spot orchestration",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "Commitment Orchestrator for GCP ",
        description:
          "Automated purchasing and management of CUDs to maximize savings, compute coverage and utilization",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "Cloud Asset Governance - Security & Compliance ",
        description:
          "Support for CSPM and compliance policy packs (CIS, GDPR etc.)",
        backgroundColor: "#a0c5e8",
      },
      {
        tag: [],
        title: "Tag Nomalization",
        description:
          "Normalize tag variations effortlessly with AIDA's AI-driven recommendations",
        backgroundColor: "#a0c5e8",
      },
    ],
  },
};
