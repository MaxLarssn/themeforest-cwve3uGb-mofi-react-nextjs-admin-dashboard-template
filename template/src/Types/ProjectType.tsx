export type ProjectListData = {
  id?: number;
  title: string;
  badge: string;
  image: string;
  sites: string;
  description: string;
  issue: string;
  resolved: string;
  comment: string;
  like: string;
  progress: number;
  customers_img1: string;
  customers_img2: string;
  customers_img3: string;
};

export interface ProjectType {
  activeTab: string;
  createdFormData: ProjectListData[];
}

export interface CommonProjectInterFace {
  item: ProjectListData;
}

export interface ProjectInitialValue {
  title: string;
  client: string;
  progress: number;
  type: string;
  priority: string;
  size: string;
  description: string;
}

export interface CommonFileUploadProp {
  maxFiles?: number;
  multiple?: boolean;
  body?: boolean;
}