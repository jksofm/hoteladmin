"use client";
import * as React from "react";

import { drawChart } from "./drawchart";

import { ReservationForecastModel } from "@/models/reservation";

interface Props {
  tsvPath?: string;
  csvPath?: string;
  dateFormat?: string;
  height?: number | string;
  legendAxisY: string;
  width?: number;

  data: ReservationForecastModel[];
  choose: number;
  startDate: string;
  endDate: string;
}

const LineChart = ({
  legendAxisY,
  csvPath,
  dateFormat,
  height = 500,
  tsvPath,
  data,
  choose,
  startDate,
  endDate,
  width = 1000,
}: Props) => {
  React.useEffect(() => {
    // Hardcoded data
    drawChart(data, legendAxisY, startDate, endDate, width, height);
  }, [choose]);

  return (
    <div className="flex items-center justify-center overscroll-y-auto overflow-x-auto overscroll-x-auto">
      <svg id="chart"></svg>
    </div>
  );
};

export default LineChart;
