import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

type Props = {
  params: Promise<{ "service-name": string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    "service-name": service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "service-name": slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Claude Monet Salon & Spa`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { "service-name": slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail slug={slug} />;
}
