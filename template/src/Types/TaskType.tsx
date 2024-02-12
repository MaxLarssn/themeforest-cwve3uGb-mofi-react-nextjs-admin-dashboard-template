export interface NavClassType {
  activeToggle: (tab: string) => void;
}

export interface AddTaskData {
  title?: string;
  collection?: string;
  description?: string;
}

export interface TabClassProp {
  activeTab: string;
}

export interface EmptyTaskClassProp {
  title: string;
}

export interface CreateTagProp {
    tagCallback:(val:boolean)=>void, 
    tagModal:boolean
    setTagModal:(value:boolean)=>void
}

export interface AllTaskType {
  id: number;
  title: string;
  collection: string;
  description: string;
}

export interface TaskSliceType {
  allTask: [] | AllTaskType[];
  taskFilter:boolean
  validation:boolean
  myTask:[] | AllTaskType[];
  addModal:boolean;
  activeTab:string
}