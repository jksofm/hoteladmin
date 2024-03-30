"use client";
import React, { useEffect, useRef, useState } from "react";
import { chartModelData } from "@/models/actualData";
import * as d3 from "d3";
import { Selection } from "d3";
const drawBarChart = ({
  data,
  legendAxisY,
  width,
  height,
}: {
  data: chartModelData[];
  legendAxisY: any;

  width: number;
  height: number;
}) => {
  const margin = { top: 30, right: 0, bottom: 30, left: 40 };

  const svg: Selection<d3.BaseType, unknown, HTMLElement, any> = d3
    .select("#ActualDataChart")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr(
      "style",
      "max-width: 100%; height: auto; overflow: visible; font: 10px sans-serif;overscroll-behavior-x:auto"
    );

  const scaleX = d3
    .scaleBand()
    .domain(
      d3.groupSort(
        data,
        ([d]) => -d.value,
        (d) => d.label
      )
    ) // descending frequency
    .range([margin.left, width - margin.right])
    .padding(0.4);

  // const scaleY = d3
  //   .scaleLinear()
  //   .domain([0, Math.max(...data.map(({ value }) => value))])
  //   .nice()
  //   .range([height as number, 0]);

  const scaleY = d3
    .scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height - margin.bottom, margin.top]);

  //   const scaleY = d3
  // .scaleLinear()
  // .domain([0, Math.max(...data.map(({ value }) => value))])

  // .range([height - margin.bottom, margin.top]);
  svg
    .append("g")
    .attr("fill", "steelblue")
    .selectAll()
    .data(data)
    .join("rect")
    .attr("x", (d) => scaleX(d.label) as any)
    .attr("y", (d) => scaleY(d.value))
    .attr("height", (d) => scaleY(0) - scaleY(d.value))
    .attr("width", scaleX.bandwidth());

  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(scaleX).tickSizeOuter(0));

  svg
    .append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(scaleY))
    // .call((g) => g.select(".domain").remove())
    .call((g) =>
      g
        .append("text")
        .attr("x", -margin.left)
        .attr("y", 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Dollar($)")
    );
};

export default drawBarChart;
