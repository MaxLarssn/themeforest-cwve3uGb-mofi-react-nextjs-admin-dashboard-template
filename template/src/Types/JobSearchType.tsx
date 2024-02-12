export  interface HeaderWithIconPropsTypes {
    setIsOpen: (parameter: boolean) => void;
    isOpen: boolean;
    heading: string;
  }

  export interface SimilarJobsCardsType {
    limit: number;
    jobClass: string;
    ribbon: boolean;
    column: boolean;
  }