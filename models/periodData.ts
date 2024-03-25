export interface OutletModel {
  id: number;
  code: string;
  name: string;
  Adult_Counts: number;
  Children_Counts: number;
  Total_Counts: number;
  Adults_Sales: number;
  Children_Sales: number;
  Total_Sales: number;
  Total_Counts_Percentage: number;
  Total_Sales_Percentage: number;
  Date: string;
  Period: string;
  RVC: string;
  BreakfastDetail: PeriodDetailModel;
  DinnerDetail: PeriodDetailModel;
  LunchDetail: PeriodDetailModel;
}
export interface PeriodDetailModel {
  Date: string;
  RVC: string;
  Period: string;
  Adult_Counts: number;
  Children_Counts: number;
  Total_Counts: number;
  Adults_Sales: number;
  Children_Sales: number;
  Total_Sales: number;
  Total_Counts_Percentage: number;
  Total_Sales_Percentage: number;
  Records: RecordModel[];
}
export interface RecordModel {
  id: number;
  Room: string;
  Guest_names: string;
  Package_code: string;
  Count: number;
  Pax: string;
  Remark: string;
  Time: string;
}
export interface PeriodModel {
  id: number;
  Date: string;
  Adult_Counts: number;
  Children_Counts: number;
  Total_Counts: number;
  Adults_Sales: number;
  Children_Sales: number;
  Total_Sales: number;
  Total_Counts_Percentage: number;
  Total_Sales_Percentage: number;
  RVC: string;
  Period: string;
  Outlet: OutletModel[];
}
