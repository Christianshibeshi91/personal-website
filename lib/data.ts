/**
 * Central content model for the site, sourced from Christian's resume.
 * Every section reads from this file, so copy updates never require
 * touching component code.
 */

import {
  AppWindow,
  Workflow,
  BarChart3,
  Bot,
  Database,
  Globe,
  Share2,
  Code2,
  Puzzle,
  Zap,
  Network,
  Braces,
  Server,
  GitBranch,
  ShieldCheck,
  Landmark,
  Lock,
  Eye,
  Wrench,
  Boxes,
  Cpu,
  FileCode2,
  Atom,
  Layers,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const person = {
  name: "Christian Shibeshi",
  headline:
    "Power Platform Subject Matter Expert | Copilot Studio Agentic Developer | Low-Code Solutions Consultant",
  location: "Seattle, WA",
  email: "christianshibeshitech@outlook.com",
  linkedin: "https://www.linkedin.com/in/christianshibeshi",
  github: "https://github.com/Christianshibeshi91",
  calendly: "https://calendly.com/shibeshichristian",
  resumeUrl: "/Christian-Shibeshi-Resume.pdf",
  siteUrl: "https://christianshibeshi.com",
};

export const rotatingTitles = [
  "Microsoft Power Platform SME",
  "Copilot Studio Agentic Developer",
  "Power Apps Solution Architect",
  "Power Automate Specialist",
  "AI Agent Developer",
  "SharePoint Solutions Developer",
  "Enterprise Low-Code Consultant",
  "OutSystems Developer",
];

export const heroStats = [
  { value: "9+", label: "Years architecting Microsoft solutions" },
  { value: "60%", label: "Deployment effort cut with Power Platform Pipelines" },
  { value: "500+", label: "Internal users on apps I've delivered" },
];

export const aboutParagraphs = [
  "My work centers on the enterprise systems that organizations actually run their business on. That means Power Apps that replace brittle spreadsheets, Power Automate flows that eliminate manual processing, and Copilot Studio agents that give staff instant access to institutional knowledge. Good governance is built into all of it from the start, not added later.",
  "I have spent nine years delivering in telecom, aerospace, credit unions, and banking at companies including AT&T, Boeing, WSECU, and City National Bank. In each engagement I have taken full ownership of the solution: from early discovery with business stakeholders through architecture, build, ALM pipelines, production support, and knowledge transfer to the teams that inherit the platform. The work spans GRC compliance tooling, loan approval workflows, and safety incident reporting in regulated environments. I bring the same engineering discipline to low-code that I would to any enterprise software project: Git source control, managed solutions, CI/CD in Azure DevOps, and proper DLP policy are standard practice.",
  "My current focus is Copilot Studio agentic development. I design and deploy production agents grounded in real organizational knowledge, connected to business systems through Power Automate, Dataverse, and custom actions, with tenant-level governance and visibility for leadership. This is where the Microsoft platform is heading, and it is where I am doing my most interesting work.",
];

export type ExpertiseItem = { name: string; icon: LucideIcon; group: string };

export const expertise: ExpertiseItem[] = [
  { name: "Power Apps", icon: AppWindow, group: "Power Platform" },
  { name: "Power Automate", icon: Workflow, group: "Power Platform" },
  { name: "Power BI (DAX, Power Query)", icon: BarChart3, group: "Power Platform" },
  { name: "Copilot Studio", icon: Bot, group: "Power Platform" },
  { name: "Dataverse", icon: Database, group: "Power Platform" },
  { name: "Power Pages", icon: Globe, group: "Power Platform" },
  { name: "Power Fx", icon: Braces, group: "Power Platform" },
  { name: "SharePoint Online", icon: Share2, group: "Microsoft 365" },
  { name: "SPFx", icon: Puzzle, group: "Microsoft 365" },
  { name: "Dynamics 365", icon: Building2, group: "Microsoft 365" },
  { name: "Azure Logic Apps", icon: Zap, group: "Azure" },
  { name: "Azure Functions", icon: Cpu, group: "Azure" },
  { name: "Azure API Management", icon: Network, group: "Azure" },
  { name: "REST APIs & Custom Connectors", icon: Server, group: "Integration" },
  { name: "SQL Server", icon: Database, group: "Data" },
  { name: "Power Platform Pipelines", icon: GitBranch, group: "ALM & Governance" },
  { name: "Platform Administration", icon: Wrench, group: "ALM & Governance" },
  { name: "Center of Excellence", icon: Landmark, group: "ALM & Governance" },
  { name: "DLP Policies", icon: Lock, group: "ALM & Governance" },
  { name: "Microsoft Purview", icon: Eye, group: "ALM & Governance" },
  { name: "Azure DevOps", icon: Boxes, group: "ALM & Governance" },
  { name: "CI/CD", icon: Workflow, group: "ALM & Governance" },
  { name: "Git", icon: GitBranch, group: "ALM & Governance" },
  { name: "Security & Compliance", icon: ShieldCheck, group: "ALM & Governance" },
  { name: "React", icon: Atom, group: "Pro-Code" },
  { name: "TypeScript", icon: FileCode2, group: "Pro-Code" },
  { name: "JavaScript", icon: Code2, group: "Pro-Code" },
  { name: "OutSystems ODC", icon: Layers, group: "Complementary" },
];

export const copilotTopics = [
  { title: "Agentic development", body: "Enterprise-grade Copilot Studio agents and agentic workflows with custom actions, triggers, and orchestrated multi-step reasoning, deployed to production, not demos." },
  { title: "Knowledge & RAG", body: "Grounding agents in SharePoint, Dataverse, websites, and files with retrieval-augmented generation and enterprise search for cited, accurate answers." },
  { title: "Custom actions", body: "Power Automate connectors and custom APIs that let agents act, automating high-volume business processes and conversational self-service for internal teams." },
  { title: "Prompt engineering", body: "System instructions, topic design, and generative answers tuned for accuracy, tone, and safe fallbacks." },
  { title: "Adaptive Cards & channels", body: "Rich conversational UI delivered through Microsoft Teams, web chat, and Power Pages." },
  { title: "Human approval", body: "Approval checkpoints inside agent workflows so people stay in control of consequential actions." },
  { title: "Responsible AI", body: "Content moderation, authentication, data boundaries, and transparent behavior aligned to Microsoft's Responsible AI standard." },
  { title: "Security & governance", body: "Entra ID auth, tenant-level DLP through Admin Center and Purview, environment isolation, and auditability for every agent in production." },
];

export const architecturePillars = [
  { title: "Environment strategy", body: "Dedicated Dev, Test, and Prod environments with clear ownership, separation of duties, and role-based security, the pattern I've architected at WSECU and enterprise clients." },
  { title: "ALM & managed solutions", body: "Managed solutions, solution layering, and Power Platform Pipelines, automation that cut manual deployment effort by ~60% at my current client." },
  { title: "Developer workflow", body: "Git source control with pull-request reviews, Azure DevOps boards, and CI/CD that treats low-code artifacts like real code, for both citizen and pro-code developers." },
  { title: "Center of Excellence", body: "CoE Starter Kit implementation for tenant-wide inventory, dashboards, and automated housekeeping flows across the tenant." },
  { title: "Security & DLP", body: "Tenant-level Data Loss Prevention policies authored through the Power Platform Admin Center: connector classification and restricted data flows across all environments." },
  { title: "Compliance & Purview", body: "Microsoft Purview governance and audit-ready delivery, proven in federal banking compliance (GRC) and aerospace environments." },
];

export const projects = [
  {
    title: "Enterprise Copilot Studio Agents",
    tag: "Copilot Studio",
    challenge: "High-volume internal processes and questions consumed staff time across an enterprise tenant, with knowledge scattered across systems.",
    architecture: "Multiple production Copilot Studio agents with curated knowledge sources, custom actions, and Power Automate connectors; governed by tenant-level DLP and CoE oversight, reporting into the C-suite.",
    tech: ["Copilot Studio", "Power Automate", "Custom Actions", "DLP", "Purview"],
    outcome: "Conversational self-service for internal stakeholders and automated high-volume business processes, positioning AI as a strategic capability for the enterprise.",
  },
  {
    title: "GRC Compliance Platform (ACT)",
    tag: "Banking",
    challenge: "City National Bank's Government, Risk & Compliance operations depended on a critical enterprise application requiring full ownership, optimization, and federal regulatory alignment.",
    architecture: "Power Automate and Dataverse workflow optimization, automated compliance checks and approval routing, canvas app interface redesign (ServiceWriter), and integrated Power BI dashboards, managed through Azure DevOps CI/CD.",
    tech: ["Power Apps", "Power Automate", "Dataverse", "Power BI", "Azure DevOps"],
    outcome: "Faster regulatory reporting, reduced review cycles, quicker response to regulation changes, and improved user adoption with fewer support requests.",
  },
  {
    title: "Loan Approval Automation",
    tag: "Credit Union",
    challenge: "WSECU's loan approvals moved through slow, manual multi-stage reviews with weak audit trails.",
    architecture: "Power Automate and Azure Logic Apps orchestration with multi-stage conditional routing based on risk assessment and member history, backed by secure Dataverse environments.",
    tech: ["Power Automate", "Azure Logic Apps", "Dataverse", "Dynamics 365"],
    outcome: "Approval cycle time reduced 30% with improved compliance audit-trail accuracy.",
  },
  {
    title: "Member Services App Suite",
    tag: "Power Apps",
    challenge: "Manual member-service processes across the credit union slowed staff and frustrated members.",
    architecture: "Canvas and model-driven apps integrated with SharePoint Online, Dynamics 365, and Dataverse, plus custom connectors to third-party financial APIs for real-time credit scoring and fraud detection.",
    tech: ["Power Apps", "Dataverse", "Custom Connectors", "SharePoint"],
    outcome: "Manual processing time cut over 40% for 500+ internal users; verification time down 50% via API integration.",
  },
  {
    title: "Safety Incident Reporting",
    tag: "Aerospace",
    challenge: "Boeing field teams needed to report safety incidents from anywhere, with routing that matched severity.",
    architecture: "Mobile-friendly canvas apps with photo uploads and GPS tagging, automated severity-based routing to safety managers through Power Automate.",
    tech: ["Power Apps", "Power Automate", "SharePoint"],
    outcome: "Faster incident capture and response, with a complete audit trail from field to safety management.",
  },
  {
    title: "Executive Power BI Dashboards",
    tag: "Analytics",
    challenge: "Senior leadership at multiple organizations lacked a real-time, trusted view of operations.",
    architecture: "Power BI semantic models built with DAX and Power Query, aggregating SQL Server, Dataverse, SharePoint, and Dynamics 365 data with scheduled refresh.",
    tech: ["Power BI", "DAX", "Power Query", "SQL Server"],
    outcome: "Real-time insight into member services, loan portfolios, and branch performance, replacing stale, hand-built reporting.",
  },
  {
    title: "Tenant Governance & CoE Rollout",
    tag: "Governance",
    challenge: "An enterprise tenant with growing citizen development had no inventory, ownership visibility, or connector policy.",
    architecture: "CoE Starter Kit with governance dashboards and automated housekeeping flows, and tenant-level DLP authored through Admin Center and Microsoft Purview.",
    tech: ["CoE Starter Kit", "DLP", "Purview", "Power BI"],
    outcome: "Tenant-wide visibility and governed growth, admins gained oversight of every Power Platform asset in the organization.",
  },
  {
    title: "Contractor & Partner Portals",
    tag: "Power Pages",
    challenge: "External contractors and partners at Boeing needed secure access to processes without exposure to internal systems.",
    architecture: "Power Pages portals with role-based access controls, Dataverse case data, and compliance with enterprise data security policies.",
    tech: ["Power Pages", "Dataverse", "Role-Based Security"],
    outcome: "Secure external collaboration that met aerospace-grade security requirements.",
  },
];

export const timeline = [
  {
    company: "Independent Consulting",
    role: "Power Platform & Copilot Studio Consultant",
    period: "Jan 2026 – Present",
    summary: "Designing enterprise Copilot Studio agents and agentic workflows for a confidential enterprise client; established tenant-wide ALM for Power Platform and OutSystems ODC, Power Platform Pipelines (~60% less manual deployment effort), CoE Starter Kit, and tenant-level DLP via Admin Center and Purview, with CI/CD for C-suite-visibility projects.",
  },
  {
    company: "City National Bank (an RBC company)",
    role: "Power Platform Consultant",
    period: "Sep 2025 – Jan 2026",
    summary: "Owned the ACT application supporting Government, Risk & Compliance operations under federal banking standards, optimizing Power Automate/Dataverse workflows, automating compliance checks, redesigning the ServiceWriter canvas app, and managing CI/CD through Azure DevOps.",
  },
  {
    company: "WSECU",
    role: "Senior Power Platform Developer",
    period: "Jan 2023 – Jul 2025",
    summary: "Architected canvas and model-driven apps for 500+ users (40%+ less manual processing), automated loan approvals with Power Automate and Logic Apps (30% faster cycles), built executive Power BI dashboards, integrated third-party financial APIs via custom connectors, and led training that cut support tickets 40%.",
  },
  {
    company: "The Boeing Company",
    role: "Power Platform Developer",
    period: "Jan 2019 – Dec 2022",
    summary: "Delivered 20+ SharePoint Online solutions; built engineering change-request apps, mobile safety incident reporting with GPS and photo capture, automated inventory workflows, executive Power BI dashboards, secure Power Pages contractor portals, and Azure API Management integrations to ERP systems.",
  },
  {
    company: "AT&T",
    role: "SharePoint & Power Apps Developer",
    period: "Sep 2016 – Dec 2018",
    summary: "Automated employee onboarding with SharePoint and Power Automate, built IT service desk apps integrated with ServiceNow via Azure API Management, developed SPFx web parts in React/TypeScript, and led SharePoint on-premises-to-Online migrations with ShareGate.",
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "Addis Ababa University",
  year: "2016",
};

export const certifications = [
  {
    code: "PL-400",
    name: "Microsoft Certified: Power Platform Developer Associate",
    status: "Certified",
  },
  {
    code: "PL-200",
    name: "Microsoft Certified: Power Platform Functional Consultant Associate",
    status: "Certified",
  },
  {
    code: "AI-103",
    name: "Microsoft Certified: Azure AI Engineer Associate",
    status: "In progress",
  },
];

export const skillBars = [
  { name: "Power Apps", level: 96 },
  { name: "Power Automate", level: 95 },
  { name: "SharePoint Online", level: 93 },
  { name: "Copilot Studio", level: 90 },
  { name: "Dataverse", level: 88 },
  { name: "ALM & DevOps", level: 87 },
  { name: "Power BI", level: 84 },
  { name: "OutSystems ODC", level: 78 },
];

export const radarAxes = [
  { name: "Apps", level: 0.96 },
  { name: "Automation", level: 0.95 },
  { name: "AI Agents", level: 0.9 },
  { name: "Data", level: 0.86 },
  { name: "Governance", level: 0.9 },
  { name: "Pro-Code", level: 0.8 },
];

export const whyHireMe = [
  { title: "Enterprise mindset", body: "Nine years inside AT&T, Boeing, and banks, I design for the security model, support model, and scale a real organization demands." },
  { title: "Scalable architecture", body: "Environment strategy, managed solutions, and clean data models that survive growth and team turnover." },
  { title: "Governance built in", body: "Tenant-level DLP, CoE practices, and Purview-backed auditability are part of the design, not a cleanup project later." },
  { title: "AI-first thinking", body: "I look for where an agent, not another form, is the right answer, and ship it responsibly to production." },
  { title: "Business value focus", body: "I measure success in cycle times cut, deployment effort removed, and audit findings avoided, not features shipped." },
  { title: "Solution ownership", body: "From stakeholder discovery through production support, I own outcomes end to end, often as the sole platform developer." },
  { title: "Strong communication", body: "Comfortable translating between C-suite stakeholders, compliance officers, business users, and engineers." },
  { title: "Mentoring & leadership", body: "Training workshops and user guides for 100+ end users that cut support volume 40%, I level up the teams around me." },
];

export const clientLogos = [
  { name: "AT&T", abbr: "AT&T", color: "#00C8FF" },
  { name: "The Boeing Company", abbr: "Boeing", color: "#6BA3E8" },
  { name: "WSECU", abbr: "WSECU", color: "#2ECC8A" },
  { name: "City National Bank", abbr: "City National Bank", color: "#FF3A4A" },
  { name: "Microsoft", abbr: "Microsoft", color: "#40C4FF" },
];

export const testimonials = [
  {
    quote: "Christian is exactly the kind of Power Platform architect you want on regulated workloads. His governance-first approach, managed solutions, proper ALM, DLP from day one, saved us months of technical debt cleanup that we'd seen derail other implementations.",
    name: "Engineering Director",
    company: "Financial Services · Seattle, WA",
    initial: "ED",
  },
  {
    quote: "The Copilot Studio agents Christian built gave our internal teams instant access to knowledge that used to take hours to track down. He handled everything from architecture through production with no hand-holding required, and the governance story held up to compliance review.",
    name: "VP of Digital Transformation",
    company: "Enterprise Consulting Client",
    initial: "VP",
  },
  {
    quote: "What sets Christian apart is that he treats low-code with real engineering discipline, Git, CI/CD pipelines, environment strategy from day one. The loan automation he built cut our approval cycles 30% and is running perfectly two years later without a single production incident.",
    name: "Technology Solutions Manager",
    company: "Credit Union · Pacific Northwest",
    initial: "TM",
  },
  {
    quote: "Christian's ability to translate complex platform governance concepts to C-suite stakeholders is rare. He drove our CoE adoption, built the dashboards leadership actually uses, and trained our citizen developers, all while delivering his primary workstream on schedule.",
    name: "Director of Enterprise Architecture",
    company: "Aerospace & Defense",
    initial: "DA",
  },
];

export const seoKeywords = [
  "Power Platform", "Power Apps", "Power Automate", "Power BI", "Copilot Studio",
  "Agentic Development", "AI Agents", "Power Fx", "Dataverse", "Dynamics 365",
  "SharePoint", "SPFx", "Azure", "Azure DevOps", "CI/CD", "Power Platform Pipelines",
  "Center of Excellence", "Power Platform Governance", "Microsoft Purview",
  "Power Platform Administration", "Low-Code Development", "Solution Architecture",
  "Technical Lead", "Principal Consultant", "OutSystems ODC", "React", "JavaScript",
  "TypeScript", "REST APIs", "SQL Server", "Enterprise Automation", "Microsoft 365",
];
