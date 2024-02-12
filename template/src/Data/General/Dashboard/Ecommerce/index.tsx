import { DailyOrders, DailyRevenue, OrdersValue, TotalSell } from "@/Constant";
import { AdmissionRatioChart, DailyOrderChart, DailyRevenueChart, OrderValueChart } from "@/Data/General/Widgets/General";
import { ApexOptions } from "apexcharts";

const primary = "var(--theme-default)";
const secondary = "var(--theme-secondary)";

export const TopSellData = [
  {
    class: "total-sells",
    title: TotalSell,
    image: "coin1.png",
    count: "12,463",
    icon: "fa-arrow-up",
    color: "success",
    percentage: "+ 20.08%",
    detail: "Compared to Jan 2023",
    chartId: "admissionRatio",
    chart: AdmissionRatioChart,
  },
  {
    class: "total-sells-2",
    title: OrdersValue,
    image: "shopping1.png",
    count: "78,596",
    icon: "fa-arrow-down",
    color: "danger",
    percentage: "- 10.02%",
    detail: "Compared to Aug 2023",
    chartId: "order-value",
    chart: OrderValueChart,
  },
  {
    class: "total-sells-3",
    title: DailyOrders,
    image: "sent1.png",
    count: "95,789",
    icon: "fa-arrow-up",
    color: "success",
    percentage: "+ 13.23%",
    detail: "Compared to may 2023",
    chartId: "daily-value",
    chart: DailyOrderChart,
  },
  {
    class: "total-sells-4",
    title: DailyRevenue,
    image: "revenue1.png",
    count: "95,789",
    icon: "fa-arrow-down",
    color: "danger",
    percentage: "- 17.06%",
    detail: "Compared to july 2023",
    chartId: "daily-revenue",
    chart: DailyRevenueChart,
  },
];

export const RecentOrdersData = [
  {
    image: "1.png",
    order: "Decorative Plants",
    date: "20 Sep - 03.00AM",
    quantity: "12",
    image1: "6.png",
    name: "Leonie Green",
    amount: "637.30",
    status: "Succeed",
    color: "success",
  },
  {
    image: "2.png",
    order: "Sticky Calender",
    date: "12 Mar - 08.12AM",
    quantity: "14",
    image1: "8.png",
    name: "Peter White",
    amount: "637.30",
    status: "Waiting",
    color: "warning",
  },
  {
    image: "3.png",
    order: "Crystal Mug",
    date: "Feb 15 - 10.00AM",
    quantity: "19",
    image1: "7.png",
    name: "Ruby Yang",
    amount: "637.30",
    status: "Succeed",
    color: "success",
  },
  {
    image: "4.png",
    order: "Motion Table Lamp",
    date: "Jun 10 - 12.30AM",
    quantity: "17",
    image1: "8.png",
    name: "Visha Long",
    amount: "637.30",
    status: "Canceled",
    color: "danger",
  },
  {
    image: "2.png",
    order: "Sticky Calender",
    date: "12 Mar - 08.12AM",
    quantity: "14",
    image1: "8.png",
    name: "Peter White",
    amount: "637.30",
    status: "Waiting",
    color: "warning",
  },
  {
    image: "3.png",
    order: "Crystal Mug",
    date: "Feb 15 - 10.00AM",
    quantity: "19",
    image1: "7.png",
    name: "Ruby Yang",
    amount: "637.30",
    status: "Succeed",
    color: "success",
  },
  {
    image: "4.png",
    order: "Motion Table Lamp",
    date: "Jun 10 - 12.30AM",
    quantity: "17",
    image1: "8.png",
    name: "Visha Long",
    amount: "637.30",
    status: "Canceled",
    color: "danger",
  },
];

export const SalesOverviewChart: ApexOptions = {
  series: [
    {
      data: [
        {
          x: "Jan",
          y: [140, 360],
        },
        {
          x: "",
          y: [180, 400],
        },
        {
          x: "Feb",
          y: [160, 400],
        },
        {
          x: "",
          y: [180, 420],
        },
        {
          x: "Mar",
          y: [160, 480],
        },
        {
          x: "",
          y: [160, 300],
        },
        {
          x: "Apr",
          y: [190, 400],
        },
        {
          x: "",
          y: [140, 300],
        },
        {
          x: "May",
          y: [200, 420],
        },
        {
          x: "",
          y: [180, 280],
        },
        {
          x: "Jun",
          y: [170, 410],
        },
        {
          x: "",
          y: [160, 380],
        },
        {
          x: "Jul",
          y: [200, 450],
        },
        {
          x: "",
          y: [170, 470],
        },
        {
          x: "Aug",
          y: [180, 420],
        },
      ],
    },
  ],
  chart: {
    type: "rangeBar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    borderColor: "rgba(106, 113, 133, 0.30)",
    strokeDashArray: 3,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: [primary],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [65, 35],
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: [secondary],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },

  yaxis: {
    logBase: 100,
    tickAmount: 4,
    min: 100,
    max: 500,
    labels: {
      show: true,
      align: "right",
      minWidth: 0,
      maxWidth: 34,

      formatter: (value) => {
        return `${value}k`;
      },

      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },
    },
  },
  xaxis: {
    categories: ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "Jul", "", "Aug"],
    labels: {
      minHeight: undefined,
      maxHeight: 24,
      offsetX: 0,
      offsetY: 0,

      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 1401,
      options: {
        series: [
          {
            data: [
              {
                x: "Jan",
                y: [140, 360],
              },
              {
                x: "",
                y: [180, 400],
              },
              {
                x: "Feb",
                y: [160, 400],
              },
              {
                x: "",
                y: [180, 420],
              },
              {
                x: "Mar",
                y: [160, 480],
              },
              {
                x: "",
                y: [160, 300],
              },
              {
                x: "Apr",
                y: [190, 400],
              },
              {
                x: "",
                y: [140, 300],
              },
            ],
          },
        ],
      },
    },
    {
      breakpoint: 1199,
      options: {
        series: [
          {
            data: [
              {
                x: "Jan",
                y: [140, 360],
              },
              {
                x: "",
                y: [180, 400],
              },
              {
                x: "Feb",
                y: [160, 400],
              },
              {
                x: "",
                y: [180, 420],
              },
              {
                x: "Mar",
                y: [160, 480],
              },
              {
                x: "",
                y: [160, 300],
              },
              {
                x: "Apr",
                y: [190, 400],
              },
              {
                x: "",
                y: [140, 300],
              },
              {
                x: "May",
                y: [200, 420],
              },
              {
                x: "",
                y: [180, 280],
              },
              {
                x: "Jun",
                y: [170, 410],
              },
              {
                x: "",
                y: [160, 380],
              },
              {
                x: "Jul",
                y: [200, 450],
              },
              {
                x: "",
                y: [170, 470],
              },
              {
                x: "Aug",
                y: [180, 420],
              },
            ],
          },
        ],
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 275,
        },
      },
    },
    {
      breakpoint: 500,
      options: {
        series: [
          {
            data: [
              {
                x: "Jan",
                y: [140, 360],
              },
              {
                x: "",
                y: [180, 400],
              },
              {
                x: "Feb",
                y: [160, 400],
              },
              {
                x: "",
                y: [180, 420],
              },
              {
                x: "Mar",
                y: [160, 480],
              },
              {
                x: "",
                y: [160, 300],
              },
              {
                x: "Apr",
                y: [190, 400],
              },
              {
                x: "",
                y: [140, 300],
              },
              {
                x: "May",
                y: [200, 420],
              },
            ],
          },
        ],
      },
    },
  ],
};

export const RecentCustomerData = [
  {
    image: "1.png",
    name: "Junsung Park",
    id: "32449",
    status: "Paid",
    color: "success",
    amount: "8282.13",
    time: "50 min ago",
  },
  {
    image: "2.png",
    name: "Yongjae Choi",
    id: "95460",
    status: "Pending",
    color: "danger",
    amount: "9546.84",
    time: "34 min ago",
  },
  {
    image: "3.png",
    name: "Seonil Jang",
    id: "95468",
    status: "Paid",
    color: "success",
    amount: "2354.16",
    time: "30 min ago",
  },
  {
    image: "4.png",
    name: "Joohee Min",
    id: "95462",
    status: "Pending",
    color: "danger",
    amount: "3254.35",
    time: "25 min ago",
  },
  {
    image: "5.png",
    name: "Soojung Kin",
    id: "34586",
    status: "Paid",
    color: "success",
    amount: "3654.32",
    time: "23 min ago",
  },
];

export const RevenueChartData: ApexOptions = {
  series: [80, 30, 22, 15],
  chart: {
    width: 380,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 1330,
      options: {
        chart: {
          width: 210,
        },
      },
    },
  ],
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "83%",
        labels: {
          show: true,
          name: {
            offsetY: 4,
          },
          total: {
            show: true,
            fontSize: "20px",
            fontFamily: "Outfit', sans-serif",
            fontWeight: 600,
            label: "Jeans",
            formatter: () => "480",
          },
        },
      },
    },
  },
  legend: {
    position: "bottom",
    offsetY: 0,
    height: 50,
  },
  colors: [primary, "#D77748", "#C95E9E", secondary],
};

export const UserContinentData =[
  {
      title:"Keyboard",
      number:"651",
      color:"primary"
  },
  {
      title:"Laptops",
      number:"345",
      color:"secondary"
  },
  {
      title:"Desktop",
      number:"654",
      color:"warning"
  },
  {
      title:"Mouse",
      number:"954",
      color:"tertiary"
  },
]

export const AllOverCountriesData = [
  {
      color:"primary",
      title:"United States",
      percentage:"53.23%"
  },
  {
      color:"secondary",
      title:"Romania",
      percentage:"31.85%"
  },
  {
      color:"warning",
      title:"Austalia",
      percentage:"12.98%"
  },
  {
      color:"tertiary",
      title:"Germany",
      percentage:"45.23%"
  },
  {
      color:"success",
      title:"Africa",
      percentage:"23.15%"
  },
  {
      color:"danger",
      title:"Europe",
      percentage:"95.75%"
  }
]

export const TopSellerTableData = [
  {
      image:"9.png",
      name:"Gary Waters",
      brand:"Adidas",
      product:"Clothes",
      sold:"650",
      price:"$37.50",
      earning:"$24375"
  },
  {
      image:"10.png",
      name:"Edwin Hogan",
      brand:"Nike",
      product:"Shoes",
      sold:"956",
      price:"$24.75",
      earning:"$23661"
  },
  {
      image:"11.png",
      name:"Aaron Hogan",
      brand:"Sony",
      product:"Electronics",
      sold:"348",
      price:"$184.50",
      earning:"$64206"
  },
  {
      image:"12.png",
      name:"Ralph Waters",
      brand:"i Phone",
      product:"Mobile",
      sold:"100",
      price:"$150.25",
      earning:"$15025"
  }
]