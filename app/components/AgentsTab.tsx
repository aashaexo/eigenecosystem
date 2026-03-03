"use client";

import { useState } from "react";
import { agents, Agent } from "../data/agents";

const categories = [
  "All",
  "Research",
  "Engineering",
  "Finance",
  "Marketing",
  "Operations",
  "Customer Success",
  "Legal",
  "Analytics",
  "Brand",
];

const statusStyles: Record<
  Agent["status"],
  { label: string; color: string; bg: string }
> = {
  live: { label: "Live", color: "#34d399", bg: "rgba(52,211,153,0.1)" },
  beta: { label: "Beta", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  "coming-soon": {
    label: "Coming Soon",
    color: "#8b8b9e",
    bg: "rgba(139,139,158,0.1)",
  },
};

function CreatorBadge({ creator }: { creator: Agent["creator"] }) {
  const isTeam = creator === "Eigen Team";
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
      style={{
        background: isTeam
          ? "rgba(99,102,241,0.12)"
          : "rgba(168,85,247,0.12)",
        color: isTeam ? "#a5b4fc" : "#d8b4fe",
        border: isTeam
          ? "1px solid rgba(99,102,241,0.25)"
          : "1px solid rgba(168,85,247,0.25)",
      }}
    >
      {isTeam ? "⚡ Eigen Team" : "🌐 EigenTribe"}
    </span>
  );
}

// X / Twitter SVG icon (monochrome, sized to text)
function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const status = statusStyles[agent.status];
  const hasLink = !!agent.link;

  const ctaLabel = () => {
    if (!hasLink) return "Link coming soon";
    return agent.linkType === "x" ? "View on X" : "Open Site";
  };

  const ctaIcon = () => {
    if (!hasLink) return null;
    if (agent.linkType === "x") return <XIcon />;
    return <span>↗</span>;
  };

  const cardContent = (
    <div
      className="card-hover rounded-2xl p-6 flex flex-col gap-4 h-full"
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        cursor: hasLink ? "pointer" : "default",
      }}
    >
      {/* Top row: icon + status */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${agent.color}20, ${agent.color}40)`,
            border: `1px solid ${agent.color}30`,
          }}
        >
          {agent.icon}
        </div>
        <span
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold flex-shrink-0"
          style={{ color: status.color, background: status.bg }}
        >
          {agent.status === "live" && (
            <span
              className="live-dot inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: status.color }}
            />
          )}
          {status.label}
        </span>
      </div>

      {/* Name + tagline + description */}
      <div>
        <h3
          className="text-lg font-bold mb-1"
          style={{ color: "var(--foreground)" }}
        >
          {agent.name}
        </h3>
        <p className="text-sm font-semibold mb-2" style={{ color: agent.color }}>
          {agent.tagline}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {agent.description}
        </p>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 gap-3 rounded-xl p-3"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid var(--card-border)",
        }}
      >
        {agent.stats.map((s) => (
          <div key={s.label}>
            <div
              className="text-base font-bold"
              style={{ color: "var(--foreground)" }}
            >
              {s.value}
            </div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {agent.tags.map((tag) => (
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
      </div>

      {/* Creator + CTA */}
      <div className="flex items-center justify-between gap-2 mt-auto pt-1">
        <CreatorBadge creator={agent.creator} />
        <span
          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200"
          style={{
            background: hasLink
              ? `linear-gradient(135deg, ${agent.color}30, ${agent.color}50)`
              : "rgba(255,255,255,0.04)",
            border: `1px solid ${hasLink ? agent.color + "40" : "var(--card-border)"}`,
            color: hasLink ? agent.color : "var(--muted)",
          }}
        >
          {ctaIcon()}
          {ctaLabel()}
        </span>
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a
        href={agent.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        style={{ textDecoration: "none" }}
      >
        {cardContent}
      </a>
    );
  }

  return <div>{cardContent}</div>;
}

export default function AgentsTab() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [creatorFilter, setCreatorFilter] = useState<"All" | "Eigen Team" | "EigenTribe">("All");

  const filtered = agents.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchCreator = creatorFilter === "All" || a.creator === creatorFilter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch && matchCreator;
  });

  const liveCount = agents.filter((a) => a.status === "live").length;
  const tribeCount = agents.filter((a) => a.creator === "EigenTribe").length;

  return (
    <div>
      {/* Section header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-baseline gap-3 mb-3">
          <h2 className="text-3xl font-bold">Agent Directory</h2>
          <span
            className="rounded-full px-3 py-1 text-sm font-medium"
            style={{ background: "rgba(52,211,153,0.1)", color: "#34d399" }}
          >
            {liveCount} live
          </span>
          <span
            className="rounded-full px-3 py-1 text-sm font-medium"
            style={{ background: "rgba(168,85,247,0.1)", color: "#d8b4fe" }}
          >
            {tribeCount} from the community
          </span>
        </div>
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Purpose-built agents from the Eigen Team — and from builders inside
          our community. Find the one that fits your workflow, and deploy it in
          minutes.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{ color: "var(--muted)" }}
        >
          🔎
        </span>
        <input
          type="text"
          placeholder="Search agents by name, tag, or use case..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl pl-11 pr-4 py-3 text-sm outline-none transition-all duration-200"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            color: "var(--foreground)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--card-border)")}
        />
      </div>

      {/* Filters row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 flex-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200"
              style={{
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #6366f1, #a855f7)"
                    : "var(--card-bg)",
                color: activeCategory === cat ? "#ffffff" : "var(--muted)",
                border:
                  activeCategory === cat
                    ? "1px solid transparent"
                    : "1px solid var(--card-border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Creator filter */}
        <div className="flex gap-2 flex-shrink-0">
          {(["All", "Eigen Team", "EigenTribe"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCreatorFilter(c)}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200"
              style={{
                background:
                  creatorFilter === c
                    ? c === "EigenTribe"
                      ? "rgba(168,85,247,0.2)"
                      : c === "Eigen Team"
                      ? "rgba(99,102,241,0.2)"
                      : "rgba(255,255,255,0.08)"
                    : "var(--card-bg)",
                color:
                  creatorFilter === c
                    ? c === "EigenTribe"
                      ? "#d8b4fe"
                      : c === "Eigen Team"
                      ? "#a5b4fc"
                      : "var(--foreground)"
                    : "var(--muted)",
                border:
                  creatorFilter === c
                    ? c === "EigenTribe"
                      ? "1px solid rgba(168,85,247,0.4)"
                      : c === "Eigen Team"
                      ? "1px solid rgba(99,102,241,0.4)"
                      : "1px solid rgba(255,255,255,0.15)"
                    : "1px solid var(--card-border)",
              }}
            >
              {c === "All" ? "All Creators" : c === "Eigen Team" ? "⚡ Eigen Team" : "🌐 EigenTribe"}
            </button>
          ))}
        </div>
      </div>

      {/* Agent Grid — 3 per row */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="text-5xl mb-4">🤖</div>
          <p
            className="text-lg font-medium"
            style={{ color: "var(--muted)" }}
          >
            No agents match your search.
          </p>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            Try a different term, category, or reset your filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
              setCreatorFilter("All");
            }}
            className="mt-6 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all"
            style={{
              background: "rgba(99,102,241,0.15)",
              color: "#a5b4fc",
              border: "1px solid rgba(99,102,241,0.3)",
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
