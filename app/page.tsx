import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 pt-20 text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Sistema de Gestión de Clientes
      </h1>
      <p className="text-xl text-gray-500">
        Visualiza información detallada de tus clientes
      </p>
      <div className="flex gap-4">
        <Link
          href="/clients"
          className="bg-blue-600 text-white font-semibold rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors"
        >
          Ver Clientes
        </Link>
        <Link
          href="/properties"
          className="bg-blue-600 text-white font-semibold rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors"
        >
          Ver Propiedades
        </Link>
      </div>
    </div>
  );
}
