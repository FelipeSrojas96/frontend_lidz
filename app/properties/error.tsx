"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
}

export default function PropertiesError({ error }: ErrorProps) {
  return (
    <div>
      <Link href="/" className="text-blue-600 underline text-sm mb-6 block">
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Listado de Propiedades</h1>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        <p className="font-semibold">Error al cargar propiedades</p>
        <p className="text-sm mt-1">{error.message}</p>
      </div>
    </div>
  );
}
