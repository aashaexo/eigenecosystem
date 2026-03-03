import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eigen Ecosystem — The intelligence layer for what comes next",
  description:
    "A living ecosystem of AI agents, open knowledge, and a builder community — all wired together to help you think faster, ship smarter, and stay ahead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
