import { RootLayoutProps } from "@/types";
import "@total-typescript/ts-reset";
import { Metadata, Viewport } from "next";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import { montserrat, poppins } from "../assets/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
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
    </html>
  );
}
