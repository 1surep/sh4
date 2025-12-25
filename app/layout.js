import { Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import StructuredData from "@/components/SEO/StructuredData";
import { metadata, viewport } from "./metadata";
import SnowfallEffect from "@/components/Snowfall";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export { metadata, viewport };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
        <SnowfallEffect />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}