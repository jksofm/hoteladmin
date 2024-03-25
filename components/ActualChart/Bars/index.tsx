import { chartModelData } from "@/models/actualData";

import { AxisBottomProps } from "../AxisBottom";
import { AxisLeftProps } from "../AxisLeft";

interface BarsProps {
  data: chartModelData[];
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
}

export default function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  return (
    <>
      {data.map(({ value, label }) => (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill="#006AFF"
        />
      ))}
    </>
  );
}
