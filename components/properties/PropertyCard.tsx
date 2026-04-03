import { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
}

const TYPE_LABEL: Record<Property["type"], string> = {
  departamento: "Departamento",
  casa: "Casa",
  terreno: "Terreno",
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{property.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {property.commune}, {property.city}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-medium bg-blue-50 text-blue-700 rounded-full px-3 py-1">
            {TYPE_LABEL[property.type]}
          </span>
          {property.available ? (
            <span className="text-xs font-medium bg-green-50 text-green-700 rounded-full px-3 py-1">
              Disponible
            </span>
          ) : (
            <span className="text-xs font-medium bg-red-50 text-red-700 rounded-full px-3 py-1">
              No disponible
            </span>
          )}
        </div>
      </div>

      {/* Price */}
      <p className="text-2xl font-bold text-gray-800 mb-4">
        {property.priceUF.toLocaleString("es-CL")} UF
      </p>

      {/* Specs */}
      <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-lg p-3 mb-4">
        <div>
          <p className="text-xs text-gray-500">Dormitorios</p>
          <p className="font-semibold text-gray-800">{property.bedrooms}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Baños</p>
          <p className="font-semibold text-gray-800">{property.bathrooms}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">m²</p>
          <p className="font-semibold text-gray-800">{property.sqMeters}</p>
        </div>
      </div>

      {/* Extras */}
      <div className="flex gap-2">
        {property.hasParking && (
          <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
            Estacionamiento
          </span>
        )}
        {property.hasBodega && (
          <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
            Bodega
          </span>
        )}
      </div>

      {/* Description */}
      {property.description && (
        <p className="text-sm text-gray-500 mt-4 line-clamp-2">{property.description}</p>
      )}
    </div>
  );
}
