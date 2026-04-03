import { Client } from "@/lib/types";
import ClientCard from "./ClientCard";
import Link from "next/link";

interface ClientListProps {
  clients: Client[];
}

export default function ClientList({ clients }: ClientListProps) {
  return (
    <div>
      <Link href="/" className="text-blue-600 underline text-sm mb-6 block">
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Listado de Clientes</h1>
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}
      >
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}
