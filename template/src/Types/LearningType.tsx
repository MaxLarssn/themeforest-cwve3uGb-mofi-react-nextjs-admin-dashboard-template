export interface BlogDetailsProp {
  text: string;
  title:string
}

export interface ComonLearningHeaderProp{
  heading:string
  isOpen:boolean
  setIsOpen: (parameter: boolean) => void;
}