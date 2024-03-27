"use client";
import Header from "@/components/Header";

import {
  dataDropMenu,
  Reservation_Forecast_Thismonth,
  Reservation_Forecast_Threemonths,
} from "@/constants";
import { useState } from "react";
import { DropDownModel } from "@/models/reservation";
import DropdownReservation from "@/components/DropdownReservation";

import LineChart from "@/components/LineChart/mutiplelinechart/LineChart";

function ReservationForecast() {
  const [choose, setChoose] = useState<number>(0);
  return (
    <div className="">
      <Header title="Reservation Forecast" />
      <div className=" lg:pt-6 2xl:pt-4 pt-0 lg:pb-[100px] md:pb-[50px] pb-[30px] 2xl:pb-[180px] sm:pt-10 sm:mt-2 mt-8">
        <div className="flex justify-center custom:gap-8 gap-4 mb-4 custom:flex-row flex-col">
          <p className="lg:text-base-bold text-subtle-semibold md:text-small-semibold px-3 py-3 text-center text-white bg-primary-500">
            Forecast Total Occ, Arr .Rooms, Dep. Rooms Count
          </p>
          <DropdownReservation
            choose={choose}
            setChoose={setChoose}
            data={dataDropMenu}
          />
        </div>
        {dataDropMenu.map((item: DropDownModel) => {
          if (item.id === choose) {
            return (
              <LineChart
                dateFormat="%Y%m%d"
                data={item.data}
                choose={choose}
                legendAxisY="Value"
                startDate={item.startDate}
                endDate={item.endDate}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ReservationForecast;
