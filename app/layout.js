import { Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/Layout/ClientLayout";
import StructuredData from "@/components/SEO/StructuredData";
import { metadata, viewport } from "./metadata";
import SnowfallEffect from "@/components/Snowfall";
import ServiceWorkerRegistrar from "@/components/PWA/ServiceWorkerRegistrar";
import InstallBanner from "@/components/PWA/InstallBanner";

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
        {/*
          Chrome fires beforeinstallprompt before React hydrates, so capture it
          at parse time and stash it for the install banner to pick up.
        */}
        <script
          id="pwa-install-capture"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{window.__pwaInstallPrompt=null;window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();window.__pwaInstallPrompt=e;window.dispatchEvent(new Event("pwa-install-available"));});}catch(err){}})();`,
          }}
        />

        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />

        {/* snow fall effect */}
        {/* <SnowfallEffect /> */}
        <ClientLayout>{children}</ClientLayout>

        {/* PWA */}
        <ServiceWorkerRegistrar />
        <InstallBanner />
      </body>
    </html>
  );
}