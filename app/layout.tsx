import Providers from "./providers";
import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Schibsted_Grotesk, Newsreader, Caveat } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";

const analyticsDomain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
const analyticsScriptUrl = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;

const siteUrl = "https://mac-portfolio-2kzn.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Devashish Sharma - Full Stack Developer & Technical Builder",
    template: "%s – Devashish Sharma",
  },
  description:
    "CS undergraduate, Full-Stack Developer, and Technical Builder. Experienced in owning features end-to-end, building real-time systems, and shipping production AI & web platforms.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Devashish Sharma - Full Stack Developer & Technical Builder",
    description:
      "CS undergraduate, Full-Stack Developer, and Technical Builder. Experienced in owning features end-to-end, building real-time systems, and shipping production AI & web platforms.",
    url: siteUrl,
    siteName: "Devashish Sharma",
    locale: "en_US",
    type: "website",
    images: [{ url: "/avatar.jpg", width: 800, height: 800, alt: "Devashish Sharma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devashish Sharma - Full Stack Developer & Technical Builder",
    description:
      "CS undergraduate, Full-Stack Developer, and Technical Builder. Experienced in owning features end-to-end, building real-time systems, and shipping production AI & web platforms.",
    images: ["/avatar.jpg"],
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cursive",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        schibstedGrotesk.variable,
        newsreader.variable,
        caveat.variable,
        GeistSans.variable,
        "font-sans antialiased",
      )}
      suppressHydrationWarning
    >
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
        {analyticsDomain && analyticsScriptUrl ? (
          <Script
            src={analyticsScriptUrl}
            data-domain={analyticsDomain}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
