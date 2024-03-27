"use client";
import { OutletModel, PeriodModel } from "@/models/periodData";
import RowExtend from "../RowExtend";
import { useState } from "react";

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

export default TableRows;
