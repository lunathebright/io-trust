import { IVisibleFor } from "./common";

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
  visibleFor?: IVisibleFor;
}
