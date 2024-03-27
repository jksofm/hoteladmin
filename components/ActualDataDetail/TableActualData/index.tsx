"use client";
import { propertyItem } from "@/models/actualData";
import { ConvertNumberToMoney } from "@/utils/common";
import React from "react";

function TableActualData({ currentData }: { currentData: propertyItem[] }) {
  const GrandTotal: propertyItem = {
    id: 5,
    property: "Grand Total",
    adr: currentData.reduce(
      (prev, current) => prev + (current.adr as number),
      0
    ),
    fbrevenue: currentData.reduce(
      (prev, current) => prev + (current.fbrevenue as number),
      0
    ),
    occupancy: currentData.reduce(
      (prev, current) => prev + (current.occupancy as number),
      0
    ),
    otherrevenue: currentData.reduce(
      (prev, current) => prev + (current.otherrevenue as number),
      0
    ),
    roomrevenue: currentData.reduce(
      (prev, current) => prev + (current.roomrevenue as number),
      0
    ),
    totalrevenue: currentData.reduce(
      (prev, current) => prev + (current.totalrevenue as number),
      0
    ),
    totalrooms: currentData.reduce(
      (prev, current) => prev + (current.totalrooms as number),
      0
    ),
  };

  const newArr =
    currentData.length > 0 ? [...currentData, GrandTotal] : currentData;

  return (
    <div className="">
      <div className="h-full bg-white flex items-center justify-center py-10">
        <div className="2xl:max-w-[1300px] max-w-[700px] md:max-w-[700px] xl:max-w-[1000px] custom:max-w-[750px] lg:max-w-[800px] overflow-y-auto">
          {/* className="lg:min-w-[1022px] xl:min-w-[1230px] 2xl:min-w-[1530px] */}
          <div className="flex items-center">
            <div className="">
              <table className="text-subtle-medium lg:text-base-regular md:inline-table w-full flex flex-row md:bg-white overflow-hidden ">
                <thead className="text-black">
                  {newArr?.map((data, index) => (
                    <tr
                      className={`bg-[#222E3A]/[6%] flex flex-col md:grid-cols-8 md:table-row rounded-l-lg md:rounded-none mb-6 md:mb-0 ${
                        index == 0 ? "md:flex" : "md:hidden"
                      }`}
                      key={index}
                    >
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-b rounded-tl-lg md:rounded-none">
                        Property Code
                      </th>
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-b rounded-tl-lg md:rounded-none">
                        Total Rooms
                      </th>
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-b">
                        Room Revenue
                      </th>
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-b">
                        F&B Revenue
                      </th>
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-b">
                        Other Revenue
                      </th>
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-b">
                        Total Revenue
                      </th>{" "}
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-b">
                        Occupancy(%)
                      </th>{" "}
                      <th className="md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center lg:text-left border border-t rounded-bl-lg md:rounded-none">
                        ADR
                      </th>
                    </tr>
                  ))}
                </thead>
                <tbody className="flex-1 md:flex-none">
                  {newArr?.map((data, index) => (
                    <tr
                      className="flex flex-col md:table-row mb-6 md:mb-0"
                      key={index}
                    >
                      <td
                        className={`border hover:bg-[#222E3A]/[6%] hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {data?.property}
                      </td>
                      <td
                        className={`border hover:bg-[#222E3A]/[6%]  hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {data?.totalrooms}
                      </td>
                      <td
                        className={`border hover:bg-[#222E3A]/[6%]  hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {ConvertNumberToMoney(data?.roomrevenue as number)}
                      </td>
                      <td
                        className={`border hover:bg-[#222E3A]/[6%]  hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center cursor-pointer ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {ConvertNumberToMoney(data?.fbrevenue as number)}
                      </td>
                      <td
                        className={`border hover:bg-[#222E3A]/[6%]  hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center cursor-pointer ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {ConvertNumberToMoney(data?.otherrevenue as number)}
                      </td>
                      <td
                        className={`border hover:bg-[#222E3A]/[6%]  hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center cursor-pointer ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {ConvertNumberToMoney(data?.totalrevenue as number)}
                      </td>
                      <td
                        className={`border hover:bg-[#222E3A]/[6%]  hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center cursor-pointer ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {data?.occupancy}
                      </td>
                      <td
                        className={`border hover:bg-[#222E3A]/[6%]  hover:md:bg-transparent md:py-3 md:px-5 py-3 px-5 sm:py-5 sm:px-12 text-center cursor-pointer ${
                          index === newArr.length - 1 && "font-[700]"
                        }`}
                      >
                        {data?.adr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableActualData;
