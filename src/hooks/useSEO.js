import { useEffect } from "react";

const BASE_URL = "https://oliwka.art";

/**
 * Custom SEO hook — sets document title, meta tags, OG/Twitter cards,
 * canonical link, and injects JSON-LD structured data.
 * Cleans up dynamic tags on unmount so each route gets its own SEO.
 */
const useSEO = ({ title, description, canonical, ogImage, jsonLd } = {}) => {
  useEffect(() => {
    const cleanupTags = [];

    // --- Title ---
    const prevTitle = document.title;
    if (title) document.title = title;

    // --- Helper to set/create a <meta> tag ---
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        cleanupTags.push(el);
      }
      el.setAttribute("content", content);
    };

    // --- Meta description ---
    if (description) {
      setMeta("name", "description", description);
    }

    // --- Canonical ---
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (link) {
        link.setAttribute("href", canonical);
      }
    }

    // --- Open Graph ---
    if (title) setMeta("property", "og:title", title);
    if (description) setMeta("property", "og:description", description);
    if (ogImage) setMeta("property", "og:image", ogImage);
    if (canonical) setMeta("property", "og:url", canonical);

    // --- Twitter Card ---
    if (title) setMeta("name", "twitter:title", title);
    if (description) setMeta("name", "twitter:description", description);
    if (ogImage) setMeta("name", "twitter:image", ogImage);

    // --- JSON-LD ---
    let scriptEl = null;
    if (jsonLd) {
      scriptEl = document.createElement("script");
      scriptEl.type = "application/ld+json";
      scriptEl.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(scriptEl);
    }

    return () => {
      document.title = prevTitle;
      cleanupTags.forEach((el) => el.remove());
      if (scriptEl) scriptEl.remove();
    };
  }, [title, description, canonical, ogImage, jsonLd]);
};

export { BASE_URL };
export default useSEO;
