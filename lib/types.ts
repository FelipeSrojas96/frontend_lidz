export interface Client {
  id: number;
  name: string;
  rut: string;
  salary: number;
  savings: number;
}

export interface Message {
  id: number;
  text: string;
  sentAt: string;
  role: "client" | "agent";
}

export interface Debt {
  id: number;
  amount: number;
  institution: string;
  dueDate: string;
}

export interface ClientDetail extends Client {
  score: number;
  messages: Message[];
  debts: Debt[];
}

export interface Property {
  id: number;
  title: string;
  type: "departamento" | "casa" | "terreno";
  commune: string;
  city: string;
  priceUF: number;
  bedrooms: number;
  bathrooms: number;
  sqMeters: number;
  hasParking: boolean;
  hasBodega: boolean;
  description: string | null;
  available: boolean;
}
