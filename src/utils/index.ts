import { IVisibleFor } from "@/types/common";

export function filterVisibleItems<T extends { visibleFor?: IVisibleFor }>(
  items: T[],
  language: "en" | "ko",
  platform: "ios" | "android" | "web",
  environment: "dev" | "stage" | "prod"
): T[] {
  return items.filter((item) => {
    const visibleEnv = item.visibleFor;
    return (
      (!visibleEnv?.languages || visibleEnv.languages.includes(language)) &&
      (!visibleEnv?.platforms || visibleEnv.platforms.includes(platform)) &&
      (!visibleEnv?.environments ||
        visibleEnv.environments.includes(environment))
    );
  });
}

export function getEnvironment(): "dev" | "stage" | "prod" {
  const env = process.env.NEXT_PUBLIC_ENV;

  if (env === "prod" || env === "stage" || env === "dev") {
    return env;
  }

  return "dev";
}
