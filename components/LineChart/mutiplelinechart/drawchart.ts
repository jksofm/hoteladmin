"use client";
import * as d3 from "d3";
import { nest } from "d3-collection";

import {
  ScaleTime,
  ScaleLinear,
  ScaleOrdinal,
  Line,
  Selection,
  DSVRowString,
  Axis,
} from "d3";
import { ReservationForecastModel } from "@/models/reservation";
import { MouseEvent } from "react";

export const drawChart = (
  data: ReservationForecastModel[],
  legendAxisY: any,

  startDate: string,
  endDate: string,
  width: number | string,
  height: number | string
) => {
  // Data

  // Margins
  const margins = { top: 20, right: 20, bottom: 30, left: 30 };

  const svg: Selection<d3.BaseType, unknown, HTMLElement, any> = d3
    .select("#chart")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr(
      "style",
      "max-width: 100%; height: auto; overflow: visible; font: 10px sans-serif;overscroll-behavior-x:auto"
    );
  // console.log(data);

  const xScale = d3.scaleUtc(
    [new Date(startDate), new Date(endDate)],
    [margins.left, (width as number) - margins.right]
  );

  const yScale: ScaleLinear<number, number> = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value as number) as any])
    .nice()
    .range([(height as number) - margins.bottom, margins.top]);

  // const xAxis: Axis<{}> = d3.axisBottom(xScale);
  const yAxis: Axis<d3.NumberValue> = d3.axisLeft(yScale);

  // const parseTime = d3.timeFormat(dateFormat);

  svg
    .append("g")
    .attr("transform", `translate(0,${(height as number) - margins.bottom})`)
    .call(
      d3
        .axisBottom(xScale)
        .ticks((width as number) / 100)
        .tickSizeOuter(0)
    );

  svg
    .append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + margins.left + ",0)")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("fill", "#000")
    .attr("y", 10)
    .text(legendAxisY);

  //   .line()
  //   .x(function (d) {
  //     return xScale(d.date);
  //   })
  //   .y(function (d) {
  //     return yScale(d.value);
  //   });

  // svg
  //   .append("svg:path")
  //   .attr("d", lineGen(data))
  //   .attr("stroke", "green")
  //   .attr("stroke-width", 2)
  //   .attr("fill", "none");
  const points = data.map((d) => [
    xScale(new Date(d.date)),
    yScale(d.value as number),
    d.division,
  ]);
  // console.log(points);
  const groups = d3.rollup(
    points,
    (v) => Object.assign(v, { z: v[0][2] }),
    (d) => d[2]
  );
  // console.log(groups.values());
  // Draw the lines.
  const line = d3.line();
  const path = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .selectAll("path")
    .data(groups.values())
    .join("path")
    .style("mix-blend-mode", "multiply")
    .attr("d", line as any);

  // Add an invisible layer for the interactive tip.
  const dot = svg.append("g").attr("display", "none");

  dot.append("circle").attr("r", 2.5);

  dot.append("text").attr("text-anchor", "middle").attr("y", -8);

  svg
    .on("pointerenter", pointerentered)
    .on("pointermove", pointermoved)
    .on("pointerleave", pointerleft)
    .on("touchstart", (event) => event.preventDefault());
  interface PointerEvent<T = Element> extends MouseEvent<T> {
    pointerId: number;
    pressure: number;
    tangentialPressure: number;
    tiltX: number;
    tiltY: number;
    twist: number;
    width: number;
    height: number;
    pointerType: "mouse" | "pen" | "touch";
    isPrimary: boolean;
  }
  function pointermoved(event: PointerEvent) {
    const [xm, ym] = d3.pointer(event);
    const i = d3.leastIndex(points, ([x, y]) =>
      Math.hypot((x as any) - xm, (y as any) - ym)
    );
    const [x, y, k] = points[i as any];
    path
      .style("stroke", ({ z }) => (z === k ? null : "#ddd"))
      .filter(({ z }) => z === k)
      .raise();
    dot.attr("transform", `translate(${x},${y})`);
    dot.select("text").text(k);
    (svg.property("value", data[i as any]) as any).dispatch("input", {
      bubbles: true,
    });
  }

  function pointerentered() {
    path.style("mix-blend-mode", null).style("stroke", "#ddd");
    dot.attr("display", null);
  }

  function pointerleft() {
    path.style("mix-blend-mode", "multiply").style("stroke", null);
    dot.attr("display", "none");
    // svg.node().value = null;
    (svg as any).dispatch("input", { bubbles: true });
  }
};
