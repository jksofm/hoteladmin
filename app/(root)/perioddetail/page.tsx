import Header from "@/components/Header";
import NestedTable from "@/components/NestedTable";
import { periodDetailData } from "@/constants";
import React from "react";

function PeriodDetail() {
  return (
    <div>
      <Header title="Period Data" />
      <NestedTable />
    </div>
  );
}

export default PeriodDetail;
