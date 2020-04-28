// Formatea la estrucutura de una fecha pasada - formato resultante: 22 abr. 2020
export function datesProcess(value) {
  let date
  date = new Date(value)
  return new Intl.DateTimeFormat('es', {year: 'numeric', month: 'short', day: '2-digit'}).format(date)
}

// Convertir valor numerico a valor moneda COP
export function formatterCurrency(value) {
  if (value === "Sin información") {
    return value
  }
  return new Intl.NumberFormat("es-CO", {minimumFractionDigits: 0, style: "currency", currency: "COP"}).format(value)
}