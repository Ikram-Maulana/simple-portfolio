import { montserrat, poppins } from "./fonts";
import "./globals.css";
import "@total-typescript/ts-reset";

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
  openGraph: {
    title: "Ikram Maulana Portfolio",
    description:
      "Discover the personal portfolio of Ikram Maulana, a Full Stack Web Developer. Explore my collection of projects and skills in web development.",
    type: "website",
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
    icon: "/icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} ${poppins.className}`}>
      <body>{children}</body>
    </html>
  );
}
