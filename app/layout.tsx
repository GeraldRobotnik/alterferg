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
    "AlterFerg is an RPG about a paper frog named Ferg, dropped through a mysterious rift into a world full of fun, different characters.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "alterferg — Chapter 1 Coming Soon",
    description:
      "An RPG about a paper frog named Ferg, dropped through a mysterious rift into a world full of fun, different characters.",
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
    description:
      "An RPG about a paper frog named Ferg, dropped through a mysterious rift into a world full of fun, different characters.",
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
