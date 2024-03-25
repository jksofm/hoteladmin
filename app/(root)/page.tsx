import ActualChart from "@/components/ActualChart";
import ActualDataDetail from "@/components/ActualDataDetail";

import AutoCompleteSearhbar from "@/components/AutocompleteSearchbar";
import Header from "@/components/Header";

import TotalData from "@/components/TotalData";
import Image from "next/image";

export default function ActualData() {
  return (
    <div>
      <Header title="Actual Data" />
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <TotalData />
        <ActualChart />
      </div>

      <ActualDataDetail />
    </div>
  );
}
