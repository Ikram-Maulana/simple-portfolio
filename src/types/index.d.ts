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

export type SocialItem = {
  name: string;
  href: string;
};

export type MainSocialItem = SocialItem;

export interface SocialConfig {
  socials: MainSocialItem[];
}

export interface SocialListProps {
  items: MainSocialItem[];
}

export type TechItem = {
  name: string;
  image: string;
};

export type MainTechItem = TechItem;

export interface TechConfig {
  techs: MainTechItem[];
}

export interface TechListProps {
  items: MainTechItem[];
}

export interface SectionHeaderProps {
  title: string;
  description: string;
}

export interface ContactCircleProps {
  to: string;
  className?: string;
  style?: React.CSSProperties;
}
