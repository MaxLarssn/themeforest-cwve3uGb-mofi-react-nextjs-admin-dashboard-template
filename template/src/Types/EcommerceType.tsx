import { InputType } from "reactstrap/types/lib/Input";

export interface OrderHistoryTableColumns {
  image: string;
  productName: string;
  tag: string;
  size: string;
  color: string;
  articleNumber: number;
  units: number;
  price: string;
  icon: JSX.Element;
}

export interface OrderHistoryImageType {
  name: string;
  tag?: string;
}

export interface FormGroupCommonProp {
  type: InputType;
  placeholder?: string;
  formClass?: string;
  rows?: number;
}

export interface SelectCommonProp {
  data: string[];
  size: number;
  selectClass?: string;
}

export interface ProductListTableDataColumnType {
  image: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
  rating: number;
}

export interface ProductListTableProduct {
  images?: string;
  name?: string;
  rate?: number;
}

interface VariantsInterface {
  color: string;
  images: string;
}

export interface ProductItemInterface {
  id: number;
  image: string;
  name: string;
  note: string;
  description: string;
  discountPrice: string;
  status: string;
  price: number;
  stock: string;
  review: string;
  category: string;
  colors: string[];
  size: string[];
  tags: string[];
  variants: VariantsInterface[];
  ribbonClassName?: string;
  rating: number;
}

export interface ProductSliceProp {
  filterToggle: boolean;
  productItem: ProductItemInterface[];
  symbol: string;
}

export interface ClothsDetailsTabContentProp {
  activeTab: number;
}

interface VariantsType {
  color: string;
  images: string;
}
export interface CartType {
  variants: VariantsType[];
  total?: any;
  sum?: number;
  id: number;
  image: string;
  name: string;
  note: string;
  description: string;
  discountPrice: string;
  price: number;
  status: string;
  ribbonClassName?: string;
  stock: string;
  review: string;
  rating: number;
  category: string;
  colors: string[];
  size: string[];
  tags: string[];
}

interface ValueInterface {
  min: number;
  max: number;
}
export interface FilterInterface {
  color: string;
  searchBy: string;
  value: ValueInterface;
  sortBy: string;
  category: string[];
  brand: string[];
}

interface CommonProductSlideData {
  rowClass?: string;
  image: string;
  title: string;
  text: string;
}

export interface CommonProductSlideProp {
  data: CommonProductSlideData;
}

export interface CartSliceProp {
  cart: CartType[];
  tax: number;
}

export interface HoverButtonsProp {
  item: ProductItemInterface;
  setDataId: (id: number) => void;
  setOpenModal: (key: boolean) => void;
}

export interface ProductDetailsProp {
  item: ProductItemInterface;
}

export interface ProductModalInterfaceType {
  value: boolean;
  setOpenModal: (value: boolean) => void;
  dataId: undefined | number;
}

export interface ModalProductDetailsProp {
  singleProduct: ProductItemInterface;
}

export interface ModalQuantityProp {
  quantity: number;
  setQuantity: (key: number) => void;
}

export interface ModalButtonsProp {
  singleProduct: ProductItemInterface;
  quantity: number;
}

export interface CartQuantityButtonProp {
  item: CartType;
}

export interface InvoicePrintType {
  handlePrint?: () => void;
}

export interface AddProductSliceType {
  navId: number;
  tabId: number;
  formValue: any;
}

export interface CheckoutFormType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  chech: boolean;
}