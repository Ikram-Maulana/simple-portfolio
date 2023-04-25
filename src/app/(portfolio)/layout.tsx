import MainNav from "@/components/main-nav";
import ScrollTop from "@/components/scroll-top";
import { siteConfig } from "@/config/site";
import { PortfolioLayoutProps } from "@/types";

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <MainNav items={siteConfig.mainNav} />
      {children}
      <ScrollTop />
    </>
  );
}