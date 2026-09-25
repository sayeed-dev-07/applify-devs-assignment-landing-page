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
  title: "Echo GPT",
  description: "a cutting-edge AI-powered platform that revolutionizes the way you interact with technology. With its advanced natural language processing capabilities, Echo GPT enables seamless communication and understanding between humans and machines. Whether you're looking to automate tasks, generate content, or simply have a conversation, Echo GPT is your go-to solution for all things AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable}  ${header.variable} h-full antialiased`}
    >
      <body className=" h-svh">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
