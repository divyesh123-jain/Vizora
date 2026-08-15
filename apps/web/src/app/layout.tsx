import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vizora | Intelligent Data-Visualization Engine",
  description: "An intelligent, developer-first data-visualization engine. Zero-config charting and typed ChartSpec contract.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f7f3] text-[#18241b] font-sans selection:bg-[#c2872e] selection:text-white">
        {children}
      </body>
    </html>
  );
}


