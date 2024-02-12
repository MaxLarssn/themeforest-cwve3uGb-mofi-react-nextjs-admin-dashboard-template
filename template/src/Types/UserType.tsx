import { InputType } from "reactstrap/types/lib/Input";

export interface CommonUserFooterType {
  listClass?: string;
}

export interface CommonUserFormGroupType {
  title: string;
  placeholder?: string;
  type: InputType;
  defaultValue?:string
  row?:number;
}

export interface userCardTypes {
  id: number;
  card_bg: string;
  avatar: string;
  name: string;
  userProfile: string;
  follower: string;
  following: string;
  totalPost: string;
}

export interface UserCardsFooterProp {
  item: userCardTypes;
}