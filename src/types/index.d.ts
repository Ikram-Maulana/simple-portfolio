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

export type ProjectItem = {
  uuid: string;
  name: string;
  description: string;
  image_url: string;
  techs: {
    name: string;
  }[];
  github_url: string;
  demo_url: string;
};

export type MainProjectItem = ProjectItem[];

export interface ProjectCardProps {
  item: ProjectItem;
}

export interface ImageScrollProps {
  imageUrl: string;
  demoUrl: string;
}

export interface ButtonAccentProps {
  children: React.ReactNode;
  url: string;
  centered?: boolean;
  newTab?: boolean;
  styleNormal?: React.CSSProperties;
  styleHover?: React.CSSProperties;
}
