"use client";
import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { t, i18n, ready } = useTranslation("common");
  const crrLng = ready ? (i18n.language as "ko" | "en") : "ko";

  return { t, i18n, crrLng, ready };
};
