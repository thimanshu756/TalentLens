import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// ============================================================================
// COMPREHENSIVE SEO METADATA CONFIGURATION
// ============================================================================
export const metadata: Metadata = {
  // Title configuration with template for page-specific titles
  // Template allows pages to inject their title: %s | Site Name
  title: {
    default: "Rakri AI | AI-Powered GDPR-Compliant Recruitment Platform",
    template: "%s | Rakri AI", // Pages can use: export const metadata = { title: "Services" }
  },

  // Meta description (150-160 characters optimal for Google search results)
  // This appears in search engine results and social media previews
  description: "Transform hiring with AI. Rakri AI delivers 75% faster candidate screening with explainable AI scoring, hosted securely on your cloud. Fully GDPR-compliant recruitment solutions for European and US agencies.",

  // Keywords for search engines (though less important than content quality)
  // Focus on primary services, location, and unique value propositions
  keywords: [
    "AI recruitment",
    "GDPR recruitment software",
    "candidate screening",
    "cloud recruitment",
    "European hiring solutions",
    "AI candidate scoring",

  ],

  // Author and creator information for content attribution
  authors: [{ name: "Rakri AI" }],
  creator: "Rakri AI", // Person or organization that created the content
  publisher: "Rakri AI", // Person or organization that published the content

  // Robots meta tag - controls how search engines crawl and index your site
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // No limit on video preview length
      "max-image-preview": "large", // Allow large image previews in search results
      "max-snippet": -1, // No limit on text snippet length in search results
    },
  },

  // Open Graph metadata for social media sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website", // Type of content: website, article, product, etc.
    locale: "en_US", // Primary language and region
    url: "https://REPLACE_ME_YOUR_DOMAIN.com", // Canonical URL of this page
    title: "Rakri AI | AI-Powered GDPR-Compliant Recruitment Platform",
    description: "Transform hiring with AI: 75% faster candidate screening, fully GDPR-compliant",
    siteName: "Rakri AI", // Name of your overall site
    images: [
      {
        url: "https://REPLACE_ME_YOUR_DOMAIN.com/og-image.png", // REPLACE_ME: Create og-image.png (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Rakri AI - AI-Powered Recruitment Platform",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata for Twitter/X sharing
  twitter: {
    card: "summary_large_image", // Large image card format
    title: "Rakri AI | AI-Powered Recruitment Platform",
    description: "Transform hiring with AI: 75% faster candidate screening, fully GDPR-compliant",
    creator: "@REPLACE_ME_TWITTER_HANDLE", // REPLACE_ME: Your Twitter handle
    images: ["https://REPLACE_ME_YOUR_DOMAIN.com/og-image.png"], // Same as OG image or separate
  },

  // Canonical URL and alternate language versions
  alternates: {
    canonical: "https://rakriai.com", // REPLACE_ME: Your canonical domain
    // Add language alternatives if you have multi-language support:
    // languages: {
    //   'en-US': 'https://REPLACE_ME_YOUR_DOMAIN.com',
    //   'de-DE': 'https://REPLACE_ME_YOUR_DOMAIN.com/de',
    // }
  },

  // Verification codes for webmaster tools
  verification: {
    google: "REPLACE_ME_GOOGLE_VERIFICATION_CODE", // REPLACE_ME: Get from Google Search Console
    // yandex: "REPLACE_ME_YANDEX_CODE", // Optional: Yandex Webmaster Tools
    // bing: "REPLACE_ME_BING_CODE", // Optional: Bing Webmaster Tools
  },

  // PWA manifest for mobile app-like experience
  manifest: "/site.webmanifest",

  // Favicon and app icons for various devices
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },

  // Theme color for browser UI
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3178C6" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1223" },
  ],

  // Viewport settings for responsive design
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script
          id="cal-com-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { 
                let p = function (a, ar) { 
                  a.q.push(ar); 
                }; 
                let d = C.document; 
                C.Cal = C.Cal || function () { 
                  let cal = C.Cal; 
                  let ar = arguments; 
                  if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                  } 
                  if (ar[0] === L) { 
                    const api = function () { 
                      p(api, arguments); 
                    }; 
                    const namespace = ar[1] || ""; 
                    api.q = api.q || []; 
                    typeof namespace === "string" 
                      ? (cal.ns[namespace] = api) && (namespace !== "") && (cal.ns[namespace].q = api.q) 
                      : p(cal, ar); 
                    return; 
                  } 
                  p(cal, ar); 
                }; 
              })(window, "https://cal.com/embed.js", "init");
              Cal("init", "popup", {
                origin: "https://cal.com"
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
