import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { serviceBySlug, type ServiceSlug } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceRoute,
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.name} — Gokul Labs` : "Services — Gokul Labs";
    const description = s?.tagline ?? "Software engineering services from Gokul Labs.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
});

function ServiceRoute() {
  const { service } = Route.useLoaderData();
  return <ServiceDetailPage slug={service.slug as ServiceSlug} />;
}
