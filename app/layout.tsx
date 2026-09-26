import type { Metadata } from "next";
import { Outfit, Righteous } from "next/font/google";
import AppShell from "@/components/shared/AppShell";
import "./globals.css";



const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
const header = Righteous({
  variable: "--font-header",
  weight: "400"
});

export const metadata: Metadata = {
  applicationName: "EchoGPT",
  title: {
    default: "EchoGPT — Your AI Workspace",
    template: "%s | EchoGPT",
  },
  description: "Chat with AI, create images and video, compare models, and get focused work done in one creative AI workspace.",
  keywords: ["AI assistant", "AI workspace", "AI image generation", "AI video generation", "AI productivity"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "EchoGPT — Your AI Workspace",
    description: "Chat with AI, create images and video, compare models, and get focused work done in one creative AI workspace.",
    siteName: "EchoGPT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EchoGPT — Your AI Workspace",
    description: "Chat with AI, create images and video, compare models, and get focused work done in one creative AI workspace.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable}  ${header.variable} h-full antialiased`}
    >
      <body className="min-h-screen md:min-h-0 md:h-dvh">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
