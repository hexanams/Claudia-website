import AppLayout from "@/components/AppLayout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empowered therapy - Home page",
  description: "Empowered therapy landing page",
  icons: {
    icon: "/fav-icon.png",
  },
  openGraph: {
    images: [{ url: "/fav-icon.png" }],
    title: "Empowered therapy - learn about us",
    description: "Get to know about the benefits of using empowered therapy",
  },
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="overflow-x-hidden w-full">
        {/* <Toaster /> */}
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
