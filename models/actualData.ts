export interface propertyItem {
  id: number;
  property: string;
  totalrooms?: number | string;
  roomrevenue?: number | string;
  otherrevenue?: number | string;
  fbrevenue?: number | string;
  totalrevenue?: number | string;
  occupancy?: number | string;
  adr?: number | string;
}
export interface dataCardModel {
  id: number;
  text: string;
  number: number | string;
}
export interface chartModelData {
  id: number;
  label: string;
  value: number;
}
