import { getClientDetail } from "@/lib/api";
import ClientDetail from "@/components/clients/ClientDetail";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ClientDetailPage({ params }: Props) {
  const { id } = await params;
  let client;
  try {
    client = await getClientDetail(parseInt(id));
  } catch {
    notFound();
  }
  return <ClientDetail client={client!} />;
}
