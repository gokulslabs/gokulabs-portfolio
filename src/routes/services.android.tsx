import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/android")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$slug", params: { slug: "mobile-apps" }, replace: true });
  },
});
