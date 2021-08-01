export const getTotal = (itemsList) =>
  itemsList.reduce((acc, { amount }) => acc + Number(amount), 0);

export const formatValue = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const getIncomePerc = (value, total_incomes, total_expenses) => {
  const total = total_incomes - total_expenses;
  return (value / total) * 100;
};
