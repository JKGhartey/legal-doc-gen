import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const font = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Document Generator | Professional Legal Documents",
  description: "Create professional legal documents with our easy-to-use document generator. Custom legal documents tailored to your needs with step-by-step guidance.",
  keywords: "legal document generator, legal documents, document creation, legal forms, legal templates, professional documents",
  authors: [{ name: "Legal Doc Gen" }],
  creator: "Legal Doc Gen",
  publisher: "Legal Doc Gen",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://legaldocgen.com",
    title: "Legal Document Generator | Professional Legal Documents",
    description: "Create professional legal documents with our easy-to-use document generator. Custom legal documents tailored to your needs.",
    siteName: "Legal Doc Gen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Document Generator | Professional Legal Documents",
    description: "Create professional legal documents with our easy-to-use document generator.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
