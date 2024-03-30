"use client";
import React, { useEffect, useRef, useState } from "react";

import { actualChartData } from "@/constants";

import drawBarChart from "./drawBarChart";

function ActualChart() {
  React.useEffect(() => {
    // Hardcoded data
    drawBarChart({
      data: actualChartData,
      height: 300,
      legendAxisY: "Dollar",
      width: 450,
    });
  }, []);
  console.log(actualChartData);
  return (
    <div className="flex flex-col lg:gap-8 gap-4 items-center justify-center py-6 lg:py-4 xl:py-0 bg-[#f8f7f1] mt shadow-lg">
      <p className="text-small-regular text-slate-400">TOTAL REVENUE</p>
      <svg id="ActualDataChart"></svg>
    </div>
  );
}

export default ActualChart;
