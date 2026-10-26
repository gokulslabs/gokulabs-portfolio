import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/backend")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$slug", params: { slug: "saas-development" }, replace: true });
  },
});
