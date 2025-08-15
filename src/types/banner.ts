export interface IBanner {
  id: string;
  images: {
    en: string;
    ko: string;
  };
  description?: {
    en: string;
    ko: string;
  };
  links: {
    en: string;
    ko: string;
  };
  buttonText?: {
    en: string;
    ko: string;
  };
}
