import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Moatez Borji — Embedded Systems & IoT Engineer, AI enthusiast and software engineer. Portfolio of connected-device, embedded Linux and AI-integrated projects.";

export const metadata: Metadata = {
  title: {
    default: "Moatez Borji — Embedded Systems & IoT Engineer",
    template: "%s · Moatez Borji",
  },
  description,
  keywords: [
    "Moatez Borji",
    "Embedded Systems",
    "IoT Engineer",
    "ESP32",
    "STM32",
    "Raspberry Pi",
    "MQTT",
    "Embedded Linux",
    "Yocto Project",
    "FastAPI",
    "AI",
  ],
  authors: [{ name: "Moatez Borji", url: "https://github.com/borgimoatez123" }],
  creator: "Moatez Borji",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Moatez Borji — Portfolio",
    title: "Moatez Borji — Embedded Systems & IoT Engineer",
    description,
  },
  twitter: {
    card: "summary",
    title: "Moatez Borji — Embedded Systems & IoT Engineer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070a12" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6fa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          {/* Without JS the scroll-entrance wrappers must stay visible. */}
          <style>{`.reveal{opacity:1 !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
