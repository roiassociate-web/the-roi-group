
export interface CurriculumItem {
  id: string;
  duration: string;
  title: string;
  description: string;
}

export interface SiteContent {
  hero: {
    copy: string;
    title: string;
    subTitle: string;
  };
  instructor: {
    name: string;
    role: string;
    bio: string[];
    specialty: string[];
  };
  stats: {
    companies: number;
    projects: number;
  };
  pricing: {
    online: {
      date: string;
      time: string;
      price: string;
    };
    offline: {
      date: string;
      time: string;
      location: string;
      price: string;
    };
    bankInfo: string;
  };
  benefits: {
    offline: string[];
    online: string[];
    aftercare: string[];
  };
  refundPolicy: {
    online: { title: string; lines: string[] };
    offline: { title: string; notice: string; lines: string[] };
  };
  notices: string[];
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'online' | 'offline';
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  background: string;
}
