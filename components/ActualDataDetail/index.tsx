"use client";
import React, { useState } from "react";
// import AutocompleteField from "../AutocompleteField";
import { Form, useForm, FormContainer } from "react-hook-form-mui";
import AutoCompleteSearhbar from "../AutocompleteSearchbar";
import { Button } from "@mui/material";
import { actualdata } from "@/constants";
import { propertyItem } from "@/models/actualData";
import ActualData from "@/app/(root)/actualdata/page";
import TableActualData from "./TableActualData";

function ActualDataDetail() {
  const dataList = actualdata.slice(1);
  const [currentData, setCurrentData] = useState<propertyItem[] | []>(
    dataList || []
  );
  const formContext = useForm<any>({
    defaultValues: { dataList: ["All"] },
    // resolver: yupResolver(schema) as any,
  });
  const {
    control,
    handleSubmit,

    formState: { isSubmitting },
  } = formContext;
  // console.log(currentData);
  const options = actualdata.map((item) => item.property);
  async function handleData(values: { dataList: string[] }) {
    // console.log(values);
    setCurrentData((prev: propertyItem[]) => {
      const array = dataList.filter((item) =>
        values.dataList.includes(item.property)
      );
      if (values.dataList.includes("All")) {
        return dataList;
      }
      //   if (values.dataList.includes("All")) return prev;
      return array;
    });
  }

  return (
    <div className="mt-8 shadow-lg px-0 md:px-12 mb-20 lg:mb-4 py-6 border-[0.3px]">
      <FormContainer formContext={formContext} onSuccess={handleData}>
        <p className="text-heading3-bold text-center xl:text-left text-slate-500 mb-3">
          Manager Fash Report
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
          <AutoCompleteSearhbar
            name="dataList"
            placeholder=""
            options={options}
            getOptionLabel={(option) => {
              return option;
            }}
            control={control}
            label="Filtered by property code"
            isOptionEqualToValue={(option, value) => option === value}
            onChange={(selectedOptions) => {}}
          />
          <button
            className="px-6 py-3 rounded-md text-white bg-primary-500 border hover:opacity-75 cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </FormContainer>
      <TableActualData currentData={currentData} />
    </div>
  );
}

export default ActualDataDetail;
