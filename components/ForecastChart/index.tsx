"use client";
import React, { Component, useRef } from "react";
import { render } from "react-dom";
import { scaleLinear, scaleBand } from "d3-scale";
// import XYAxis from './components/axis/xy-axis';
// import Line from './components/line/line';
import { line, curveMonotoneX } from "d3-shape";
import { extent } from "d3-array";
import { transition } from "d3-transition";
import XYAxis from "./XYAxis";
import Line from "./Line";

function ForecastChart() {
  const data = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 10 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 20 },
    { name: "May", value: 80 },
    { name: "Jun", value: 30 },
    { name: "July", value: 0 },
    { name: "Aug", value: 20 },
    { name: "Sep", value: 100 },
    { name: "Oct", value: 55 },
    { name: "Nov", value: 60 },
    { name: "Dec", value: 80 },
  ];
  const data1 = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 43 },
    { name: "Apr", value: 21 },
    { name: "May", value: 70 },
    { name: "Jun", value: 30 },
    { name: "July", value: 65 },
    { name: "Aug", value: 40 },
    { name: "Sep", value: 24 },
    { name: "Oct", value: 32 },
    { name: "Nov", value: 60 },
    { name: "Dec", value: 54 },
  ];
  const parentWidth = 500;

  const margins = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };
  const refSvg = useRef(null);
  const width = parentWidth - margins.left - margins.right;
  const height = 200 - margins.top - margins.bottom;

  const ticks = 5;
  const t = transition().duration(1000);
  const xScale = scaleBand()
    .domain(data.map((d) => d.name))
    .rangeRound([0, width])
    .padding(0.1);

  const yScale = scaleLinear()
    .domain(extent(data, (d) => d.value))
    .range([height, 0])
    .nice();

  const lineGenerator = line()
    .x((d) => xScale(d.name))
    .y((d) => yScale(d.value))
    .curve(curveMonotoneX);
  const lineGenerator1 = line()
    .x((d) => xScale(d.name))
    .y((d) => yScale(d.value))
    .curve(curveMonotoneX);
  return (
    <div className="shadow-lg min-h-[500px] mt-6 bg-slate-400 flex items-center justify-center">
      <svg
        className="lineChartSvg"
        width={width + margins.left + margins.right}
        height={height + margins.top + margins.bottom}
      >
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <XYAxis {...{ xScale, yScale, height, ticks, t }} />
          <Line
            data={data}
            xScale={xScale}
            yScale={yScale}
            lineGenerator={lineGenerator}
            width={width}
            height={height}
          />
          <Line
            data={data1}
            xScale={xScale}
            yScale={yScale}
            lineGenerator={lineGenerator1}
            width={width}
            height={height}
          />
        </g>
      </svg>
    </div>
  );
}

export default ForecastChart;
