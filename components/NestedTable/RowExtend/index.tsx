"use client";
import { PeriodDetailModel, RecordModel } from "@/models/periodData";

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
              className={`px-10 w-fit  ${toggle ? "block" : "hidden"} mx-auto`}
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

export default RowExtend;
