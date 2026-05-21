import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parseth.com"),

  title: {
    default: "Parseth — AI/ML Engineering & Consulting",
    template: "%s | Parseth",
  },

  description:
    "Parseth is an AI and ML engineering consultancy offering fixed-scope audits, production system builds, and team augmentation. Serving clients across India, US, and globally.",

  authors: [
    {
      name: "Parseth",
      url: "https://parseth.com",
    },
  ],

  creator: "Parseth",
  publisher: "Parseth",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://parseth.com",

    title: "Parseth — AI/ML Engineering & Consulting",

    description:
      "Engineering-first AI and ML consulting focused on measurable ROI, production systems, LLM infrastructure, and scalable deployment.",

    siteName: "Parseth",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Parseth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Parseth — AI/ML Engineering & Consulting",
    description:
      "Production-grade AI/ML systems engineered for real business operations.",

    creator: "@parseth_hq",
    images: ["/preview.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "linkedin:owner": "parseth-hq",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Parseth",
              url: "https://parseth.com",
              email: "hello@parseth.com",
              description:
                "AI and ML engineering consultancy delivering fixed-scope, production-grade systems.",
              sameAs: [
                "https://x.com/parseth_hq",
                "https://www.linkedin.com/company/parseth-hq",
                "https://github.com/parseth-hq",
                "https://www.instagram.com/parseth_hq",
              ],
              areaServed: ["IN", "US", "GB"],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
