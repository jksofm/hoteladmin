"use client";
import React, { useRef, useState } from "react";
import {
  OutletModel,
  PeriodDetailModel,
  PeriodModel,
  RecordModel,
} from "@/models/periodData";
import { useDownloadExcel } from "react-export-table-to-excel";
import { DataPeriod } from "@/constants";
import TableRows from "./TableRows";
const NestedTable = () => {
  const tableRef = useRef<null | HTMLTableElement>(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Period Data",
    sheet: "Data",
  });

  return (
    <div className="flex flex-col gap-8 pb-0 pt-5 md:pb-[200px] md:pt-18">
      <div className="w-full h-auto bg-white flex flex-col items-center justify-center pt-0 md:pt-10 md:px-5 px-3 lg:px-15">
        <div className="w-full xl 3xl:max-w-7xl 2xl:max-w-7xl lg:max-w-5xl custom:max-w-[57rem] max-w-[20rem] sm:max-w-[35rem] px-2">
          {/* <h1 className="text-2xl font-medium">Period Data</h1> */}
          <div className="w-full overflow-x-scroll md:overflow-auto  max-w-max 2xl:max-w-none lg:py-0 mt-2">
            <table
              ref={tableRef}
              className="tablePeriod table-auto text-subtle-medium lg:text-small-regular overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-0 border"
            >
              <thead className="bg-primary-500/[50%] rounded-lg text-white font-semibold w-full text-center">
                <td className="">{""}</td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Date
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  RVC
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Period
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  A.Count
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  C.Count
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  A.Sales
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  C.Sales
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Count
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Count %
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Sales
                </td>
                <td className="md:min-w-[100px] min-w-[70px] py-2 px-2 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Sales %
                </td>
              </thead>
              <tbody>
                {DataPeriod.map((data, index) => {
                  //   console.log(data);
                  return <TableRows key={index} data={data} />;
                })}
                {/* <tr>
                  <td colSpan={6} className="bg-primary-500/[50%]"></td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button
        className="text-slate-600 text-base-regular hover:text-black bg-primary-500/[50%] min-w-[150px] mx-auto py-3 px-5 rounded-xl hover:bg-primary-500/[30%]"
        onClick={onDownload}
      >
        Export excel
      </button>
    </div>
  );
};
export default NestedTable;
