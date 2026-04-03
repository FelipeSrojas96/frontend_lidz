import { Property } from "@/lib/types";
import PropertyCard from "./PropertyCard";
import Link from "next/link";

interface PropertyListProps {
  properties: Property[];
}

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <div>
      <Link href="/" className="text-blue-600 underline text-sm mb-6 block">
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Listado de Propiedades</h1>
      {properties.length === 0 ? (
        <p className="text-gray-500">No hay propiedades disponibles.</p>
      ) : (
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
