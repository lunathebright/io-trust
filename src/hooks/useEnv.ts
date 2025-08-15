"use client";
import { useState, useEffect } from "react";

type Environment = "dev" | "stage" | "prod";

export function useEnv(): Environment {
  const [environment, setEnvironment] = useState<Environment>("dev");

  useEffect(() => {
    const env = process.env.NEXT_PUBLIC_ENVIRONMENT as Environment | undefined;
    if (env === "prod" || env === "stage" || env === "dev") {
      setEnvironment(env);
    } else {
      setEnvironment("dev");
    }
  }, []);

  return environment;
}
