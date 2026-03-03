"use client";

import { useState } from "react";
import { agents, Agent } from "../data/agents";

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const isPlaceholder = agent.id.startsWith("placeholder");
  const hasX = !!agent.links.x;
  const hasSite = !!agent.links.site;
  const hasAnyLink = hasX || hasSite;

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: "var(--card-bg)",
        border: `1px solid ${isPlaceholder ? "rgba(255,255,255,0.04)" : "var(--card-border)"}`,
        opacity: isPlaceholder ? 0.4 : 1,
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${agent.color}20, ${agent.color}40)`,
          border: `1px solid ${agent.color}30`,
        }}
      >
        {agent.icon}
      </div>

      {/* Name + description */}
      <div className="flex-1">
        <h3 className="text-base font-bold mb-1" style={{ color: "var(--foreground)" }}>
          {agent.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {agent.description}
        </p>
      </div>

      {/* Tags */}
      {agent.tags.length > 0 && !isPlaceholder && (
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
      )}

      {/* Builder + links */}
      <div className="flex items-center justify-between gap-3 pt-1 mt-auto">
        {/* Attribution */}
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          by{" "}
          {agent.builderHandle ? (
            <a
              href={`https://x.com/${agent.builderHandle.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--foreground)" }}
            >
              {agent.builder}
            </a>
          ) : (
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>
              {agent.builder}
            </span>
          )}
        </span>

        {/* Link buttons */}
        {hasAnyLink && (
          <div className="flex items-center gap-2">
            {hasX && (
              <a
                href={agent.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--foreground)",
                }}
              >
                <XIcon /> X
              </a>
            )}
            {hasSite && (
              <a
                href={agent.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  background: `linear-gradient(135deg, ${agent.color}25, ${agent.color}45)`,
                  border: `1px solid ${agent.color}40`,
                  color: agent.color,
                }}
              >
                <GlobeIcon /> Site
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AgentsTab() {
  const [search, setSearch] = useState("");

  const realAgents = agents.filter((a) => !a.id.startsWith("placeholder"));
  const placeholders = agents.filter((a) => a.id.startsWith("placeholder"));

  const filtered = (search
    ? realAgents.filter((a) => {
        const q = search.toLowerCase();
        return (
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.builder.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : realAgents
  );

  // Show placeholders only when there are no real agents yet
  const displayList = filtered.length === 0 && !search ? placeholders : filtered;
  const isEmpty = search && filtered.length === 0;

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-3">Agent Directory</h2>
        <p className="text-base max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Projects and tools built by the Eigen team and EigenTribe builders.
          Click through to explore, fork, or reach the creator directly.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 text-base pointer-events-none"
          style={{ color: "var(--muted)" }}
        >
          🔎
        </span>
        <input
          type="text"
          placeholder="Search by name, builder, or tag..."
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

      {/* Grid */}
      {isEmpty ? (
        <div className="text-center py-24">
          <div className="text-4xl mb-3">🤖</div>
          <p className="font-medium" style={{ color: "var(--muted)" }}>
            No results for &ldquo;{search}&rdquo;
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-5 rounded-xl px-5 py-2 text-sm font-semibold transition-all"
            style={{
              background: "rgba(99,102,241,0.12)",
              color: "#a5b4fc",
              border: "1px solid rgba(99,102,241,0.25)",
            }}
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayList.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      )}

      {/* Submit CTA */}
      <div
        className="mt-12 rounded-2xl p-8 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.07), rgba(168,85,247,0.07))",
          border: "1px solid rgba(99,102,241,0.15)",
        }}
      >
        <div className="text-3xl mb-3">🛠️</div>
        <h3 className="text-lg font-bold mb-2">Built something with Eigen?</h3>
        <p className="text-sm max-w-sm mx-auto leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
          Submit your project and get it listed here — in front of the whole community.
        </p>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
        >
          Submit your project →
        </a>
      </div>
    </div>
  );
}
