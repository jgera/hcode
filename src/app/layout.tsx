import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterDialog from "@/components/ui/custom/NewsletterDialog";

export const metadata: Metadata = {
  title: "Hcode Technologies - End-To-End Engineering Needs",
  description: "We're in the business of writing great code. We provide on-time delivery along with transparent communication. But we also make sure that our people have great work-life balance, meritocracy, and a healthy work environment",
  keywords: ["software development", "engineering", "developers", "tech services", "blockchain", "MVP development"],
  authors: [{ name: "Hcode Technologies" }],
  metadataBase: new URL("https://hcode-clone.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hcode.tech/",
    title: "Hcode Technologies - End-To-End Engineering Needs",
    description: "We provide on-time delivery along with transparent communication with a focus on work-life balance and healthy work environment",
    siteName: "Hcode Technologies",
    images: [
      {
        url: "/images/hero/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "Hcode Technologies",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <NewsletterDialog />
        <Toaster />
      </body>
    </html>
  );
}
