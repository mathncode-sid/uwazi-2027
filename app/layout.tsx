import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uwazi 2027 — Results people can verify",
  description:
    "A secure, transparent model for recording, verifying, and communicating election results in Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
