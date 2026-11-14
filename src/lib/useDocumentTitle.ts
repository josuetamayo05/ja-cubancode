import { useEffect } from "react";
import { siteData } from "../data/siteData";

const DEFAULT_TITLE = `${siteData.person.name} · ${siteData.person.role} | ${siteData.brand.name}`;

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteData.person.name}` : DEFAULT_TITLE;
  }, [title]);
}
