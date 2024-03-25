"use client";

import { select, selectAll, transition } from "d3";
import { useEffect, useRef } from "react";

const Line = ({ lineGenerator, xScale, yScale, data }) => {
  const ref = useRef(null);
  const updateChart = () => {
    const t = transition().duration(1000);

    const line = select("#line");
    const dot = selectAll(".circle");

    line.datum(data).transition(t).attr("d", lineGenerator);

    // dot
    //   .data(data)
    //   .transition(t)
    //   .attr('cx', (d, key) => xScale(key))
    //   .attr('cy', d => yScale(d.count));
  };
  useEffect(() => {
    const node = ref.current;

    const initialData = data.map((d) => ({
      name: d.name,
      value: 0,
    }));

    select(node)
      .append("path")
      .datum(initialData)
      .attr("id", "line")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("fill", "none")
      .attr("d", lineGenerator);

    updateChart();
  }, []);
  return <g className="line-group" ref={ref} />;
};

export default Line;
