import ForecastChart from "@/components/ForecastChart";
import Header from "@/components/Header";

import React from "react";
import { parse } from "papaparse";
import * as d3 from "d3";
import LineChartTest from "@/components/LineChartTest/mutiplelinechart/LineChart";

async function ReservationForecast() {
  d3.csv(
    "https://gist.githubusercontent.com/jksofm/416313cb68709557e71dae1b6e664040/raw/e063e7d9f29a75df586611d606dc41ffc4663b56/forecast_this_month.csv"
  ).then((data) => {
    console.log(data);
  });

  return (
    <div>
      <Header title="Reservation Forecast" />
      {/* <ForecastChart /> */}
      {/* <LineChartTest dateFormat="%Y%m%d" height="500" legendAxisY="Price, €" /> */}
    </div>
  );
}

export default ReservationForecast;
