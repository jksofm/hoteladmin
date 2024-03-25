"use client";
import { axisBottom, select } from "d3";
import React, { useEffect, useRef } from "react";
export interface AxisBottomProps {
  scale: d3.ScaleBand<string>;
  transform: string;
}

function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

export default AxisBottom;
