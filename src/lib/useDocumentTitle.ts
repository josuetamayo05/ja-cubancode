import { useEffect } from "react";
import { siteData } from "../data/siteData";

const DEFAULT_TITLE = "JA CubanCode | Josué Tamayo, desarrollador full stack";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteData.person.name}` : DEFAULT_TITLE;
  }, [title]);
}
