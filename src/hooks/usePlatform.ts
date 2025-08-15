"use client";
import { useState, useEffect } from "react";

type Platform = "ios" | "android" | "web";

export function usePlatform(): Platform {
  const [platform, setPlatform] = useState<Platform>("web");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(userAgent)) setPlatform("ios");
    else if (/Android/.test(userAgent)) setPlatform("android");
    else setPlatform("web");
  }, []);

  return platform;
}
