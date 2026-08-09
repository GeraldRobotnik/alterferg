import type { Metadata, Viewport } from "next";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alterferg.com"),
  title: "alterferg — Chapter 1 Coming Soon",
  description:
    "Enter the world of alterferg. Meet the Chapter 1 cast, explore development leaks, and follow the upcoming Scratch game.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "alterferg — Chapter 1 Coming Soon",
    description: "A strange little pixel RPG is crawling out of the dark.",
    url: "https://alterferg.com",
    siteName: "alterferg",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1280,
        height: 584,
        alt: "alterferg — Chapter 1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "alterferg — Chapter 1 Coming Soon",
    description: "A strange little pixel RPG is crawling out of the dark.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050706",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${pixel.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
