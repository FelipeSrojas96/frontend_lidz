import Link from "next/link";
import { Client } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface ClientCardProps {
  client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <Link href={`/clients/${client.id}`} className="block no-underline">
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{client.name}</h2>
          <p className="text-sm text-gray-500 mt-1">RUT: {client.rut}</p>
        </div>

        {/* Info */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500">Salario</span>
            <span className="text-sm font-semibold text-gray-800">{formatCurrency(client.salary)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Ahorros</span>
            <span className="text-sm font-semibold text-gray-800">{formatCurrency(client.savings)}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-end">
          <span className="text-sm font-medium text-blue-600">Ver detalle →</span>
        </div>
      </div>
    </Link>
  );
}
