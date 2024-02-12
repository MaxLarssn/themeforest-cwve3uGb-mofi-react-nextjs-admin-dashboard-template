import { CleaveOptions } from "cleave.js/options";
import { FormikErrors } from "formik";
import { ChangeEvent, RefObject } from "react";
import { InputType } from "reactstrap/types/lib/Input";

export interface TooltipValidationProp {
  firstname: string;
  lastname: string;
  username: string;
  city: string;
  state: string;
  zip: string;
}

export interface TooltipFormValidationProp {
  submitErrors: boolean;
  setSubmitError: (key: boolean) => void;
  errors: FormikErrors<TooltipValidationProp>;
}

export interface FormValidationProp {
  firstname: string;
  password: string;
  state: string;
  city: string;
  zip: string;
  payment: string;
  theme: string;
  file: string;
  description: string;
  terms: [];
}

export interface FormValidationsProp {
  submitErrors: boolean;
  setSubmitError: (key: boolean) => void;
  errors: FormikErrors<FormValidationProp>;
}

export interface CommonFileInputProp {
  label: string;
  multiple?: boolean;
  disabled?: boolean;
  size?: "lg" | "sm";
}

export interface CommonSelectInputProp {
  label: string;
  multiple?: boolean;
  inputClass?: string;
  span: string[];
}

export interface CommonFormGroupProp {
  labelClass?: string;
  label: string;
  colSm: string;
  colClass?: string;
  inputType?: InputType;
  placeholder?: string;
  defaultValue?: string;
  inputClass?: string;
  max?: string;
}

export interface CommonFloatingInputProp {
  inputType?: InputType;
  label: string;
  floatingLabel: string;
  placeholder?: string;
  defaultValue?: string;
  height?: string;
  invalid?: boolean;
}

export interface CommonFloatingFormGruopProp {
  floatingLabel: string;
  inputClass?: string;
  floatClass?: string;
  invalid?: boolean;
  required?: boolean;
}

export interface CommonEdgeRaisedInputProp {
  inputType: InputType;
  label: string;
  placeholder?: string;
  inputClass?: string;
  rows?: number;
}

export interface ButtonDropdownListProp {
  color: string;
  title?: string;
  options: string[];
  outline?: boolean;
  divider: boolean;
}

interface StarProp {
  id: number;
  starClass?: string;
}

export interface VerticalStyleFormProp {
  id: number;
  color: string;
  cardClass?: string;
  name?: string;
  badgeTitle: string;
  mediaBodyClass?: string;
  digits: string;
  spanText: string;
  check?: boolean;
  spanClass?: string;
  star?: StarProp[];
}

export interface VariationRadioProp {
  id: number;
  labelText: string;
  image?: string;
  icon?: string;
  name?: string;
  defaultChecked?: boolean;
  iconColor?: string;
}

export interface CommonCardFooterProp {
  footerClass?: string;
  color1: string;
  btn2Class?: string;
  btn1Class?: string;
  color2: string;
}

interface StarProps {
  id: number;
  starClass?: string;
}

export interface HorizontalStyleFormProp {
  id: number;
  color: string;
  name: string;
  mediaBodyClass?: string;
  badgeTitle: string;
  digits: string;
  spanText: string;
  colClass?: string;
  check?: boolean;
  spanClass?: string;
  star?: StarProps[];
  cardClass?: string;
}

export interface CommonTouchspinProp {
  color: string;
  id?: number;
  value: number;
  outline?: boolean;
  faAngle?: boolean;
  onDecrement: () => void;
  onIncrement: () => void;
  btnClass?: string;
}

export interface CommonSwitchProp {
  defaultChecked?: boolean;
  color?: string;
  disabled?: boolean;
}

export interface CommonSwitchSpanProp {
  color: string;
  defaultChecked?: boolean;
}

export interface CommonSwitchProp {
  defaultChecked?: boolean;
  color?: string;
  disabled?: boolean;
}

export interface CommonSwitchSpanProp {
  color: string;
  defaultChecked?: boolean;
}

export type StepperHorizontalPropsType = {
  level: number;
};

interface BasicInputFormValueInterFace {
  email: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  placeHolderName: string;
  cardNumber: string;
  expiration: string;
  cvvNumber: string;
  uploadDocumentation: string;
  informationCheckBox: boolean;
  linkedInLink: string;
  gitHubLink: string;
  giveFeedBack: string;
  state: string;
  agreeConditions: boolean;
}

export type NumberingWizardPropsType = {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  basicInputFormValue: BasicInputFormValueInterFace;
  level?: number;
};

interface StudentValidationFormInterFace {
  password: string;
  name: string;
  email: string;
  confirmPassWord: string;
  portfolioURL: string;
  projectDescription: string;
  twitterUrl: string;
  gitHubUrl: string;
}

export interface StudentFormPropsType {
  handleImageLabelClick: () => void;
  imageUrl: string | null;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  studentValidationForm: StudentValidationFormInterFace;
  level: number;
  fileInputRef: RefObject<HTMLInputElement>;
}

export interface StudentTabProp {
  studentValidationForm: StudentValidationFormInterFace;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface VerticalFormPropsType {
  callbackActive: (val: number) => void;
  activeTab: number;
}

export interface VerticalValidationWizardFormPropsType {
  activeCallBack: (val: number) => void;
  activeTab?: number;
}

export interface CardPropsType {
  recipientUserName: string;
  userName: string;
  cardNumber: string;
  expirationDate: string;
  cvvNumber: string;
  documentationName: string;
}

export interface CardDetailProp {
  cartInfoForm: CardPropsType;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface NavComponentProp {
  callbackActive: (val: number | undefined) => void;
  activeTab: number | undefined;
}

export interface ShippingFormTabContentPropsType {
  activeTab: number | undefined;
  callbackActive: (val: number | undefined) => void;
}

export interface BillingFormProp {
  callbackActive: (val: number | undefined) => void;
}

interface StudentValidationFormType {
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  address: string;
  country: string;
  state: string;
  zip: string;
  rememberNextTime: boolean;
  otherNotes: string;
}

export interface BillingUserDetailsProp {
  studentValidationForm: StudentValidationFormType;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface RadioBoxValuesInterFace {
  address: string;
  shippingMethod: string;
}

export interface ShippingInformationCommonProps {
  handleNextButton?: () => void;
  radioBoxValues: RadioBoxValuesInterFace;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface PaymentMethodOptionPropsType {
  paymentMethodName: string;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface NetBankingAccordionPropType {
  bankName: string;
  feedBack: string;
}
export interface NetBankingAccordionProp {
  netBankingFormValues: NetBankingAccordionPropType;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomFormSelectProp {
  inputId: string;
  options: string[];
  title: string;
}

export interface CustomWizardFormPropsType {
  heading: string;
  horizontalWizardClass?: string;
  xs?: number;
  firstXl?: number;
  secondXl?: number;
  differentId?: boolean;
}

export interface BusinessFormCommonProps {
  activeTab?: number | undefined;
  callbackActive: (val: number | undefined) => void;
  differentId?: boolean;
}

export interface BusinessFormCommonProps {
  activeTab?: number | undefined;
  callbackActive: (val: number | undefined) => void;
}

export interface BankLogoListProp {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  differentId?: boolean;
}

export interface BusinessFormpropsType {
  horizontalWizardClass?: string;
  heading: string;
  firstXl?: number;
  secondXl?: number;
  xs?: number;
}

export interface CleaveInputType {
  className: string;
  options: CleaveOptions;
  placeholder: string;
}
