import React from "react";
import DataCard from "../DataCard";
import { actualdata } from "@/constants";
import { dataCardModel } from "@/models/actualData";
import { ConvertNumberToMoney } from "@/utils/common";
function TotalData() {
  const newArr = actualdata.slice(1);
  const Data: dataCardModel[] = [
    {
      id: 1,
      text: "TOTAL REVENUE",
      number: `${ConvertNumberToMoney(
        newArr.reduce(
          (prev, current) => prev + (current.totalrevenue as number),
          0
        )
      )} USD`,
    },
    {
      id: 2,
      text: "ROOM REVENUE",
      number: `${ConvertNumberToMoney(
        newArr.reduce(
          (prev, current) => prev + (current.roomrevenue as number),
          0
        )
      )} USD`,
    },
    {
      id: 3,
      text: "F&B REVENUE",
      number: `${ConvertNumberToMoney(
        newArr.reduce(
          (prev, current) => prev + (current.fbrevenue as number),
          0
        )
      )} USD`,
    },
    {
      id: 4,
      text: "OTHER REVENUE",
      number: `${ConvertNumberToMoney(
        newArr.reduce(
          (prev, current) => prev + (current.otherrevenue as number),
          0
        )
      )} USD`,
    },
    // {
    //   id: 5,
    //   text: "OCCUPANCY (%)",
    //   number: newArr.reduce(
    //     (prev, current) => prev + (current.occupancy as number),
    //     0
    //   ),
    // },
    // {
    //   id: 5,
    //   text: "ADR",
    //   number: newArr.reduce(
    //     (prev, current) => prev + (current.adr as number),
    //     0
    //   ),
    // },
  ];
  return (
    <div className="bg-[#f8f7f1] solid px-12 py-8 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
      {Data.map((item: dataCardModel) => {
        return <DataCard key={item.text} data={item} />;
      })}
    </div>
  );
}

export default TotalData;
