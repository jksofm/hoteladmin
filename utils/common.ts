export const ConvertNumberToMoney = (number: number) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");

  return dollarUSLocale.format(number);
};
