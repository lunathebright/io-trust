"use client";
import { useLang } from "./useLang";
import { usePlatform } from "./usePlatform";
import { useEnv } from "./useEnv";

export interface IVisibleFor {
  languages?: ("ko" | "en")[];
  platforms?: ("ios" | "android" | "web")[];
  environments?: ("dev" | "stage" | "prod")[];
}

export function useVisible<T extends { visibleFor?: IVisibleFor }>(
  items: T[]
): T[] {
  const { crrLng } = useLang();
  const platform = usePlatform();
  const environment = useEnv();

  return items.filter((item) => {
    const visible = item.visibleFor;

    return (
      (!visible?.languages || visible.languages.includes(crrLng)) &&
      (!visible?.platforms || visible.platforms.includes(platform)) &&
      (!visible?.environments || visible.environments.includes(environment))
    );
  });
}
