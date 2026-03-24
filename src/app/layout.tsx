import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://procitec.io"),
  title: {
    default: "Procitec.io",
    template: "%s | Procitec.io",
  },
  description:
    "Procitec.io is the product platform for industrial applications such as EAM and EMS.",
  openGraph: {
    title: "Procitec.io",
    description:
      "Explore Procitec applications built for industrial reliability, visibility, and scale.",
    siteName: "Procitec.io",
    type: "website",
    url: "https://procitec.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col bg-background text-text-primary">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
