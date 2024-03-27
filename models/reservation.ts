export interface ReservationForecastModel {
  division: string;
  value: string | number;
  date: string;
}
export interface DropDownModel {
  id: number;
  data: ReservationForecastModel[];
  text: string;
  startDate: string;
  endDate: string;
}
