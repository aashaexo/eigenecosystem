"use client";

import { useState } from "react";
import AgentsTab from "./AgentsTab";
import DocsTab from "./DocsTab";
import IdeasTab from "./IdeasTab";
import CommunityTab from "./CommunityTab";

type Tab = "agents" | "docs" | "ideas" | "community";

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "agents", label: "Agents", emoji: "⚡" },
  { id: "docs", label: "Docs", emoji: "📖" },
  { id: "ideas", label: "Ideas", emoji: "💡" },
  { id: "community", label: "Community", emoji: "🌐" },
];

export default function EcosystemPage() {
  const [activeTab, setActiveTab] = useState<Tab>("agents");

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-sm font-medium"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#a5b4fc",
            }}
          >
            <span className="live-dot inline-block w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Eigen Ecosystem · Live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            The intelligence layer
            <br />
            <span className="gradient-text">for what comes next.</span>
          </h1>

          <p
            className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed mb-10"
            style={{ color: "var(--muted)" }}
          >
            Eigen is a living ecosystem of AI agents, open knowledge, and a
            builder community — all wired together to help you think faster,
            ship smarter, and stay ahead.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab("agents")}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              }}
            >
              Explore Agents
            </button>
            <button
              onClick={() => setActiveTab("community")}
              className="px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "var(--foreground)",
              }}
            >
              Join the Community
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        className="sticky top-0 z-20 border-b"
        style={{
          background: "rgba(10,10,15,0.85)",
          backdropFilter: "blur(20px)",
          borderColor: "var(--card-border)",
        }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-4 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id ? "tab-underline" : ""
                }`}
                style={{
                  color:
                    activeTab === tab.id ? "var(--foreground)" : "var(--muted)",
                }}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {activeTab === "agents" && <AgentsTab />}
        {activeTab === "docs" && <DocsTab />}
        {activeTab === "ideas" && <IdeasTab />}
        {activeTab === "community" && <CommunityTab />}
      </div>
    </div>
  );
}
