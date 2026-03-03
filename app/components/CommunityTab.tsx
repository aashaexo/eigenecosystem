const channels = [
  {
    icon: "💬",
    name: "General",
    description: "Day-to-day conversation, intros, and everything in between.",
    members: "4.2k",
    color: "#6366f1",
  },
  {
    icon: "🤖",
    name: "Agent Showcase",
    description:
      "Built something with Eigen? Drop it here. The community will actually look at it.",
    members: "2.8k",
    color: "#a855f7",
  },
  {
    icon: "🧠",
    name: "AI Research",
    description:
      "Papers, breakthroughs, and hot takes — signal over noise, always.",
    members: "3.1k",
    color: "#10b981",
  },
  {
    icon: "🛠️",
    name: "Build in Public",
    description:
      "Ship daily. Share your progress. Get real feedback from people building the same things.",
    members: "1.9k",
    color: "#f59e0b",
  },
  {
    icon: "💡",
    name: "Feature Requests",
    description:
      "Votes, debates, and discussions on what Eigen builds next.",
    members: "2.3k",
    color: "#ec4899",
  },
  {
    icon: "🎯",
    name: "Jobs & Collabs",
    description:
      "Find AI-native roles or a co-founder who gets it. No spam, ever.",
    members: "1.4k",
    color: "#06b6d4",
  },
];

const spotlights = [
  {
    name: "Maya R.",
    handle: "@mayabuilds",
    contribution:
      "Built a multi-step legal review agent and open-sourced the template — 340 forks in one week.",
    avatar: "👩‍💻",
    badge: "Top Builder",
    badgeColor: "#6366f1",
  },
  {
    name: "Jordan K.",
    handle: "@jk_ventures",
    contribution:
      "Wrote the most-read guide on combining the Deal Flow Agent with Notion — saved 200+ hours across the community.",
    avatar: "👨‍🚀",
    badge: "Community Star",
    badgeColor: "#a855f7",
  },
  {
    name: "Priya S.",
    handle: "@priyaonai",
    contribution:
      "Organized the first EigenTribe hackathon — 80 projects in 48 hours, 3 of which are now in the directory.",
    avatar: "🧑‍🎤",
    badge: "Event Host",
    badgeColor: "#ec4899",
  },
];

export default function CommunityTab() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3">EigenTribe</h2>
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          A community of builders, researchers, and founders who believe AI
          should work for you — not the other way around. No hype. Just signal.
        </p>
      </div>

      {/* Community stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { value: "14,000+", label: "Members" },
          { value: "82", label: "Countries" },
          { value: "600+", label: "Agents built" },
          { value: "Daily", label: "Active discussions" },
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

      {/* Channels */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-5">Community Channels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="card-hover rounded-2xl p-5"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${channel.color}20, ${channel.color}40)`,
                    border: `1px solid ${channel.color}30`,
                  }}
                >
                  {channel.icon}
                </span>
                <div>
                  <div className="font-semibold text-sm">{channel.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    {channel.members} members
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {channel.description}
              </p>
              <button
                className="mt-4 w-full rounded-xl py-2 text-xs font-semibold transition-all hover:opacity-80"
                style={{
                  background: `${channel.color}18`,
                  color: channel.color,
                  border: `1px solid ${channel.color}30`,
                }}
              >
                Join Channel →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Community spotlights */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-5">Community Spotlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {spotlights.map((person) => (
            <div
              key={person.handle}
              className="card-hover rounded-2xl p-6"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {person.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm">{person.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    {person.handle}
                  </div>
                </div>
                <span
                  className="ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    color: person.badgeColor,
                    background: `${person.badgeColor}18`,
                  }}
                >
                  {person.badge}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {person.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Join CTA */}
      <div
        className="rounded-2xl p-10 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1), rgba(236,72,153,0.08))",
          border: "1px solid rgba(99,102,241,0.2)",
        }}
      >
        <div className="text-5xl mb-4">🌐</div>
        <h3 className="text-2xl font-bold mb-3">Join 14,000+ builders.</h3>
        <p
          className="text-base max-w-md mx-auto leading-relaxed mb-7"
          style={{ color: "var(--muted)" }}
        >
          Whether you&apos;re here to ship agents, find collaborators, or just stay
          sharp — EigenTribe is where the smartest AI builders hang out.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              boxShadow: "0 0 30px rgba(99,102,241,0.25)",
            }}
          >
            Join EigenTribe →
          </button>
          <button
            className="rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "var(--foreground)",
            }}
          >
            Browse Discord
          </button>
        </div>
      </div>
    </div>
  );
}
