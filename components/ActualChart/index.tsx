"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { transition } from "d3-transition";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Bars from "./Bars";
import { actualChartData } from "@/constants";
import { useMediaQuery } from "usehooks-ts";
import { LocalGasStation } from "@mui/icons-material";

function ActualChart() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const refSvg = useRef(null);
  // let width = 0;
  // let height = 0;

  const margin = { top: 10, right: 0, bottom: 20, left: 60 };

  const isxl = useMediaQuery("(min-width: 1380px)");

  const islg = useMediaQuery("(min-width: 1120px) and (max-width: 1379px)");
  const ismd = useMediaQuery("(min-width: 896px) and (max-width: 1119px)");
  const issm = useMediaQuery("(min-width: 696px) and (max-width: 895px)");
  const isxs = useMediaQuery("(min-width: 469px) and (max-width: 698px)");

  useEffect(() => {
    if (isxl) {
      setWidth(550 - margin.left - margin.right);
      setHeight(350 - margin.top - margin.bottom);
    }
    if (islg) {
      setWidth(500 - margin.left - margin.right);
      setHeight(350 - margin.top - margin.bottom);
    }
    if (ismd) {
      setWidth(450 - margin.left - margin.right);
      setHeight(350 - margin.top - margin.bottom);
    }
    if (issm) {
      setWidth(400 - margin.left - margin.right);
      setHeight(300 - margin.top - margin.bottom);
    }
    if (isxs) {
      setWidth(350 - margin.left - margin.right);
      setHeight(300 - margin.top - margin.bottom);
    } else {
      setWidth(300 - margin.left - margin.right);
      setHeight(250 - margin.top - margin.bottom);
    }
  }, [isxl, islg, ismd, issm, isxs]);

  const svg = d3
    .select(refSvg.current)
    .attr("style", "max-width: 100%; height: auto");
  const scaleX = d3
    .scaleBand()
    .domain(actualChartData.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  // const scaleY = d3
  //   .scaleLinear()
  //   .domain([0, Math.max(...actualChartData.map(({ value }) => value))])
  //   .range([height, 0]);

  const scaleY = d3
    .scaleLinear()
    .domain([0, Math.max(...actualChartData.map(({ value }) => value))])

    .range([height, 0]);

  svg.call((g) =>
    g
      .append("text")
      .attr("x", margin.left - 45)
      .attr("y", 12)
      .style("font-size", "10px")
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text("USD ($)")
  );
  return (
    <div className="flex flex-col lg:gap-8 gap-4 items-center justify-center py-6 lg:py-4 xl:py-0 bg-[#f8f7f1] mt shadow-lg">
      <p className="text-small-regular text-slate-400">TOTAL REVENUE</p>
      <svg
        ref={refSvg}
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
          <AxisLeft scale={scaleY} />
          <Bars
            data={actualChartData}
            height={height}
            scaleX={scaleX}
            scaleY={scaleY}
          />
        </g>
      </svg>
    </div>
  );
}

export default ActualChart;
