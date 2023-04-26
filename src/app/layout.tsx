import { RootLayoutProps } from "@/types";
import "@total-typescript/ts-reset";
import { Analytics } from "@vercel/analytics/react";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import { montserrat, poppins } from "../assets/fonts";
import "../styles/globals.css";

export const metadata = {
  title: "Ikram Maulana",
  description:
    "Discover the personal portfolio of Ikram Maulana, a Full Stack Web Developer. Explore my collection of projects and skills in web development.",
  applicationName: "Ikram Maulana Portfolio",
  keywords: [
    "Ikram Maulana",
    "Ikram Maulana Portfolio",
    "Ikram Maulana Website",
    "Ikram Maulana Full Stack Web Developer",
    "Full Stack Web Developer",
    "React Developer",
  ],
  authors: [
    {
      name: "Ikram Maulana",
      url: "https://ikram-maulana.tech",
    },
  ],
  creator: "Ikram Maulana",
  openGraph: {
    type: "website",
    title: "Ikram Maulana Portfolio",
    description:
      "Discover the personal portfolio of Ikram Maulana, a Full Stack Web Developer. Explore my collection of projects and skills in web development.",
    url: "https://ikram-maulana.tech",
    site_name: "Ikram Maulana Portfolio",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

      <Analytics />
    </html>
  );
}
