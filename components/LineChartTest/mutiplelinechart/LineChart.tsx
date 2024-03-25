"use client";
import * as React from "react";
import * as d3 from "d3";
import {
  ScaleTime,
  ScaleLinear,
  ScaleOrdinal,
  Line,
  Selection,
  DSVRowString,
  Axis,
} from "d3";
import { dataHardcoded } from "./dataHardCoded";
import { drawChart } from "./drawchart";
import { arrayTansform } from "./transform";

interface Props {
  tsvPath?: string;
  csvPath?: string;
  dateFormat?: string;
  height?: string;
  legendAxisY: string;
  width?: string;
}

const LineChartTest = ({
  legendAxisY,
  csvPath,
  dateFormat,
  height,
  tsvPath,
  width = 400,
}: Props) => {
  React.useEffect(() => {
    if (tsvPath !== void 0) {
      d3.tsv(tsvPath, (error, data) => {
        const dataTransformed = arrayTansform(data, dateFormat);
        drawChart(dataTransformed, legendAxisY, height, dateFormat);
      });
    } else if (csvPath !== void 0) {
      d3.csv(csvPath, (error, data) => {
        const dataTransformed = arrayTansform(data, dateFormat);
        drawChart(dataTransformed, legendAxisY, height, dateFormat);
      });
    } else {
      // Hardcoded data
      drawChart(dataHardcoded, legendAxisY, height, dateFormat);
    }
  }, []);

  return (
    <div className="flex items-center justify-center pt-24">
      <svg id="chart"></svg>
    </div>
  );
};

export default LineChartTest;
