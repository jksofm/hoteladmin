import * as d3 from "d3";
export const ConvertNumberToMoney = (number: number) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");

  return dollarUSLocale.format(number);
};
