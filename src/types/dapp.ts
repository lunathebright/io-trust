export interface IDapp {
  id: string;
  name: string;
  icon: string;
  url: string;
  description: {
    en?: string;
    ko?: string;
  };
  networks?: string[];
  visibleFor?: {
    languages?: string[];
    platforms?: string[];
    environments?: string[];
  };
}
