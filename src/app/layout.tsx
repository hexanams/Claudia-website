import AppLayout from "@/components/AppLayout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empowered therapy - Home page",
  description:
    "Empowered therapy landing page",
  openGraph: {
    images: [{ url: "/logo.svg" }],
    title: "Empowered therapy - learn about us",
    description:
      "Get to know about the benefits of using empowered therapy",
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/booking-hero.svg" />
        <link rel="preload" as="image" href="/claudia-hero.svg" />
        <link rel="preload" as="image" href="/payment.svg" />
        <link rel="preload" as="image" href="/issues.svg" />
        <link rel="preload" as="image" href="/faq-hero.svg" />
        <link rel="preload" as="image" href="/payment-1.svg" />
        <link rel="preload" as="image" href="/payment-2.svg" />
      </head>

      <body className="overflow-x-hidden w-full">
        {/* <Toaster /> */}
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
