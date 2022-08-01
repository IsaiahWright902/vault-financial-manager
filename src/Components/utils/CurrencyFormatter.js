class CurrencyFormatter {
  format(amount) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
}

export const currencyFormatter = new CurrencyFormatter();
