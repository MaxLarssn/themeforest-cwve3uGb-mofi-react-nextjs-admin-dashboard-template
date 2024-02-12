import RatioImage from "@/CommonComponent/RatioImage";
import SVG from "@/CommonComponent/SVG";
import { Href, ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { OrderHistoryImageType, OrderHistoryTableColumns, ProductListTableDataColumnType, ProductListTableProduct } from "@/Types/EcommerceType";
import Link from "next/link";
import { Clock, CreditCard, Gift, MoreVertical, Truck } from "react-feather";
import { Rating } from "react-simple-star-rating";
import { Badge } from "reactstrap";

export const BecomeMemberData = [
  {
    type: "Standard",
    price: 10,
    benefit: ["50GB Disk Space", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
  {
    type: "Premium",
    price: 20,
    benefit: ["10% on all product", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
  {
    type: "Author pack",
    price: 50,
    benefit: ["Upload 50 product", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
  {
    type: "Author pack",
    price: 50,
    benefit: ["Upload 50 product", "50 Email Accounts", "Maintenance", "15 Subdomains"],
  },
];

export const SimplePricingData = [
  {
    title: "Standard",
    price: 15,
    plan: "Standard Plan",
  },
  {
    title: "Business",
    price: 25,
    plan: "Business Plan",
  },
  {
    title: "Premium",
    price: 35,
    plan: "Premium Plan",
  },
  {
    title: "Extra",
    price: 45,
    plan: "Extra Plan",
  },
];

export const WhishListProduct = [
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women Shorts",
    image: "product-table-5.png",
  },
  {
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Blue Shirt",
    image: "product-table-2.png",
  },
  {
    name: "Red Shirt",
    image: "product-table-1.png",
  },
  {
    name: "Red Shirt",
    image: "product-table-1.png",
  },
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women Shorts",
    image: "product-table-5.png",
  },
  {
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Men Dashed Denim Jacket",
    image: "product-table-3.png",
  },
  {
    name: "Blue Shirt",
    image: "product-table-2.png",
  },
  {
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    name: "Women Shorts",
    image: "product-table-5.png",
  },
];

export const OrderData = [
  {
    id: 1,
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    id: 2,
    name: "Women Shorts",
    image: "product-table-5.png",
  },
  {
    id: 3,
    name: "Cyclamen",
    image: "product-table-4.png",
  },
  {
    id: 4,
    name: "Men dashed Denim jacket",
    image: "product-table-3.png",
  },
  {
    id: 5,
    name: "Blue shirt",
    image: "product-table-2.png",
  },
  {
    id: 6,
    name: "Red shirt",
    image: "product-table-1.png",
  },
  {
    id: 7,
    name: "Red shirt",
    image: "product-table-1.png",
  },
  {
    id: 8,
    name: "Women Top",
    image: "product-table-6.png",
  },
  {
    id: 9,
    name: "Women Shorts",
    image: "product-table-5.png",
  },
];

export const OrderHistoryData = [
  {
    image: "15.png",
    productName: "Ladies side bag",
    tag: "Processing",
    size: "M",
    color: "Black",
    articleNumber: 5748214,
    units: 1,
    price: "$25",
    icon: <MoreVertical />,
  },
  {
    image: "3.png",
    productName: "Fancy Ladies Jacket",
    tag: "Shipped",
    size: "XL",
    color: "Light gray",
    articleNumber: 3581714,
    units: 1,
    price: "$24",
    icon: <MoreVertical />,
  },
  {
    image: "1.png",
    productName: "Long Top",
    tag: "Processing",
    size: "M",
    color: "Lavender",
    articleNumber: 4215738,
    units: 1,
    price: "$21",
    icon: <MoreVertical />,
  },

  {
    image: "4.png",
    productName: "Man shoes",
    tag: "Processing",
    size: "8",
    color: "Black & white",
    articleNumber: 1756457,
    units: 1,
    price: "$18",
    icon: <MoreVertical />,
  },

  {
    image: "2.png",
    productName: "Ladies Handbag",
    tag: "Shipped",
    size: "25cm x 20cm",
    color: "Black",
    articleNumber: 6748142,
    units: 1,
    price: "$14",
    icon: <MoreVertical />,
  },
  {
    image: "10.png",
    productName: "Ladies side bag",
    tag: "Shipped",
    size: "22cm x 18cm",
    color: "Brown",
    articleNumber: 7451725,
    units: 1,
    price: "$13",
    icon: <MoreVertical />,
  },
  {
    image: "14.png",
    productName: "Watch",
    tag: "Cancelled",
    size: "27mm",
    color: "Brown",
    articleNumber: 2471254,
    units: 1,
    price: "$12",
    icon: <MoreVertical />,
  },
  {
    image: "13.png",
    productName: "Fancy watch",
    tag: "Processing",
    size: "35mm",
    color: "Blue",
    articleNumber: 5476182,
    units: 1,
    price: "$10",
    icon: <MoreVertical />,
  },
  {
    image: "11.png",
    productName: "Slipper",
    tag: "Cancelled",
    size: "6",
    color: "Blue",
    articleNumber: 8475112,
    units: 1,
    price: "$6",
    icon: <MoreVertical />,
  },
  {
    image: "12.png",
    productName: "Ladies Slipper",
    tag: "Shipped",
    size: "6",
    color: "Brown & white",
    articleNumber: 4127421,
    units: 1,
    price: "$6",
    icon: <MoreVertical />,
  },
];

const OrderHistoryImage: React.FC<OrderHistoryImageType> = ({ name }) => {
  return <img className="img-fluid img-30 my-3 rounded-3" src={`${ImagePath}/product/${name}`} alt="#" />;
};

const OrderDataHistory: React.FC<OrderHistoryImageType> = ({ name, tag }) => {
  return (
    <div className="product-name d-flex flex-column align-items-center">
      <a href={Href}>{name}</a>
      <div className="order-process">
        <span className="order-process-circle"></span>
        {tag}
      </div>
    </div>
  );
};

export const OrderHistoryDataColumn = [
  {
    name: "Product",
    cell: (row: OrderHistoryTableColumns) => <OrderHistoryImage name={row.image} />,
    center: true,
  },
  {
    name: "Product Name",
    cell: (row: OrderHistoryTableColumns) => <OrderDataHistory name={row.productName} tag={row.tag} />,
    sortable: true,
    center: true,
  },
  {
    name: "Size",
    selector: (row: OrderHistoryTableColumns) => `${row.size}`,
    sortable: true,
    center: true,
  },
  {
    name: "Color",
    selector: (row: OrderHistoryTableColumns) => `${row.color}`,
    sortable: true,
    center: true,
  },
  {
    name: "Article Number",
    selector: (row: OrderHistoryTableColumns) => row["articleNumber"],
    sortable: true,
    center: true,
  },
  {
    name: "Units",
    selector: (row: OrderHistoryTableColumns) => row["units"],
    center: true,
  },
  {
    name: "Price",
    selector: (row: OrderHistoryTableColumns) => row["price"],
    sortable: true,
    center: true,
  },
  {
    name: <MoreVertical />,
    cell: (row: OrderHistoryTableColumns) => row["icon"],
    center: true,
  },
];

export const FiltersData = [
  {
    name: "Choose Product",
    options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
  },
  {
    name: "Choose Category",
    options: ["Furniture", "Smart Gadgets", "Electrics"],
  },
  {
    name: "Choose Sub Category",
    options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
  },
  {
    name: "Status",
    options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
  },
  {
    name: "Price",
    options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
  },
];

export const ProductListTableData = [
  {
    image: "product_list/product-categories/laptop.png",
    name: "Apple Desktop 2023",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product_list/product-categories/ipad.png",
    name: "MacBook Air 13.3-inch",
    sku: "589KO8PPQ8",
    category: "Laptops",
    price: 45000.0,
    quantity: 10,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/mouse.png",
    name: "M185 Compact Wireless Mouse",
    sku: "02145YK796",
    category: "E-Commerce",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product_list/product-categories/dvd.png",
    name: "DVD",
    sku: "HG5667DFQ1",
    category: "Electric",
    price: 5600.0,
    quantity: 10,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/speaker.png",
    name: "Speakers",
    sku: "02145YK796",
    category: "Electric",
    price: 12200.0,
    quantity: 50,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product_list/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product_list/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "product_list/product-categories/laptop.png",
    name: "Apple Desktop 2023",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 2,
  },
];

const ProductListTableAction = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div className="product-action">
      <Link href={`/${i18LangStatus}/ecommerce/add_product`}>
        <SVG iconId="edit-content" />
      </Link>
      <SVG iconId="trash1" />
    </div>
  );
};

const ProductListTableProductName: React.FC<ProductListTableProduct> = ({ images, name }) => {
  return (
    <div className="product-names my-2">
      <div className="light-product-box bg-img-cover">
        <RatioImage className="img-fluid" src={`${ImagePath}/${images}`} alt="laptop" />
      </div>
      <p>{name}</p>
    </div>
  );
};

const ProductListTableStatus: React.FC<ProductListTableProduct> = ({ name }) => {
  return (
    <Badge color="" className={`badge-light-${name === "Sold Out" ? "secondary" : "primary"}`}>
      {name}
    </Badge>
  );
};

const ProductListTableRating: React.FC<ProductListTableProduct> = ({ rate }) => {
  return <Rating initialValue={rate} size={17} fillColor="#D77748" />;
};

export const ProductListTableDataColumn = [
  {
    name: "Product Name",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableProductName images={row.image} name={row.name} />,
    sortable: true,
    grow: 2,
  },
  {
    name: "SKU",
    selector: (row: ProductListTableDataColumnType) => `${row.sku}`,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: ProductListTableDataColumnType) => `${row.category}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: ProductListTableDataColumnType) => `${row.price}`,
    sortable: true,
  },
  {
    name: "Qty",
    selector: (row: ProductListTableDataColumnType) => `${row.quantity}`,
    sortable: true,
  },
  {
    name: "Status",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableStatus name={row.status} />,
  },
  {
    name: "Rating",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableRating rate={row.rating} />,
  },
  {
    name: "Action",
    cell: () => <ProductListTableAction />,
  },
];

export const ProductSocialLinks = [
  {
    link: "https://www.facebook.com/",
    text: "facebook",
  },
  {
    link: "https://accounts.google.com/",
    text: "google-plus",
  },
  {
    link: "https://twitter.com/",
    text: "twitter",
  },
  {
    link: "https://www.instagram.com/",
    text: "instagram",
  },
  {
    link: "https://rss.app/",
    text: "rss",
  },
];

export const ProductBrandData = [
  {
    icon: <Truck />,
    text: "Free Shipping",
    span: "Free Shipping World Wide",
  },
  {
    icon: <Clock />,
    text: "24 X 7 Service",
    span: "Online Service For New Customer",
  },
  {
    icon: <Gift />,
    text: "Festival Offer",
    span: "New Online Special Festival",
  },
  {
    icon: <CreditCard />,
    text: "Online Payment",
    span: "Contrary To Popular Belief. ",
  },
];

export const FilterProductData = [
  {
    id: 2,
    colClass: "col-xl-6 col-sm-6",
    filterData: ["1", "2"],
  },
  {
    id: 3,
    colClass: "col-xl-4 col-sm-4",
    filterData: ["3", "4", "5"],
  },
  {
    id: 4,
    colClass: "col-xl-3 col-sm-3",
    filterData: ["6", "7", "8", "9"],
  },
  {
    id: 6,
    colClass: "col-xl-2 col-md-4 col-sm-5",
    filterData: ["10", "11", "12", "13", "14", "15"],
  },
];

export const ProductSliderOne = [
  {
    image: "01.jpg",
    title: "Woman T-shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "02.jpg",
    title: "Dream Beauty Fashion",
    text: "$150.00",
  },
  {
    image: "03.jpg",
    title: "VOXATI",
    text: "$200.00",
  },
];

export const ProductSliderTwo = [
  {
    image: "01.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "02.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
    rowClass: "mb-4",
  },
  {
    image: "03.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
  },
];

export const InvoiceHeaderData = ["Product", "Quantity", "Price", "Unit", "Vat %", "Total"];

export const InvoiceTwoDataList = [
  {
    image: "laptop",
    title: "Apple Desktop",
    code: "#XDG-6437",
    quantity: "2",
    price: "100",
    unit: "Hour(s)",
    vat: "0",
    total: "200",
  },
  {
    image: "watch",
    title: "Smart Watch",
    code: "#XDG-6437",
    quantity: "1",
    price: "200",
    unit: "Hour(s)",
    vat: "0",
    total: "200",
  },
  {
    image: "phone",
    title: "Apple iphone 13 Pro",
    code: "#XDG-6437",
    quantity: "1",
    price: "10,000",
    unit: "Hour(s)",
    vat: "0",
    total: "10,000",
  },
  {
    image: "headphone",
    title: "Wireless Headphone",
    code: "#XDG-6437",
    quantity: "2",
    price: "8,000",
    unit: "Hour(s)",
    vat: "0",
    total: "16,000",
  },
];

export const InvoiceSixTable = ["Item Description", "Hours", "Rate", "SubTotal"];

export const InvoiceSixData = [
  {
    title: "Red Shirt",
    detail: "Wild West - Red Cotton Blend Regular Fit Men's Formal Shirt.",
    hours: "5",
    price: "75",
    total: "375",
  },
  {
    title: "Brown Dress",
    detail: "Aask - Brown Polyester Blend Women's Fit & Flare Dress.",
    hours: "3",
    price: "75",
    total: "225",
  },
  {
    title: "Flower Dress",
    detail: "Skyblue Flower Printed Sleevless Strappy Dress.",
    hours: "10",
    price: "75",
    total: "750",
  },
  {
    title: "Red Skirt",
    detail: "R L F - Red Cotton Blend Women's A-Line Skirt.",
    hours: "10",
    price: "75",
    total: "750",
  },
];

export const InvoiceThreeHeader = ["Description", "Qty", "Price", "Subtotal"];

export const InvoiceThreeData = [
  {
    title: "HTML Admin template",
    detail: "Regular License",
    quantity: "2",
    price: "35",
    total: "70",
    color: "7A70BA",
  },
  {
    title: "React Admin template",
    detail: "Regular License",
    quantity: "1",
    price: "25",
    total: "50",
    color: "FFAE46",
  },
  {
    title: "Laravel Admin template",
    detail: "Regular License",
    quantity: "2",
    price: "30",
    total: "60",
    color: "0DA759",
  },
  {
    title: "Vuejs Admin template",
    detail: "Regular License",
    quantity: "3",
    price: "20",
    total: "60",
    color: "48A3D7",
  },
];

export const InvoiceFourDetails = [
  {
    title: "Date",
    value: "10 Mar, 2023",
  },
  {
    title: "Invoice No",
    value: "#VL25000365",
  },
  {
    title: "Account No",
    value: "0981234098765",
  },
  {
    title: "Due Amount",
    value: "$7860.00",
  },
];

export const InvoiceTableHeader = ["Description", "Unite Price", "Quantity", "Subtotal"];

export const InvoiceFourData = [
  {
    title: "Proposal & Brochure Design",
    detail: "Regular License",
    price: "300",
    quantity: "1",
    total: "300",
  },
  {
    title: "Web design and development",
    detail: "Regular License",
    price: "400",
    quantity: "2",
    total: "800",
  },
  {
    title: "Logo & Brand  design",
    detail: "Regular License",
    price: "240",
    quantity: "2",
    total: "480",
  },
  {
    title: "Stationary Design",
    detail: "Regular License",
    price: "100",
    quantity: "1",
    total: "100",
  },
];

export const AddProductNav = [
  {
    id: 1,
    icon: "product-detail",
    title: "Add Product Details",
    detail: "Add Product name & details",
  },
  {
    id: 2,
    icon: "product-gallery",
    title: "Product gallery",
    detail: "thumbnail & Add Product Gallery",
  },
  {
    id: 3,
    icon: "product-category",
    title: "Product Categories",
    detail: "Add Product category, Status and Tags",
  },
  {
    id: 4,
    icon: "pricing",
    title: "Selling prices",
    detail: "Add Product basic price & Discount",
  },
  {
    id: 5,
    icon: "advance",
    title: "Advance",
    detail: "Add Meta details & Inventory details",
  },
];

export const MultiWithHeaderData = [{ name: "NBA Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }, { name: "", divider: true }, { name: "NHL Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }];

export const TypesOfProductData = [
  {
    id: "radio-icon",
    check: true,
    title: "Fixed Price",
  },
  {
    id: "radio-icon4",
    title: "BOGO(Buy one, Get one)",
  },
  {
    id: "radio-icon5",
    title: "Seasonal or holiday discount",
  },
  {
    id: "radio-icon6",
    title: "Percentage-based discount(%)",
  },
  {
    id: "radio-icon7",
    title: "Volume or bulk discount",
  },
];

export const ProductFiveNavData = ["Inventory", "Additional Options", "Shipping"];
