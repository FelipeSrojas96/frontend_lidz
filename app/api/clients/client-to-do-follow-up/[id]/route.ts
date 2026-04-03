import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const response = await fetch(`${BASE_URL}/clients/client-to-do-follow-up/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
