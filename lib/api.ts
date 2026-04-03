import { Client, ClientDetail, Message, Property } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getClients(): Promise<Client[]> {
  const response = await fetch(`${BASE_URL}/clients`);
  if (!response.ok) throw new Error(`Failed to fetch clients: ${response.status} ${response.statusText}`);
  return response.json();
}

export async function getClientDetail(id: number): Promise<ClientDetail> {
  const response = await fetch(`${BASE_URL}/clients/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch client: ${response.status} ${response.statusText}`);
  return response.json();
}

export async function getProperties(): Promise<Property[]> {
  const response = await fetch(`${BASE_URL}/properties`);
  if (!response.ok) throw new Error(`Failed to fetch properties: ${response.status} ${response.statusText}`);
  return response.json();
}

export async function sendFollowUp(clientId: number, message: string): Promise<Message> {
  const response = await fetch(`/api/clients/client-to-do-follow-up/${clientId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!response.ok) throw new Error("Failed to send message");
  return response.json();
}
