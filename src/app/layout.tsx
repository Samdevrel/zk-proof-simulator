import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZK Proof Simulator | @samdevrel",
  description: "Interactive zero-knowledge proof simulator - learn zkSNARKs, zkSTARKs, and zkVM.",
  keywords: ["zero knowledge proof", "zkSNARK", "zkSTARK", "zkVM", "privacy", "cryptography"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
