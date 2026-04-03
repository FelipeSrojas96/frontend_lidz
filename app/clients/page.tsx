import { getClients } from "@/lib/api";
import ClientList from "@/components/clients/ClientList";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const clients = await getClients();
  return <ClientList clients={clients} />;
}
