import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Tracking } from "@/components/Tracking";
import { COMPANY, SALES_EMAIL, SITE, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/site";

/*
 * Fonts are self-hosted (src/fonts/*.woff2, latin + latin-ext + ₹ and maths symbols, cut with fontTools).
 * next/font/google fetches at build time, and on Cloudflare Pages that crashed a sibling site's build (Oct 2026).
 */
const grotesk = localFont({ src: "../fonts/space-grotesk-var.woff2", weight: "300 700", variable: "--font-grotesk", display: "swap" });
const inter = localFont({ src: "../fonts/inter-var.woff2", weight: "400 700", variable: "--font-inter", display: "swap" });
const mono = localFont({ src: "../fonts/jetbrains-mono-var.woff2", weight: "400 500", variable: "--font-jb", display: "swap" });

/** Same GTM container as vacademy.io and the sibling brand sites; add an examezy.com trigger in GTM (README). */
const GTM_ID = "GTM-5C4DDJ6W";

const DESCRIPTION =
  "Examezy is online exam software for institutes and hiring teams: online, paper and proctored exams, 7 question types, auto, on-screen and AI evaluation, instant rank and percentile, and reports for every student.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: "Examezy: Online Exam Software with AI Proctoring and Evaluation", template: "%s | Examezy" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/site.webmanifest",
  keywords: [
    "online exam software", "online examination system", "online test platform", "AI proctoring software",
    "online assessment platform", "mock test platform", "test series software for coaching", "exam management software",
    "question bank software", "AI question paper generator", "answer sheet evaluation software", "online coding test platform",
    "Examezy",
  ],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: SITE_NAME,
    locale: "en_IN",
    title: "Examezy: every exam, online or on paper, run and reported in one place",
    description: "Create, schedule, proctor, evaluate and publish results. Auto-marking, on-screen checking and AI evaluation, with instant rank and percentile.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Examezy: online exam software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Examezy: online exams, proctored, marked and reported",
    description: "Online, paper and proctored exams with auto, teacher and AI evaluation and instant reports.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
  alternates: { canonical: SITE },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#F6F7FB", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: SITE_NAME,
      legalName: COMPANY,
      url: SITE,
      logo: `${SITE}/logo.png`,
      description: DESCRIPTION,
      email: SALES_EMAIL,
      sameAs: ["https://vacademy.io"],
      parentOrganization: { "@type": "Organization", name: "Vacademy", url: "https://vacademy.io" },
      contactPoint: [{ "@type": "ContactPoint", contactType: "sales", telephone: `+${WHATSAPP_NUMBER}`, email: SALES_EMAIL, availableLanguage: ["en", "hi"] }],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: SITE_NAME,
      url: SITE,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE}/#org` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE}/#app`,
      name: "Examezy",
      applicationCategory: "EducationalApplication",
      applicationSubCategory: "Online examination and assessment software",
      operatingSystem: "Web",
      url: SITE,
      description: DESCRIPTION,
      featureList: [
        "Online exams with sections, timers and negative marking",
        "AI camera proctoring without video streaming",
        "Paper exams with printable shuffled sets",
        "Automatic, on-screen and AI evaluation",
        "Rank, percentile and question-wise analytics",
        "Question bank and AI question paper generator",
        "Coding questions with hidden test cases",
        "Public registration pages for open tests",
      ],
      publisher: { "@id": `${SITE}/#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${grotesk.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {GTM_ID && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="gtm" />
            </noscript>
          </>
        )}
        <Tracking />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Nav />
        <div id="main" className="pt-16 md:pt-[4.5rem]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
