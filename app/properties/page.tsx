import { getProperties } from "@/lib/api";
import PropertyList from "@/components/properties/PropertyList";

export const dynamic = "force-dynamic";

export default async function PropertiesPage() {
  const properties = await getProperties();
  return <PropertyList properties={properties} />;
}
