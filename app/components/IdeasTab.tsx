const ideas = [
  {
    id: 1,
    title: "Agent-to-agent handoffs",
    description:
      "Let agents delegate subtasks to each other autonomously — like a real team, without the Slack noise.",
    votes: 312,
    status: "Under Review",
    statusColor: "#f59e0b",
    author: "EigenTribe",
    tags: ["Multi-agent", "Orchestration"],
  },
  {
    id: 2,
    title: "Native Notion workspace sync",
    description:
      "Sync agent outputs directly into Notion databases without any Zapier middleware.",
    votes: 289,
    status: "Planned",
    statusColor: "#6366f1",
    author: "Eigen Team",
    tags: ["Integration", "Notion"],
  },
  {
    id: 3,
    title: "Agent usage analytics dashboard",
    description:
      "A single view to track all your running agents — cost, performance, uptime, and ROI.",
    votes: 241,
    status: "In Progress",
    statusColor: "#34d399",
    author: "EigenTribe",
    tags: ["Analytics", "Dashboard"],
  },
  {
    id: 4,
    title: "Voice interface for agents",
    description:
      "Talk to your agents out loud — perfect for on-the-go queries and hands-free workflows.",
    votes: 198,
    status: "Under Review",
    statusColor: "#f59e0b",
    author: "EigenTribe",
    tags: ["Voice", "Mobile"],
  },
  {
    id: 5,
    title: "Shareable agent templates",
    description:
      "Export your configured agent as a template so your team — or the whole community — can clone it in one click.",
    votes: 167,
    status: "Planned",
    statusColor: "#6366f1",
    author: "Eigen Team",
    tags: ["Templates", "Sharing"],
  },
  {
    id: 6,
    title: "Scheduled agent digests",
    description:
      "Set your agent to email you a summary every morning — market updates, KPIs, overnight alerts.",
    votes: 143,
    status: "Considering",
    statusColor: "#8b8b9e",
    author: "EigenTribe",
    tags: ["Scheduling", "Email"],
  },
];

export default function IdeasTab() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3">Ideas Board</h2>
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          The best products are built with the people using them. Share what you
          want to see, vote on what matters, and watch the community shape
          Eigen&apos;s roadmap.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { value: "1,200+", label: "Ideas submitted" },
          { value: "18,000+", label: "Community votes" },
          { value: "34", label: "Ideas shipped" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-5 text-center"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Idea cards */}
      <div className="space-y-4 mb-10">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="card-hover rounded-2xl p-6 flex gap-5"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            {/* Vote button */}
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <button
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all hover:scale-110"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.25)",
                }}
              >
                ▲
              </button>
              <span className="text-sm font-bold">{idea.votes}</span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start gap-2 mb-2">
                <h3 className="font-bold text-base">{idea.title}</h3>
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold flex-shrink-0"
                  style={{
                    color: idea.statusColor,
                    background: `${idea.statusColor}18`,
                  }}
                >
                  {idea.status}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--muted)" }}
              >
                {idea.description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {idea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-xs"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--muted)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className="text-xs ml-auto"
                  style={{ color: "var(--muted)" }}
                >
                  {idea.author === "Eigen Team" ? "⚡ Eigen Team" : "🌐 EigenTribe"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit idea CTA */}
      <div
        className="rounded-2xl p-8 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(236,72,153,0.06))",
          border: "1px solid rgba(245,158,11,0.2)",
        }}
      >
        <div className="text-4xl mb-3">💡</div>
        <h3 className="text-xl font-bold mb-2">Have an idea? Ship it here.</h3>
        <p
          className="text-sm max-w-md mx-auto leading-relaxed mb-5"
          style={{ color: "var(--muted)" }}
        >
          The best features in Eigen started as a single community suggestion.
          Your idea could be next.
        </p>
        <button
          className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #ec4899)",
            boxShadow: "0 0 25px rgba(245,158,11,0.2)",
          }}
        >
          Submit Your Idea →
        </button>
      </div>
    </div>
  );
}
