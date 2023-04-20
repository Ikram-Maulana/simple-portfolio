export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export interface SiteConfig {
  mainNav: MainNavItem[];
}

export interface MainNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export type Layout = {
  children: React.ReactNode;
};

export type RootLayoutProps = Layout;

export type PortfolioLayoutProps = Layout;
