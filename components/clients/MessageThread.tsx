"use client";

import { useState, useEffect, useRef } from "react";
import { Message } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { sendFollowUp } from "@/lib/api";

interface MessageThreadProps {
  clientId: number;
  initialMessages: Message[];
}

export default function MessageThread({ clientId, initialMessages }: MessageThreadProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadingRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    async function sendAutoFollowUp() {
      if (loadingRef.current) return;
      loadingRef.current = true;
      setLoading(true);
      try {
        const agentMessage = await sendFollowUp(clientId, "");
        if (!agentMessage.text?.trim()) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return;
        }
        setMessages((prev) => [...prev, agentMessage]);
      } catch {
        // silently ignore auto follow-up errors
      } finally {
        loadingRef.current = false;
        setLoading(false);
      }
    }

    intervalRef.current = setInterval(sendAutoFollowUp, 60_000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [clientId]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sentAt: new Date().toISOString(),
      role: "client",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    loadingRef.current = true;
    setLoading(true);
    setError(null);

    try {
      const agentMessage = await sendFollowUp(clientId, text);
      console.log(agentMessage)
      setMessages((prev) => [...prev, agentMessage]);
    } catch {
      setError("No se pudo enviar el mensaje. Intenta nuevamente.");
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div>
      {messages.length === 0 && !loading ? (
        <p className="text-gray-500 mb-4">No hay mensajes</p>
      ) : (
        <div className="space-y-3 mb-4">
          {messages.map((msg, index) => (
            <div
              key={msg.id ?? index}
              className={`p-4 rounded-lg ${
                msg.role === "client"
                  ? "bg-blue-50 border-l-4 border-blue-600"
                  : "bg-gray-50 border-l-4 border-gray-600"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-sm">
                  {msg.role === "client" ? "Cliente" : "Agente"}
                </span>
                <span className="text-xs text-gray-500">{formatDate(msg.sentAt)}</span>
              </div>
              <p className="text-gray-800">{msg.text}</p>
            </div>
          ))}
          {loading && (
            <div key="typing-indicator" className="p-4 rounded-lg bg-gray-50 border-l-4 border-gray-300">
              <span className="text-sm text-gray-400">Agente escribiendo...</span>
            </div>
          )}
        </div>
      )}

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe un mensaje..."
          disabled={loading}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
