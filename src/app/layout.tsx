import { montserrat, poppins } from "@/assets/fonts";
import { env } from "@/env";
import "@/styles/globals.css";
import { RootLayoutProps } from "@/types";
import "@total-typescript/ts-reset";
import { Tokens } from "mirrorful/.mirrorful/theme";
import { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ikram Maulana",
  description:
    "Discover the simple personal portfolio of Ikram Maulana, a Full Stack Web Developer. Explore my collection of projects and skills in web development.",
  applicationName: "Ikram Maulana Simple Portfolio",
  keywords: [
    "Ikram Maulana",
    "Ikram Maulana Portfolio",
    "Ikram Maulana Simple Portfolio",
    "Ikram Maulana Website",
    "Ikram Maulana Full Stack Web Developer",
    "Full Stack Web Developer",
    "React Developer",
    "Daunnesia",
    "Daunnesia Agency",
  ],
  authors: [
    {
      name: "Ikram Maulana",
      url: "https://ikrammaulana.my.id",
    },
  ],
  creator: "Ikram Maulana",
  metadataBase: new URL("https://ikrammaulana.my.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Ikram Maulana Portfolio",
    description:
      "Discover the simple personal portfolio of Ikram Maulana, a Full Stack Web Developer. Explore my collection of projects and skills in web development.",
    url: "https://ikrammaulana.my.id",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ikram Maulana Simple Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F5EB",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body
        style={{
          backgroundColor: Tokens.colors["old-lace"]["base"],
        }}
      >
        {children}
      </body>
      <Script
        src={env.NEXT_PUBLIC_UMAMI_URL}
        strategy="lazyOnload"
        data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
