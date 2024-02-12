export interface InitialStateType {
  modal: boolean;
  composeEmail: boolean;
  faIcon: boolean;
  interviewEmail: boolean;
  page?: boolean;
  inboxEmail: InboxEmailType[];
  emailValidation: boolean;
}

export interface InboxEmailType {
  id: number;
  image?: string;
  shortName?: string;
  name: string;
  color: string;
  message: string;
  subMessage: string;
  badge?: BadgeType[];
  time: string;
  star?: boolean;
}

interface BadgeType {
  title: string;
  color: string;
}

export interface AddNewEmailInterFace {
  userEmail: string;
  subject: string;
}

export interface EmailSubInputType {
  ccShow: boolean;
  bccShow: boolean;
}

export interface CommonDataType {
  data: InboxEmailType;
  ids: number;
}

export interface LetterBoxNavType {
  navId: string;
  setNavId: (key: string) => void;
}

export interface LetterBoxNavContentType {
  navId: string;
}

export interface MailPropsType {
  handlePrintData: () => void;
}
