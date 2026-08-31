/**
 * Utility to merge class names conditionally.
 */
export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Format a date string (YYYY-MM or YYYY) to a readable format.
 */
export function formatDate(dateStr: string): string {
  if (dateStr.length === 4) return dateStr; // Just year

  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/**
 * Get the date range string for experience/education.
 */
export function getDateRange(
  startDate: string,
  endDate?: string,
  current?: boolean
): string {
  const start = formatDate(startDate);
  if (current) return `${start} — Present`;
  if (!endDate) return start;
  return `${start} — ${formatDate(endDate)}`;
}
