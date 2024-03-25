import { dataCardModel } from "@/models/actualData";
import React from "react";

export default function DataCard({ data }: { data: dataCardModel }) {
  return (
    <div className="custom:text-left text-center flex flex-col justify-center pb-16 pt-4 px-4 bg-white shadow-lg solid rounded-lg">
      <p className="text-small-regular text-slate-400 mb-6">{data.text}</p>
      <p className="text-body-bold mt-4">{data.number}</p>
    </div>
  );
}
