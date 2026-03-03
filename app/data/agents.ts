export type Agent = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  stats: { label: string; value: string }[];
  tags: string[];
  status: "live" | "beta" | "coming-soon";
  creator: "Eigen Team" | "EigenTribe";
};

export const agents: Agent[] = [
  {
    id: "research-sentinel",
    name: "Research Sentinel",
    tagline: "Deep research, delivered instantly.",
    description:
      "Scours the web, synthesizes sources, and returns structured intelligence on any topic — in seconds, not hours.",
    category: "Research",
    icon: "🔍",
    color: "#6366f1",
    stats: [
      { label: "Sources scanned", value: "50+" },
      { label: "Avg. response", value: "8s" },
    ],
    tags: ["Research", "Web", "Synthesis"],
    status: "live",
    creator: "Eigen Team",
  },
  {
    id: "code-architect",
    name: "Code Architect",
    tagline: "Ship faster. Break nothing.",
    description:
      "Reviews pull requests, catches subtle bugs, and suggests refactors — your senior engineer available 24/7.",
    category: "Engineering",
    icon: "⚙️",
    color: "#a855f7",
    stats: [
      { label: "Bugs caught", value: "10k+" },
      { label: "Languages", value: "30+" },
    ],
    tags: ["Code Review", "Refactor", "CI/CD"],
    status: "live",
    creator: "Eigen Team",
  },
  {
    id: "deal-flow-agent",
    name: "Deal Flow Agent",
    tagline: "Never miss the next big thing.",
    description:
      "Monitors markets, tracks startup signals, and surfaces investment opportunities before they hit the mainstream radar.",
    category: "Finance",
    icon: "📈",
    color: "#ec4899",
    stats: [
      { label: "Signals tracked", value: "1M+" },
      { label: "Accuracy", value: "91%" },
    ],
    tags: ["Finance", "VC", "Signals"],
    status: "live",
    creator: "EigenTribe",
  },
  {
    id: "content-engine",
    name: "Content Engine",
    tagline: "Words that work. At scale.",
    description:
      "Drafts blog posts, LinkedIn threads, and launch copy that sounds authentically human — and converts.",
    category: "Marketing",
    icon: "✍️",
    color: "#f59e0b",
    stats: [
      { label: "Pieces created", value: "500k+" },
      { label: "Avg. CTR lift", value: "+34%" },
    ],
    tags: ["Copywriting", "SEO", "Social"],
    status: "live",
    creator: "EigenTribe",
  },
  {
    id: "ops-oracle",
    name: "Ops Oracle",
    tagline: "Your ops team, minus the overhead.",
    description:
      "Automates repetitive workflows, schedules tasks, and keeps your team aligned — no project manager required.",
    category: "Operations",
    icon: "🗂️",
    color: "#10b981",
    stats: [
      { label: "Hours saved/mo", value: "120+" },
      { label: "Integrations", value: "200+" },
    ],
    tags: ["Automation", "Scheduling", "Workflows"],
    status: "live",
    creator: "Eigen Team",
  },
  {
    id: "customer-compass",
    name: "Customer Compass",
    tagline: "Know your customer before they speak.",
    description:
      "Analyzes support tickets, reviews, and product feedback to surface what users really want — and what's driving churn.",
    category: "Customer Success",
    icon: "🧭",
    color: "#06b6d4",
    stats: [
      { label: "Tickets analyzed", value: "2M+" },
      { label: "Churn reduction", value: "28%" },
    ],
    tags: ["Support", "Churn", "Feedback"],
    status: "beta",
    creator: "EigenTribe",
  },
  {
    id: "legal-lens",
    name: "Legal Lens",
    tagline: "Read every line. Risk nothing.",
    description:
      "Parses contracts, flags risky clauses, and summarizes legal documents into plain English — without the billable hours.",
    category: "Legal",
    icon: "⚖️",
    color: "#8b5cf6",
    stats: [
      { label: "Docs reviewed", value: "80k+" },
      { label: "Risk flags", value: "99% recall" },
    ],
    tags: ["Contracts", "Compliance", "Legal"],
    status: "beta",
    creator: "Eigen Team",
  },
  {
    id: "data-cartographer",
    name: "Data Cartographer",
    tagline: "Turn raw data into clear decisions.",
    description:
      "Connects to your warehouse, writes SQL, and builds dashboards that answer the questions leadership actually asks.",
    category: "Analytics",
    icon: "🗺️",
    color: "#f97316",
    stats: [
      { label: "Queries run", value: "5M+" },
      { label: "Data sources", value: "40+" },
    ],
    tags: ["SQL", "BI", "Dashboards"],
    status: "beta",
    creator: "EigenTribe",
  },
  {
    id: "brand-guardian",
    name: "Brand Guardian",
    tagline: "Your brand, consistent everywhere.",
    description:
      "Monitors mentions across the web, flags off-brand usage, and protects your reputation in real-time.",
    category: "Brand",
    icon: "🛡️",
    color: "#e11d48",
    stats: [
      { label: "Mentions tracked", value: "10M+" },
      { label: "Platforms", value: "50+" },
    ],
    tags: ["PR", "Monitoring", "Reputation"],
    status: "coming-soon",
    creator: "Eigen Team",
  },
];
