const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

/** DD.MMM.YYYY format (e.g. 29.JUL.2026) matching designerdada.com */
export function formatPostDate(publishedAt: string) {
  const date = new Date(publishedAt);
  if (isNaN(date.getTime())) return publishedAt;
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS[date.getMonth()] ?? "OCT";
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
