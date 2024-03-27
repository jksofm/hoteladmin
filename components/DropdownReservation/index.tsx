"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropDownModel } from "@/models/reservation";
function DropdownReservation({
  choose,
  data,
  setChoose,
}: {
  choose: number;
  setChoose: Dispatch<SetStateAction<number>>;
  data: DropDownModel[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="focus:outline-none outline-none">
          <div className="text-primary-500 lg:text-base-bold md:text-small-semibold text-subtle-semibold border border-primary-500 focus:outline-none outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 px-3 py-1.5 text-center inline-flex items-center">
            {/* {dataDropMenu[choose].text} */}

            {data[choose]?.text}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full text-primary-500 border-primary-500 border">
        {data.map((item: DropDownModel) => {
          return (
            <div
              onClick={() => {
                setChoose(item.id);
              }}
              key={item.id}
            >
              <DropdownMenuItem className="text-primary-500 lg:text-base-regular md:text-small-semibold text-subtle-medium px-2 py-2 cursor-pointer w-full">
                {item.text}
              </DropdownMenuItem>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownReservation;
