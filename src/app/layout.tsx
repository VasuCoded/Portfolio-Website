import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import PageTransition from "@/components/PageTransition";
import AmbientBackground from "@/components/AmbientBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "vasu's server",
  description:
    "Vasu — systems and Discord infrastructure, an SCP habit, a BoyWithUke problem, and a few things being built in the open.",
  metadataBase: new URL("https://vasucoded.vercel.app"),
  openGraph: {
    title: "vasu's server",
    description:
      "Vasu — systems and Discord infrastructure, an SCP habit, a BoyWithUke problem, and a few things being built in the open.",
    images: ["/avatar.png"],
    type: "website",
  },
  icons: { icon: "/avatar.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AmbientBackground />
        <AppShell>
          <PageTransition>{children}</PageTransition>
        </AppShell>
      </body>
    </html>
  );
}
