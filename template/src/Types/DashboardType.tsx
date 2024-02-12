import { ReactNode } from "react";

export interface DashboardCommonHeaderType {
  title: string;
  tagClass?: string;
  dropDownFalse?: boolean;
  children?: ReactNode;
}

export interface CurrentItemProp {
  id: number;
  image: number;
  name: string;
  color: string;
  type: string;
  date: string;
  size: string;
  author: string;
}

export interface CurrentItemsType {
  currentItems: CurrentItemProp[];
}

export interface DashBoardCommonDropdown {
  days?: boolean;
}

interface DataProp {
  class: string;
  title: string;
  image: string;
  count: string;
  icon: string;
  color: string;
  percentage: string;
  detail: string;
  chartId: string;
  chart: ApexCharts.ApexOptions;
}
export interface TotalSellsDetailsType {
  data: DataProp;
}

interface currentItemsProp {
  image: string;
  title: string;
  name: string;
  date: string;
  images: string[];
  type: string;
  progressValue: string;
  color: string;
}

export interface ClientActivityBodyType {
  currentItems: currentItemsProp[];
}

interface RattingType {
  total: string;
  detail: string;
}

export interface ButtonDataType {
  color: string;
  buttonName: string;
}

interface DataPropType {
  class: string;
  title: string;
  image: string;
  link: string;
  header: string;
  email: string;
  button: ButtonDataType[];
  ratting: RattingType[];
  task: string;
  color: string;
  value: string;
}

export interface WebsiteDesignType {
  data: DataPropType;
}

interface currentItemDataType {
  image: string;
  order: string;
  date: string;
  quantity: string;
  image1: string;
  name: string;
  amount: string;
  status: string;
  color: string;
}

export interface RecentOrdersBodyType {
  currentItems: currentItemDataType[];
}

export interface DealOfTheDayType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

interface currentItemsTypeData {
  image: string;
  name: string;
  brand: string;
  product: string;
  sold: string;
  price: string;
  earning: string;
}
export interface TopSellerTableBodyType {
  currentItems: currentItemsTypeData[];
}

interface AssignmentCurrentItem {
  id: string;
  image: string;
  name: string;
  subjects: string;
  startDate: string;
  endDate: string;
  value: string;
  color: string;
}

export interface AssignmentsTableBodyType {
  currentItems: AssignmentCurrentItem[];
}
