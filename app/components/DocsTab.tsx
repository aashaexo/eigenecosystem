const docSections = [
  {
    icon: "🚀",
    title: "Getting Started",
    description:
      "Everything you need to go from zero to your first deployed agent in under 15 minutes.",
    color: "#6366f1",
    links: ["Quickstart Guide", "Core Concepts", "Your First Agent"],
  },
  {
    icon: "🔌",
    title: "Integrations",
    description:
      "Connect Eigen agents to the tools you already use — Slack, Notion, Zapier, and 200+ more.",
    color: "#a855f7",
    links: ["API Reference", "Webhooks", "OAuth Setup"],
  },
  {
    icon: "🛠️",
    title: "Build Your Own",
    description:
      "Open the hood and build a custom agent using our SDK. Ship it to the EigenTribe marketplace.",
    color: "#10b981",
    links: ["SDK Docs", "Agent Templates", "Publish to Marketplace"],
  },
  {
    icon: "🔒",
    title: "Security & Privacy",
    description:
      "Data handling, permissions, SOC 2 compliance, and everything your security team will ask for.",
    color: "#f59e0b",
    links: ["Data Policy", "Permissions Model", "Compliance FAQ"],
  },
  {
    icon: "⚡",
    title: "Advanced Usage",
    description:
      "Multi-agent pipelines, custom memory layers, rate limits, and production best practices.",
    color: "#ec4899",
    links: ["Agent Chaining", "Memory & Context", "Production Checklist"],
  },
  {
    icon: "📊",
    title: "Analytics & Logs",
    description:
      "Inspect every agent run — inputs, outputs, latency, costs — down to the token level.",
    color: "#06b6d4",
    links: ["Run Logs", "Cost Tracking", "Monitoring Setup"],
  },
];

export default function DocsTab() {
  return (
    <div>
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-3">Documentation</h2>
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Everything you need to deploy, extend, and master Eigen — written for
          builders, not bureaucrats.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative mb-10">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-lg"
          style={{ color: "var(--muted)" }}
        >
          🔎
        </span>
        <input
          type="text"
          placeholder="Search the docs..."
          className="w-full max-w-xl rounded-xl pl-11 pr-4 py-3 text-sm outline-none"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            color: "var(--foreground)",
          }}
          readOnly
          onClick={() =>
            alert("Full docs search coming soon — hang tight!")
          }
        />
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs rounded px-1.5 py-0.5"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "var(--muted)",
            border: "1px solid var(--card-border)",
          }}
        >
          ⌘K
        </span>
      </div>

      {/* Doc sections grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {docSections.map((section) => (
          <div
            key={section.title}
            className="card-hover rounded-2xl p-6"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
              style={{
                background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                border: `1px solid ${section.color}30`,
              }}
            >
              {section.icon}
            </div>
            <h3 className="font-bold text-base mb-2">{section.title}</h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--muted)" }}
            >
              {section.description}
            </p>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm flex items-center gap-1.5 transition-colors duration-150 hover:opacity-80"
                    style={{ color: section.color }}
                  >
                    <span>→</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Coming soon banner */}
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.08))",
          border: "1px solid rgba(99,102,241,0.2)",
        }}
      >
        <div className="text-4xl mb-3">📖</div>
        <h3 className="text-xl font-bold mb-2">Full docs are on the way.</h3>
        <p
          className="text-sm max-w-md mx-auto leading-relaxed mb-5"
          style={{ color: "var(--muted)" }}
        >
          We&apos;re writing documentation that&apos;s actually worth reading — no fluff, no
          corporate speak. Drop your email and we&apos;ll ping you when it&apos;s live.
        </p>
        <div className="flex items-center justify-center gap-3">
          <input
            type="email"
            placeholder="you@company.com"
            className="rounded-xl px-4 py-2.5 text-sm outline-none w-60"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--foreground)",
            }}
          />
          <button
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
            }}
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
