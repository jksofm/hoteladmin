import { chartModelData, propertyItem } from "@/models/actualData";
import { PeriodModel } from "@/models/periodData";

export const sidebarLinks = [
  {
    imgURLActive: "/assets/icons/actualdata.svg",
    imgURL: "/assets/icons/actualdata-grey.svg",
    route: "/actualdata",
    label: "Actual data",
  },
  {
    imgURLActive: "/assets/icons/forecast.svg",
    imgURL: "/assets/icons/forecast-grey.svg",
    route: "/reservationforecast",
    label: "Reservation Forecast",
  },
  {
    imgURLActive: "/assets/icons/detailperiod.svg",
    imgURL: "/assets/icons/detailperiod-grey.svg",
    route: "/perioddetail",
    label: "Period Detail",
  },
];
export const actualChartData: chartModelData[] = [
  {
    id: 1,
    label: "SPH",
    value: Math.round(895322.21914807),
  },
  {
    id: 1,
    label: "PP02",
    value: Math.round(595322.21914807),
  },
  {
    id: 3,
    label: "SR01",
    value: Math.round(395322.21914807),
  },
  {
    id: 4,
    label: "SR02",
    value: Math.round(295322.21914807),
  },
];
export const actualdata: propertyItem[] = [
  {
    id: 0,
    property: "All",
  },
  {
    id: 1,
    property: "SPH",

    totalrooms: 309,
    roomrevenue: Math.round(234458.696205755),
    otherrevenue: Math.round(51547.3025418518),
    fbrevenue: Math.round(609316.220400464),
    totalrevenue: Math.round(895322.21914807),
    occupancy: 8.09,
    adr: Math.round(57.5924087953217),
  },
  {
    id: 2,
    property: "PP02",

    totalrooms: 309,
    roomrevenue: Math.round(234458.696205755),
    otherrevenue: Math.round(51547.3025418518),
    fbrevenue: Math.round(609316.220400464),
    totalrevenue: Math.round(895322.21914807),
    occupancy: 8.09,
    adr: Math.round(57.5924087953217),
  },
  {
    id: 3,
    property: "SR01",

    totalrooms: 309,
    roomrevenue: Math.round(234458.696205755),
    otherrevenue: Math.round(51547.3025418518),
    fbrevenue: Math.round(609316.220400464),
    totalrevenue: Math.round(895322.21914807),
    occupancy: 8.09,
    adr: Math.round(57.5924087953217),
  },
  {
    id: 4,
    property: "SR02",

    totalrooms: 309,
    roomrevenue: Math.round(234458.696205755),
    otherrevenue: Math.round(51547.3025418518),
    fbrevenue: Math.round(609316.220400464),
    totalrevenue: Math.round(895322.21914807),
    occupancy: 8.09,
    adr: Math.round(57.5924087953217),
  },
];

export const periodDetailData = [
  {
    report_date: "2024-02-23",
    total: {
      total_actual: {
        count: 18,
        percentage_count: 100,
        sales: 7750000,
        percentage_sales: 100,
      },
      adults_actual: {
        count: 16,
        percentage_count: 89,
        sales: 7750000,
        percentage_sales: 100,
      },
      children_actual: {
        count: 2,
        percentage_count: 11,
        sales: 0,
        percentage_sales: 0,
      },
    },
    outlet: [
      {
        outlet_code: "FLA",
        outlet_name: "Flavours Restaurant",
        total: {
          total_actual: {
            count: 1,
            percentage_count: 6,
            sales: 0,
            percentage_sales: 0,
          },
          adults_actual: {
            count: 1,
            percentage_count: 0,
            sales: 0,
            percentage_sales: 0,
          },
          children_actual: {
            count: 0,
            percentage_count: 0,
            sales: 0,
            percentage_sales: 0,
          },
        },
        breakfast: {
          total: {
            total_actual: {
              count: 1,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
            adults_actual: {
              count: 1,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
            children_actual: {
              count: 1,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
          },
          records: {
            "15:41:19": {
              room: "1001",
              guest_names: "Nguyen Hoang Long",
              package_code: "ABF",
              count: 2,
              pax: "adults",
              remark: "",
            },
            "15:41:20": {
              room: "1001",
              guest_names: "Nguyen Hoang Long",
              package_code: "ABF",
              count: 2,
              pax: "adults",
              remark: "",
            },
          },
        },
        lunch: {
          total: {
            total_actual: {
              count: 2,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
            adults_actual: {
              count: 2,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
            children_actual: {
              count: 2,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
          },
          records: {
            "16:41:19": {
              room: "1002",
              guest_names: "Phan Le Minh An",
              package_code: "ABF",
              count: 2,
              pax: "adults",
              remark: "",
            },
            "16:41:20": {
              room: "1002",
              guest_names: "Phan Le Minh An",
              package_code: "ABF",
              count: 2,
              pax: "adults",
              remark: "",
            },
          },
        },
        dinner: {
          total: {
            total_actual: {
              count: 3,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
            adults_actual: {
              count: 3,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
            children_actual: {
              count: 3,
              percentage_count: 0,
              sales: 0,
              percentage_sales: 0,
            },
          },
          records: {
            "12:41:19": {
              room: "1003",
              guest_names: "Tien Len",
              package_code: "ABF",
              count: 2,
              pax: "adults",
              remark: "",
            },
            "12:41:20": {
              room: "1003",
              guest_names: "Tien Len",
              package_code: "ABF",
              count: 2,
              pax: "adults",
              remark: "",
            },
          },
        },
      },
    ],
  },
];

export const DataPeriod: PeriodModel[] = [
  {
    id: 1,
    Date: "2024-02-23",
    Adult_Counts: 16,
    Children_Counts: 2,
    Total_Counts: 18,
    Adults_Sales: 7750000,
    Children_Sales: 0,
    Total_Sales: 7750000,
    Total_Counts_Percentage: 100,
    Total_Sales_Percentage: 100,
    RVC: "",
    Period: "",
    Outlet: [
      {
        id: 1,
        code: "FLA",
        name: "Flavours Restaurant",
        Adult_Counts: 1,
        Children_Counts: 0,
        Total_Counts: 1,
        Adults_Sales: 0,
        Children_Sales: 0,
        Total_Sales: 0,
        Total_Counts_Percentage: 6,
        Total_Sales_Percentage: 0,
        Date: "",
        Period: "",
        RVC: "FLA",
        BreakfastDetail: {
          Date: "",
          RVC: "",
          Period: "Breakfast",
          Adult_Counts: 1,
          Children_Counts: 1,
          Total_Counts: 2,
          Adults_Sales: 0,
          Children_Sales: 0,
          Total_Sales: 0,
          Total_Counts_Percentage: 0,
          Total_Sales_Percentage: 0,
          Records: [
            {
              id: 1,
              Room: "1001",
              Guest_names: "Nguyen Hoang Long",
              Package_code: "ABF",
              Count: 2,
              Pax: "adults",
              Remark: "",
              Time: "15:41:19",
            },
            {
              id: 2,
              Room: "1001",
              Guest_names: "Nguyen Hoang Long",
              Package_code: "ABF",
              Count: 2,
              Pax: "adults",
              Remark: "",
              Time: "15:41:20",
            },
          ],
        },
        LunchDetail: {
          Date: "",
          RVC: "",
          Period: "Lunch",
          Adult_Counts: 1,
          Children_Counts: 1,
          Total_Counts: 2,
          Adults_Sales: 0,
          Children_Sales: 0,
          Total_Sales: 0,
          Total_Counts_Percentage: 0,
          Total_Sales_Percentage: 0,
          Records: [
            {
              id: 1,
              Room: "1002",
              Guest_names: "Phan Le Minh An",
              Package_code: "ABF",
              Count: 2,
              Pax: "adults",
              Remark: "",
              Time: "16:41:19",
            },
            {
              id: 2,
              Room: "1002",
              Guest_names: "Phan Le Minh An",
              Package_code: "ABF",
              Count: 2,
              Pax: "adults",
              Remark: "",
              Time: "16:41:20",
            },
          ],
        },
        DinnerDetail: {
          Date: "",
          RVC: "",
          Period: "Dinner",
          Adult_Counts: 1,
          Children_Counts: 1,
          Total_Counts: 2,
          Adults_Sales: 0,
          Children_Sales: 0,
          Total_Sales: 0,
          Total_Counts_Percentage: 0,
          Total_Sales_Percentage: 0,
          Records: [
            {
              id: 1,
              Room: "1003",
              Guest_names: "Tien Len",
              Package_code: "ABF",
              Count: 2,
              Pax: "adults",
              Remark: "",
              Time: "12:41:19",
            },
            {
              id: 2,
              Room: "1003",
              Guest_names: "Tien Len",
              Package_code: "ABF",
              Count: 2,
              Pax: "adults",
              Remark: "",
              Time: "12:41:19",
            },
          ],
        },
      },
    ],
  },
];