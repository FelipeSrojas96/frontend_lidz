import { ClientDetail as ClientDetailType } from "@/lib/types";
import { formatCurrency, formatDate, getScoreColors } from "@/lib/utils";
import Link from "next/link";
import MessageThread from "./MessageThread";

interface ClientDetailProps {
  client: ClientDetailType;
}

export default function ClientDetail({ client }: ClientDetailProps) {
  const colors = getScoreColors(client.score);

  return (
    <div className="space-y-8">
      <Link href="/clients" className="text-blue-600 underline">
        ← Volver a clientes
      </Link>

      {/* Información Principal */}
      <section className="bg-white p-6 rounded-lg border border-gray-300">
        <h1 className="text-3xl font-bold mb-4">{client.name}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-600 text-sm">RUT</p>
            <p className="font-semibold">{client.rut}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Score Crediticio</p>
            <p className={`font-bold text-lg ${colors.detail}`}>{client.score}/100</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Salario</p>
            <p className="font-semibold">{formatCurrency(client.salary)}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Ahorros</p>
            <p className="font-semibold">{formatCurrency(client.savings)}</p>
          </div>
        </div>
      </section>

      {/* Deudas */}
      <section className="bg-white p-6 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Deudas</h2>
        {client.debts.length === 0 ? (
          <p className="text-green-600 font-semibold">✓ Sin deudas registradas</p>
        ) : (
          <div className="space-y-3">
            {client.debts.map((debt) => (
              <div key={debt.id} className="p-4 border border-red-200 bg-red-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold">{debt.institution}</span>
                  <span className="text-red-600 font-bold">{formatCurrency(debt.amount)}</span>
                </div>
                <p className="text-sm text-gray-600">Vencimiento: {formatDate(debt.dueDate)}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Historial de Mensajes */}
      <section className="bg-white p-6 rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Historial de Mensajes</h2>
        <MessageThread clientId={client.id} initialMessages={client.messages} />
      </section>
    </div>
  );
}
