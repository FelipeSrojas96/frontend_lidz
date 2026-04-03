export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(value);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getScoreColors(score: number) {
  if (score >= 70)
    return {
      bar: "bg-green-500",
      badge: "bg-green-50",
      badgeText: "text-green-700",
      detail: "text-green-600",
    };
  if (score >= 50)
    return {
      bar: "bg-yellow-500",
      badge: "bg-yellow-50",
      badgeText: "text-yellow-700",
      detail: "text-yellow-600",
    };
  return {
    bar: "bg-red-500",
    badge: "bg-red-50",
    badgeText: "text-red-700",
    detail: "text-red-600",
  };
}
