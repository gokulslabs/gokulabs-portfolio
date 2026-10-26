/** Public origin for canonical URLs, structured data, and the sitemap. */
export function siteOrigin(request?: Request): string {
  const fromEnv = import.meta.env.VITE_SITE_URL;
  if (typeof fromEnv === "string" && fromEnv.length > 0) return fromEnv.replace(/\/$/, "");
  if (request) return new URL(request.url).origin;
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function canonical(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const origin = siteOrigin();
  return origin ? `${origin}${normalized}` : normalized;
}
