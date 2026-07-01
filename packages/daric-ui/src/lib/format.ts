/** Format a numeric price with a currency symbol (e.g. "$", "€"). */
export function formatPrice(value: number, symbol: string) {
  return `${symbol}${value % 1 === 0 ? value.toLocaleString("en-US") : value.toFixed(2)}`;
}
