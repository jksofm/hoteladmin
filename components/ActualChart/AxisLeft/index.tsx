import { axisLeft, select } from "d3";
import { useEffect, useRef } from "react";

export interface AxisLeftProps {
  scale: d3.ScaleLinear<number, number, never>;
}

export default function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}
