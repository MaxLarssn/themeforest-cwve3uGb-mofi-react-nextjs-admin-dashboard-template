export interface HeaderTabContentType {
  tabs: string;
}

export interface SidebarMenuType {
  title: string;
  lanClass?: string;
  menucontent?: string;
  Items: SidebarItemType[];
}

export interface SidebarItemType {
  id?: number;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  path?: string;
  children?: SidebarChildrenType[];
  lanClass?: string;
}

export interface SidebarChildrenType {
  path?: string;
  title: string;
  type: string;
  lanClass?: string;
  children?: SubChildrenType[];
}

export interface SubChildrenType {
  title: string;
  type: string;
  path: string;
}

export interface MenuListType {
  menu?: MenuItem[] | undefined;
  level: number;
  className?: string;
  setActiveMenu: Function;
  activeMenu: unknown[];
}

export interface SidebarItemTypes {
  item: {
    id?: number;
    title?: string | undefined;
    icon?: string;
    type?: string;
    active?: boolean;
    path?: string;
    children?: SidebarChildrenType[];
    lanClass?: string;
  };
}

export interface MenuItem {
  title: string;
  lanClass?: string;
  menucontent?: string;
  Items?: MenuItem[];
  id?: number;
  icon?: string;
  type?: string;
  active?: boolean;
  children?: MenuItem[];
  path?: string;
  mainTitle?: string;
}

export interface SearchSuggestionListType {
  searchedArray: SearchSuggestionItem[];
  setSearchedWord: (key: string) => void;
}

export interface SearchSuggestionItem {
  icon: string | undefined;
  title: string;
  path: string;
  bookmarked?: boolean;
  id?: number;
}

export interface ChangeLngType {
  data: string;
  logo: string;
  language: string;
}

export interface BookmarkedDataType {
  icon: string;
  path: string;
  title: string;
  color?:string
  id?: number;
  bookmarked?: boolean;
}

export interface BookmarkSliceType {
  linkItemsArray: BookmarkedDataType[]|[];
  bookmarkedData: BookmarkedDataType[];
}