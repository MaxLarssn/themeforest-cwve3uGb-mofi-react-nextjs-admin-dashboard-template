export interface SearchTabsPropsType {
  callbackActive: (val: number) => void;
  activeTabValue: number;
}
export interface InformationCommonPropsType {
  item: {
    id?: number;
    url: string;
    title: string;
    detail: string;
    star: string;
    vote: string;
    news: string;
    videoLink: string;
    showStar?: boolean[];
  };
}

export interface ShowRatingProps {
  item: boolean[];
}

export interface SearchTabContentProp {
  activeTab: number;
}

export interface PagesSortProp {
  pageClass: string;
}
