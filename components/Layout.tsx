import Head from "next/head";
import FooTer from "./FooTer";
import Header from "./Header";

export const siteTitle = "Ikram Maulana Portfolio";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen font-content antialiased">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal Portfolio Ikram Maulana" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#111827" />
      </Head>

      <Header />
      <main>{children}</main>
      <FooTer />
    </div>
  );
}
