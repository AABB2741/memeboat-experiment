export function beautifyNumber(number: number) {
  return Intl.NumberFormat("pt-BR", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(number);
}
