import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Based SaaS Starter Kit | Launch Your SaaS Faster",
  description: "Accelerate your SaaS development with our starter kit. Built with Next.js, Stripe, Supabase, and shadcn/ui. Get started in minutes!",
  openGraph: {
    title: "Based SaaS Starter Kit | Launch Your SaaS Faster",
    description: "Accelerate your SaaS development with our starter kit. Built with Next.js, Stripe, Supabase, and shadcn/ui.",
    siteName: "Based SaaS Starter Kit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Based SaaS Starter Kit | Launch Your SaaS Faster",
    description: "Accelerate your SaaS development with our starter kit. Built with Next.js, Stripe, Supabase, and shadcn/ui.",
    creator: "@justwrapapi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
    </html>
  );
}