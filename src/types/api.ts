export interface IAssets {
  logo_inverted: string;
  logo: string;
  profile: string;
}

interface IHeroSection {
  title: string;
  description: string;
  banner: string;
}

interface IAbout {
  title: string;
  description: string;
  profile: string;
}

interface IFAQ {
  key: string;
  title: string;
  description: string;
}

interface IProcess {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface IServices {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface IBankingPartners {
  id: string;
  name: string;
  logo: string;
}

export interface ApiResponse {
  name: string;
  siteTitle: string;
  assets: IAssets;
  hero_section: IHeroSection;
  about: IAbout;
  faq: IFAQ[];
  process: IProcess[];
  services: IServices[];
  banking_partners: IBankingPartners[];
}

export interface ApiContextType {
  data: ApiResponse | null;
  loading: boolean;
  error: string | null;
  refreshData: () => void;
}
