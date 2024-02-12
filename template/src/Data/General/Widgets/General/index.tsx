import { CryptoDashboard, DailyOrders, DailyRevenue, Href, OrdersValue, PodcastWebdesign, SocialPostDesign, TotalSell, WebsiteDesign } from "@/Constant";
import { ApexOptions } from "apexcharts";

const primary = "#7A70BA";
const secondary = "#48A3D7";

export const AdmissionRatioChart: ApexOptions = {
  series: [
    {
      name: "",
      data: [30, 29.31, 29.7, 29.7, 31.32, 31.65, 31.13, 29.8, 31.79, 31.67, 32.39, 30.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 34, 34.5, 34.5, 32.53, 31.37, 32.43, 32.44, 30.2, 30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 31.02, 30.33, 32.95, 31.89, 30.01, 30.88, 30.69, 30.58, 32.02, 32.14, 30.37, 30.51, 32.65, 32.64, 32.27, 32.1, 32.91, 30.65, 30.8, 31.92],
    },
  ],
  chart: {
    type: "area",
    height: 90,
    offsetY: -10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
    borderColor: "var(--light)",
    padding: {
      top: 5,
      right: 0,
      bottom: -30,
      left: 0,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [primary],
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    opposite: false,
    min: 29,
    max: 35,
    logBase: 100,
    tickAmount: 4,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: false,
      offsetX: -12,
      offsetY: -15,
      rotate: 0,
    },
  },
  legend: {
    horizontalAlign: "left",
  },
};

export const OrderValueChart: ApexOptions = {
  series: [
    {
      name: "",
      data: [30, 32.31, 31.47, 30.69, 29.32, 31.65, 31.13, 31.77, 31.79, 31.67, 32.39, 32.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 32.37, 32.19, 32.51, 32.53, 31.37, 30.43, 30.44, 30.2, 30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 30.02, 30.33, 30.95, 31.89, 31.01, 30.88, 30.69, 30.58, 32.02, 32.14, 32.37, 32.51, 32.65, 32.64, 32.27, 32.1, 32.91, 33.65, 33.8, 33.92],
    },
  ],
  chart: {
    type: "area",
    height: 90,
    offsetY: -10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
    borderColor: "var(--light)",
    padding: {
      top: 5,
      right: 0,
      bottom: -30,
      left: 0,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 80, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [secondary],
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    opposite: false,
    min: 29,
    max: 35,
    logBase: 100,
    tickAmount: 4,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: false,
      offsetX: -12,
      offsetY: -15,
      rotate: 0,
    },
  },
  legend: {
    horizontalAlign: "left",
  },
  responsive: [],
};

export const DailyOrderChart: ApexOptions = {
  series: [
    {
      name: "",
      data: [30, 29.31, 29.7, 29.7, 31.32, 31.65, 31.13, 29.8, 31.79, 31.67, 32.39, 30.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 34, 34.5, 34.5, 32.53, 31.37, 32.43, 32.44, 30.2, 30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 31.02, 30.33, 32.95, 31.89, 30.01, 30.88, 30.69, 30.58, 32.02, 32.14, 30.37, 30.51, 32.65, 32.64, 32.27, 32.1, 32.91, 30.65, 30.8, 31.92],
    },
  ],
  chart: {
    type: "area",
    height: 90,
    offsetY: -10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
    borderColor: "var(--light)",
    padding: {
      top: 5,
      right: 0,
      bottom: -30,
      left: 0,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#D77748"],
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    opposite: false,
    min: 29,
    max: 35,
    logBase: 100,
    tickAmount: 4,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: false,
      offsetX: -12,
      offsetY: -15,
      rotate: 0,
    },
  },
  legend: {
    horizontalAlign: "left",
  },
  responsive: [],
};

export const DailyRevenueChart: ApexOptions = {
  series: [
    {
      name: "",
      data: [29, 30.31, 30.7, 31.69, 31.32, 31.65, 31.13, 31.77, 31.79, 31.67, 32.39, 32.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 32.37, 32.19, 32.51, 32.53, 31.37, 30.43, 30.44, 30.2, 30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 30.02, 30.33, 30.95, 31.89, 31.01, 30.88, 30.69, 30.58, 32.02, 32.14, 32.37, 32.51, 32.65, 32.64, 32.27, 32.1, 32.91, 33.65, 33.8, 33.92],
    },
  ],
  chart: {
    type: "area",
    height: 90,
    offsetY: -10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
    borderColor: "var(--light)",
    padding: {
      top: 5,
      right: 0,
      bottom: -30,
      left: 0,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#C95E9E"],
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    opposite: false,
    min: 29,
    max: 35,
    logBase: 100,
    tickAmount: 4,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: false,
      offsetX: -12,
      offsetY: -15,
      rotate: 0,
    },
  },
  legend: {
    horizontalAlign: "left",
  },
  responsive: [],
};

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

export const WebsiteDesignData = [
  {
    class: "proorder-md-7",
    title: WebsiteDesign,
    image: "16.png",
    link: Href,
    header: "Square Dashboard",
    email: "karson123@gmail.com",
    button: [
      {
        color: "primary",
        buttonName: "UX Design",
      },
      {
        color: "secondary",
        buttonName: "3D Design",
      },
    ],
    ratting: [
      {
        total: "12",
        detail: "Issues",
      },
      {
        total: "5",
        detail: "Resolved",
      },
      {
        total: "7",
        detail: "Comment",
      },
    ],
    task: "6",
    color: "primary",
    value: "50",
  },
  {
    class: "proorder-md-8",
    title: SocialPostDesign,
    image: "18.png",
    link: Href,
    header: "Cronin Lewis",
    email: "cronin324@gmail.com",
    button: [
      {
        color: "primary",
        buttonName: "Illustration",
      },
      {
        color: "warning",
        buttonName: "Video Editing",
      },
    ],
    ratting: [
      {
        total: "10",
        detail: "Issues",
      },
      {
        total: "9",
        detail: "Resolved",
      },
      {
        total: "5",
        detail: "Comment",
      },
    ],
    task: "4",
    color: "secondary",
    value: "40",
  },
  {
    class: "proorder-md-9",
    title: PodcastWebdesign,
    image: "17.png",
    link: Href,
    header: "Rau Foster",
    email: "raufoster23@gmail.com",
    button: [
      {
        color: "tertiary",
        buttonName: "2D Design",
      },
      {
        color: "secondary",
        buttonName: "Dribbble Post",
      },
    ],
    ratting: [
      {
        total: "16",
        detail: "Issues",
      },
      {
        total: "10",
        detail: "Resolved",
      },
      {
        total: "7",
        detail: "Comment",
      },
    ],
    task: "8",
    color: "warning",
    value: "80",
  },
  {
    class: "proorder-md-10",
    title: CryptoDashboard,
    image: "19.png",
    link: Href,
    header: "Volkman Melisa",
    email: "volkman839@gmail.com",
    button: [
      {
        color: "primary",
        buttonName: "Design System",
      },
      {
        color: "secondary",
        buttonName: "Branding",
      },
    ],
    ratting: [
      {
        total: "04",
        detail: "Issues",
      },
      {
        total: "5",
        detail: "Resolved",
      },
      {
        total: "7",
        detail: "Comment",
      },
    ],
    task: "2",
    color: "tertiary",
    value: "20",
  },
];

export const VisitorChartData: ApexOptions = {
  series: [
    {
      name: "Active",
      data: [18, 50, 65, 18, 28, 70, 15, 35],
    },
    {
      name: "Bounce",
      data: [35, 70, 30, 60, 25, 45, 50, 50],
    },
  ],
  chart: {
    type: "bar",
    height: 220,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: [secondary, primary],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Rubik, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    labels: {
      colors: "var(--chart-text-color)",
    },
    markers: {
      width: 6,
      height: 6,
      radius: 12,
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  responsive: [
    {
      breakpoint: 1366,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        grid: {
          padding: {
            right: 5,
          },
        },
      },
    },
  ],
};

export const FacebookOption: ApexOptions = {
  series: [78],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: primary,
      opacity: 0.35,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5,
      },
      dataLabels: {
        //   showOn: "always",
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10,
        },
      },
    },
  },
  colors: [primary],
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 130,
        },
      },
    },
  ],
};

export const TwitterOption: ApexOptions = {
  series: [50],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "#57B9F6",
      opacity: 0.35,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5,
      },
      dataLabels: {
        //   showOn: "always",
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10,
        },
      },
    },
  },
  colors: ["#57B9F6"],
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 130,
        },
      },
    },
  ],
};

export const InstagramOption: ApexOptions = {
  series: [70],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "#FFA941",
      opacity: 0.35,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5,
      },
      dataLabels: {
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10,
        },
      },
    },
  },
  colors: ["#FFA941"],
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 130,
        },
      },
    },
  ],
};

export const YouTubeOption: ApexOptions = {
  series: [80],
  chart: {
    height: 130,
    type: "radialBar",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 0,
      blur: 10,
      color: "#FF6150",
      opacity: 0.35,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
      },
      track: {
        strokeWidth: "60%",
        opacity: 1,
        margin: 5,
      },
      dataLabels: {
        value: {
          color: "var(--body-font-color)",
          fontSize: "14px",
          show: true,
          offsetY: -10,
        },
      },
    },
  },
  colors: [secondary],
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 130,
        },
      },
    },
  ],
};

export const SocialWidgetsData = [
  {
    image: "1",
    alt: "facebook icon",
    title: "Facebook",
    count: "+22.9%",
    followers: "12,098",
    content: "Followers",
    id: "radial-facebook",
    chart: FacebookOption,
  },
  {
    image: "3",
    alt: "twitter icon",
    title: "Twitter",
    count: "+14.09%",
    followers: "12,564",
    content: "Followers",
    id: "radial-twitter",
    chart: TwitterOption,
  },
  {
    image: "2",
    alt: "instagram icon",
    title: "Instagram",
    count: "+27.4%",
    followers: "15,080",
    content: "Followers",
    id: "radial-instagram",
    chart: InstagramOption,
  },
  {
    image: "4",
    alt: "you tube icon",
    title: "Youtube",
    count: "+22.9%",
    followers: "68,954",
    content: "Followers",
    id: "radial-youtube",
    chart: YouTubeOption,
  },
];

export const TotalStudentData = [
    {
        student:"42,954",
        title:"Total Students",
        color:"danger",
        icon:"down",
        percentage:"- 17.06%",
        detail:"than last 6 Month",
        image:"student.png",
        class:"student"
    },
    {
        student:"659",
        title:"Total Teachers",
        color:"success",
        icon:"up",
        percentage:"+27.02%",
        detail:"than last 4 Month",
        image:"teacher.png",
        class:"student-2"
    },
    {
        student:"984",
        title:"Events",
        color:"success",
        icon:"up",
        percentage:"+ 12.01%",
        detail:"than last 8 Month",
        image:"calendar.png",
        class:"student-3"
    },
    {
        student:"1,984",
        title:"Invoice Status",
        color:"danger",
        icon:"down",
        percentage:"- 15.02%",
        detail:"than last 5 Month",
        image:"invoice.png",
        class:"student-4"
    },
]