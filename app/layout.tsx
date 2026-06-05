import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "G Designer House | Architects & Planners",
    template: "%s | G Designer House",
  },
  description:
    "Premier architectural firm specializing in innovative design, contemporary spaces, and sustainable building solutions. Expert architects and planners for residential and commercial projects.",
  keywords:
    "architecture, architectural design, architects, building design, interior design, urban planning, commercial architecture, residential architecture",
  authors: [{ name: "G Designer House" }],
  creator: "G Designer House",
  publisher: "G Designer House",
  alternates: {
    canonical: "https://www.gdesignerhouse.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gdesignerhouse.com",
    siteName: "G Designer House",
    title: "G Designer House - Architects & Planners",
    description:
      "Premier architectural firm specializing in innovative design, contemporary spaces, and sustainable building solutions.",
    images: [
      {
        url: "https://www.gdesignerhouse.com/logo.png",
        width: 1200,
        height: 630,
        alt: "G Designer House - Architects & Planners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G Designer House - Architects & Planners",
    description:
      "Premier architectural firm specializing in innovative design and sustainable building solutions.",
    images: ["https://www.gdesignerhouse.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
