export interface ButtonsType {
  toolTipText?: string;
  color?: string;
  tittle?: string;
  id?: string;
  size?: string;
  disabled?: boolean;
  active?: boolean;
  outline?: boolean;
  text?: string;
  className?: string;
  colorTag?:string;
}

interface SubTitleType {
  text?: string;
  code?: string;
}

export interface DefaultType {
  commonButtonsData: ButtonsType[];
  title: string;
  subTitle: SubTitleType[];
  className?: string;
  raised?: boolean;
  dark?: boolean;
}

export interface CommonCardHeadingPropsType {
  bigHeadingClassName?: string;
  Heading?: string;
  smallHeading?: string;
  span?: SubTitleType[];
  headingClassName?: string;
  span2?: string;
}

export interface CommonButtonsToolTip {
  toolTipText: string;
  id: string;
}

export interface CustomStateButtonsType {
  classData?: string;
}

export interface CommonCustomStateButtonsProp {
  data: {
    id: number;
    color: string;
    text: string;
    toolText: string;
    tag?: React.ElementType | any;
    as?: string;
    type?: "submit" | "reset" | "button" |any ;
    value?: string;
  };
}

export interface CommonDropDownPropsType {
  color: string;
  className?: string;
}

export interface CommonGroupButtonProp {
  data: string[];
  buttonClass?: string;
  size?: string;
  outline?: boolean;
}

export interface ButtonGroupProp {
  idOne: number;
  color: string;
  idTwo: number;
  name?: string;
}

export interface CommonDropDownType {
  color: string;
  dark?: boolean;
}
