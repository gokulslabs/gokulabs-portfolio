import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/web")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$slug", params: { slug: "web-development" }, replace: true });
  },
});
