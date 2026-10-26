import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/ai")({
  beforeLoad: () => {
    throw redirect({ to: "/services/$slug", params: { slug: "ai-automation" }, replace: true });
  },
});
