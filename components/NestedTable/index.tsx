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
const NestedTable = () => {
  const tableRef = useRef(null);
  const products = [
    {
      id: 1,
      Category: "Electronics",
      Company: "Apple",
      Product: "iPhone 13",
      Description: "The latest iPhone with advanced features",
      Price: 999,
      CustomDetails: [
        {
          Date: "2023-09-05",
          Customer: "John Doe",
          Quantity: 2,
          TotalAmount: 1998,
        },
        {
          Date: "2023-09-04",
          Customer: "Jane Smith",
          Quantity: 1,
          TotalAmount: 999,
        },
      ],
    },
    {
      id: 2,
      Category: "Clothing",
      Company: "Nike",
      Product: "Running Shoes",
      Description: "High-quality running shoes for athletes",
      Price: 89,
      CustomDetails: [
        {
          Date: "2023-09-05",
          Customer: "Alice Johnson",
          Quantity: 3,
          TotalAmount: 267,
        },
        {
          Date: "2023-09-03",
          Customer: "Bob Brown",
          Quantity: 2,
          TotalAmount: 178,
        },
      ],
    },
    {
      id: 3,
      Category: "Books",
      Company: "Penguin Books",
      Product: "The Great Gatsby",
      Description: "Classic novel by F. Scott Fitzgerald",
      Price: 12,
      CustomDetails: [
        {
          Date: "2023-09-02",
          Customer: "Ella Williams",
          Quantity: 5,
          TotalAmount: 60,
        },
      ],
    },
    {
      id: 4,
      Category: "Home Appliances",
      Company: "Samsung",
      Product: "Smart Refrigerator",
      Description: "Refrigerator with smart features and spacious design",
      Price: 14,
      CustomDetails: [
        {
          Date: "2023-09-05",
          Customer: "David Wilson",
          Quantity: 1,
          TotalAmount: 14,
        },
      ],
    },
  ];
  const RowExtend = ({
    data,
    toggle,
    setToggle,
  }: {
    data: PeriodDetailModel;
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    return (
      <>
        <tr className="cursor-pointer">
          <td
            className={`py-2 px-2 font-normal text-base border-t whitespace-nowrap text-center bg-primary-500/[10%]`}
          >
            {data?.Date}
          </td>
          <td
            className={`text-center py-2 px-3 font-normal text-base border-t whitespace-nowrap bg-primary-500/[10%]`}
          >
            {data?.RVC}
          </td>
          <td
            className={`md:min-w-[100px] min-w-[70px] py-9 px-2 text-base font-normal flex items-center justify-center h-full border-l-[0.3px] border-t`}
          >
            <svg
              className={`text-black w-6 h-6 z-40  ${
                toggle ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setToggle(!toggle)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t whitespace-nowrap`}
          >
            {data?.Period}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Adult_Counts}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Children_Counts}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Adults_Sales}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Children_Sales}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Counts}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Counts_Percentage}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Sales}
          </td>

          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Sales_Percentage}
          </td>
        </tr>
        {toggle && (
          <tr
            className={`w-full overflow-hidden transition-[max-height] delay-1000 duration-1000 ease-in-out bg-primary-500/[10%]`}
          >
            <td colSpan={20}>
              <table
                className={`px-10 w-fit  ${
                  toggle ? "block" : "hidden"
                } mx-auto`}
              >
                <thead className="bg-primary-500/[40%] rounded-lg text-base text-white font-semibold w-full">
                  <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-l-lg">
                    Room
                  </th>
                  <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                    Name
                  </th>
                  <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                    Count
                  </th>
                  <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                    Pax
                  </th>
                  <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                    Time
                  </th>
                  <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                    Pkg.Code
                  </th>
                  <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-r-lg">
                    Remark
                  </th>
                </thead>
                <tbody>
                  {data?.Records?.map((cdata: RecordModel, key) => (
                    <tr key={key}>
                      <td className="py-2 px-4 bg-slate-50 bg-slate-50">
                        {cdata?.Room}
                      </td>
                      <td className="py-2 px-4 bg-slate-50">
                        {cdata?.Guest_names}
                      </td>
                      <td className="py-2 px-4 bg-slate-50 text-center">
                        {cdata?.Count}
                      </td>
                      <td className="py-2 px-4 bg-slate-50 text-center">
                        {cdata?.Pax}
                      </td>
                      <td className="py-2 px-4 bg-slate-50 text-center">
                        {cdata?.Time}
                      </td>
                      <td className="py-2 px-4 bg-slate-50 text-center">
                        {cdata?.Package_code}
                      </td>
                      <td className="py-2 px-4 bg-slate-50 text-center">
                        {cdata?.Remark}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </>
    );
  };
  const TableRows = ({ data }: { data: PeriodModel }) => {
    const [open, setOpen] = useState<boolean>(true);
    const [open1, setOpen1] = useState<boolean>(true);
    const [open2, setOpen2] = useState<boolean>(false);
    const [open3, setOpen3] = useState<boolean>(false);
    const [open4, setOpen4] = useState<boolean>(false);

    return (
      <>
        <tr className="cursor-pointer">
          <td
            className={`py-9 px-2 text-base font-normal flex items-center justify-center md:min-w-[100px] min-w-[70px] border-r-[0.3px] h-full border-t`}
          >
            <svg
              className={`text-black w-6 h-6 z-40  ${
                open ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </td>
          <td
            className={`py-2 px-3 font-normal text-base border-t whitespace-nowrap text-center `}
          >
            {data?.Date}
          </td>
          <td
            className={`text-center py-2 px-3 font-normal text-base border-t whitespace-nowrap`}
          >
            {data?.RVC}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t whitespace-nowrap`}
          >
            {data?.Period}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Adult_Counts}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Children_Counts}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Adults_Sales}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Children_Sales}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Counts}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Counts_Percentage}
          </td>
          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Sales}
          </td>

          <td
            className={`text-center py-2 px-3 text-base  font-normal border-t md:min-w-[100px] min-w-[70px]`}
          >
            {data?.Total_Sales_Percentage}
          </td>
        </tr>
        {open && (
          <>
            {data.Outlet.map((item: OutletModel) => {
              return (
                <>
                  <tr
                    className={`w-full overflow-hidden transition-[max-height] delay-1000 duration-1000 ease-in-out text-center`}
                  >
                    <td
                      className={`py-2 px-3 font-normal text-base border-t whitespace-nowrap text-center bg-primary-500/[10%]`}
                    >
                      {item?.Date || " "}
                    </td>
                    <td
                      className={`py-9 px-2 text-base font-normal flex items-center justify-center h-full border-t md:min-w-[100px] min-w-[70px] border-l-[0.3px]`}
                    >
                      <svg
                        className={`text-black w-6 h-6 z-40  ${
                          open1 ? "rotate-180" : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => setOpen1(!open1)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </td>
                    {/* <td></td> */}

                    <td
                      className={`py-2 px-3 font-normal text-base border-t whitespace-nowrap`}
                    >
                      {item?.RVC}
                    </td>
                    <td
                      className={`py-2 px-3 text-base font-normal border-t whitespace-nowrap`}
                    >
                      {item?.Period}
                    </td>
                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Adult_Counts}
                    </td>
                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Children_Counts}
                    </td>
                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Children_Sales}
                    </td>
                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Adults_Sales}
                    </td>

                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Total_Counts}
                    </td>
                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Total_Counts_Percentage}
                    </td>
                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Total_Sales}
                    </td>
                    <td className={`py-2 px-3 text-base font-normal border-t`}>
                      {item?.Total_Sales_Percentage}
                    </td>
                  </tr>
                  {open1 && (
                    <RowExtend
                      toggle={open2}
                      setToggle={setOpen2}
                      data={item.BreakfastDetail}
                    />
                  )}
                  {open1 && (
                    <RowExtend
                      toggle={open3}
                      setToggle={setOpen3}
                      data={item.LunchDetail}
                    />
                  )}
                  {open1 && (
                    <RowExtend
                      toggle={open4}
                      setToggle={setOpen4}
                      data={item.DinnerDetail}
                    />
                  )}
                </>
              );
            })}
          </>
        )}

        {/* <tr
          className={`w-full overflow-hidden transition-[max-height] delay-1000 duration-1000 ease-in-out  ${
            open ? "max-h-20" : "max-h-0"
          }`}
        >
          <td colSpan={10}>
            <table
              className={`px-10 w-fit  ${open ? "block" : "hidden"} mx-auto`}
            >
              <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
                <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-l-lg">
                  Date
                </th>
                <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                  Customer
                </th>
                <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                  Quantity
                </th>
                <th className="py-2 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-r-lg">
                  Total Amount
                </th>
              </thead>
              <tbody>
                {data?.CustomDetails?.map((cdata, key) => (
                  <tr key={key}>
                    <td className="py-2 px-4">{cdata?.Date}</td>
                    <td className="py-2 px-4">{cdata?.Customer}</td>
                    <td className="py-2 px-4 text-center">{cdata?.Quantity}</td>
                    <td className="py-2 px-4 text-center">
                      {"$" + cdata?.TotalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr> */}
      </>
    );
  };
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Period Data",
    sheet: "Data",
  });
  return (
    <div className="flex flex-col gap-8 mb-[200px]">
      <div className="w-full h-auto bg-white flex flex-col items-center justify-center pt-10 md:px-5 px-3 lg:px-15">
        <div className="w-full xl 3xl:max-w-7xl 2xl:max-w-7xl lg:max-w-5xl custom:max-w-3xl max-w-[25rem] sm:max-w-[35rem] px-2">
          {/* <h1 className="text-2xl font-medium">Period Data</h1> */}
          <div className="w-full overflow-x-scroll md:overflow-auto  max-w-max 2xl:max-w-none mt-2">
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
                <tr>
                  <td colSpan={6} className="border-t"></td>
                </tr>
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
