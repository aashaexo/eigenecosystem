export type Agent = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
  builder: string;        // e.g. "EigenTribe", "Aasha", "@username"
  builderHandle?: string; // optional X handle for the builder's profile
  links: {
    x?: string;    // X post or profile
    site?: string; // standalone site or demo
  };
};

// Replace the placeholder entries below with real projects as they come in.
// Each entry only needs: name, a one-liner description, who built it, and link(s).
export const agents: Agent[] = [
  {
    id: "placeholder-1",
    name: "Your Agent Here",
    description: "Drop in a real project and it'll show up right here — name, builder, and links included.",
    icon: "⚡",
    color: "#6366f1",
    tags: ["Example"],
    builder: "EigenTribe",
    links: {},
  },
  {
    id: "placeholder-2",
    name: "Your Agent Here",
    description: "Drop in a real project and it'll show up right here — name, builder, and links included.",
    icon: "🔍",
    color: "#a855f7",
    tags: ["Example"],
    builder: "EigenTribe",
    links: {},
  },
  {
    id: "placeholder-3",
    name: "Your Agent Here",
    description: "Drop in a real project and it'll show up right here — name, builder, and links included.",
    icon: "🛠️",
    color: "#10b981",
    tags: ["Example"],
    builder: "EigenTribe",
    links: {},
  },
];
