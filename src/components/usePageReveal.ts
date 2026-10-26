import { useEffect } from "react";

/** Staggered reveals as sections enter the viewport, not on first paint. */
export function usePageReveal() {
  useEffect(() => {
    const nodes = () => document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)");
    if (typeof IntersectionObserver === "undefined") {
      nodes().forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    const observe = () => nodes().forEach((n) => io.observe(n));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
