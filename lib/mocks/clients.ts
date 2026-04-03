import { Client, ClientDetail } from "../types";

export const mockClients: Client[] = [
  { id: 1, name: "Juan Perez", rut: "11.111.111-1", salary: 1000000, savings: 5000000, score: 40 },
  { id: 2, name: "Pedro Soto", rut: "21.111.111-1", salary: 800000, savings: 7000000, score: 75 },
  { id: 3, name: "María García", rut: "31.111.111-1", salary: 1200000, savings: 3000000, score: 85 },
];

export const mockClientsDetail: Record<number, ClientDetail> = {
  1: {
    id: 1,
    name: "Juan Perez",
    rut: "11.111.111-1",
    salary: 1000000,
    savings: 5000000,
    score: 40,
    messages: [
      { id: 1, text: "Hola, quiero comprar un dpto", sentAt: "2023-12-24T00:00:00.000Z", role: "client" },
      { id: 2, text: "Perfecto, te puedo ayudar con eso", sentAt: "2023-12-24T00:01:00.000Z", role: "agent" },
    ],
    debts: [
      { id: 1, amount: 1000000, institution: "Banco Estado", dueDate: "2023-12-24T00:00:00.000Z" },
    ],
  },
  2: {
    id: 2,
    name: "Pedro Soto",
    rut: "21.111.111-1",
    salary: 800000,
    savings: 7000000,
    score: 75,
    messages: [
      { id: 1, text: "Necesito un crédito de consumo", sentAt: "2023-12-20T10:00:00.000Z", role: "client" },
      { id: 2, text: "Claro, déjame revisar tu perfil", sentAt: "2023-12-20T10:05:00.000Z", role: "agent" },
    ],
    debts: [],
  },
  3: {
    id: 3,
    name: "María García",
    rut: "31.111.111-1",
    salary: 1200000,
    savings: 3000000,
    score: 85,
    messages: [
      { id: 1, text: "¿Qué productos financieros tienen?", sentAt: "2023-12-22T14:30:00.000Z", role: "client" },
    ],
    debts: [
      { id: 1, amount: 500000, institution: "Banco Santander", dueDate: "2024-01-15T00:00:00.000Z" },
    ],
  },
};
