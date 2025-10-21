
export const formatCurrency = (value: number): string => {
  if (isNaN(value)) return "-";
  return new Intl.NumberFormat('ar-EG', { style: 'currency', currency: 'EGP', minimumFractionDigits: 0 }).format(value);
};
