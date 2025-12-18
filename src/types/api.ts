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

interface IFAQItems {
  key: string;
  title: string;
  description: string;
}

interface IFAQ {
  title: string;
  description: string;
  items: IFAQItems[];
}

interface IProcessItems {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface IProcess {
  title: string;
  description: string;
  items: IProcessItems[];
}

interface IServicesItems {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface IServices {
  title: string;
  items: IServicesItems[];
}

interface IBankingPartnersItems {
  id: string;
  title: string;
  logo: string;
}

interface IBankingPartners {
  title: string;
  items: IBankingPartnersItems[];
}

interface IWhyUs {
  title: string;
  description: string;
  items: string[];
}

interface IFooter {
  info: string;
  contact: {
    email: string;
    phone: string;
  };
  copyright: string;
}

export interface ApiResponseData {
  name: string;
  site_title: string;
  assets: IAssets;
  hero_section: IHeroSection;
  about: IAbout;
  faq: IFAQ;
  process: IProcess;
  services: IServices;
  banking_partners: IBankingPartners;
  why_us: IWhyUs;
  footer: IFooter;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: ApiResponseData;
}

export interface ApiContextType {
  data: ApiResponseData | null;
  loading: boolean;
  error: string | null;
  refreshData: () => void;
}
