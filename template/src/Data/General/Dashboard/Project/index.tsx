import { DeliveryFoodApp, NFTillustrationPackage, PodcastlandingPage } from "@/Constant";
import { ApexOptions } from "apexcharts";
import moment from "moment"

const primary = "var(--theme-default)";
const secondary = "var(--theme-secondary)";

export const ProjectStatusData = [
  {
    image: "calendar.png",
    title: "Upcomings",
    detail: "5 Projects",
    color: "primary",
  },
  {
    image: "check.png",
    title: "In Progress",
    detail: "13 Projects",
    color: "secondary",
  },
  {
    image: "processing.png",
    title: "Completed",
    detail: "27 Projects",
    color: "warning",
    className: "mb-0",
  },

  {
    image: "total.png",
    title: "Total",
    detail: "47 Projects",
    color: "tertiary",
    className: "mb-0",
  },
];

export const RadialChart_1: ApexOptions = {
  series: [75],
  chart: {
    height: 90,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: [primary],

  stroke: {
    lineCap: "round",
  },
};

export const RadialChart_2: ApexOptions = {
  series: [50],
  chart: {
    height: 90,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: [secondary],

  stroke: {
    lineCap: "round",
  },
};

export const RadialChart_3: ApexOptions = {
  series: [25],
  chart: {
    height: 90,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: ["#D77748"],

  stroke: {
    lineCap: "round",
  },
};

export const RadialChart_4: ApexOptions = {
  series: [86],
  chart: {
    height: 90,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: ["#C95E9E"],

  stroke: {
    lineCap: "round",
  },
};

export const RecentTableBodyData = [
  {
    name: "Behance Post",
    images: [
      {
        image: "1.png",
      },
      {
        image: "2.png",
      },
      {
        image: "",
      },
    ],
    date: "05Jan23",
    endDate: "12Jan23",
    chartId: "widgetsChart1",
    option: RadialChart_1,
  },
  {
    name: "Figma Design",
    images: [
      {
        image: "4.png",
      },
      {
        image: "6.png",
      },
      {
        image: "5.png",
      },
    ],
    date: "11Feb23",
    endDate: "24Feb23",
    chartId: "widgetsChart2",
    option: RadialChart_2,
  },
  {
    name: "Web Page",
    images: [
      {
        image: "7.png",
      },
      {
        image: "8.png",
      },
      {
        image: "",
      },
    ],
    date: "17Mar23",
    endDate: "08Mar23",
    chartId: "widgetsChart3",
    option: RadialChart_3,
  },
  {
    name: "CRM Admin",
    images: [
      {
        image: "12.png",
      },
      {
        image: "11.png",
      },
      {
        image: "12.png",
      },
    ],
    date: "05Sep23",
    endDate: "13Sep23",
    chartId: "widgetsChart4",
    option: RadialChart_4,
  },
];

export const TotalProjectChart: ApexOptions = {
  series: [
    {
      name: "PRODUCT A",
      data: [20, 36, 24, 10, 22, 43, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [35, 20, 38, 38, 13, 27, 23, 20, 8, 13, 27],
    },
    {
      name: "PRODUCT C",
      data: [14, 16, 42, 46, 21, 14, 17, 15, 15, 21, 14],
    },
  ],
  chart: {
    type: "bar",
    height: 220,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 230,
        },
      },
    },
    {
      breakpoint: 1501,
      options: {
        chart: {
          height: 270,
        },
      },
    },
  ],
  colors: [primary, secondary, "#D77748"],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      columnWidth: "35%",
    },
  },
  xaxis: {
    categories: ["01/01/2011 GMT", "01/02/2011 GMT", "01/03/2011 GMT", "01/04/2011 GMT", "01/05/2011 GMT", "01/06/2011 GMT"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
};

export const TotalProjectData = [
  {
    color: "primary",
    title: "Completed",
  },
  {
    color: "secondary",
    title: "In Progress",
  },
  {
    color: "warning",
    title: "Terminated",
  },
];

export const ProjectChart: ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "area",
      data: [43, 43, 48, 43, 57, 50, 34, 52, 40, 40, 40, 46, 52, 40, 40, 30, 42, 37, 42, 38, 38, 38],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [4, 2, 2],
    curve: "straight",
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    strokeDashArray: 6,
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: ["#7A70BA", "#54BA4A", "#FF3364"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  annotations: {
    xaxis: [
      {
        x: 312,
        strokeDashArray: 5,
        borderWidth: 3,
        borderColor: primary,
      },
    ],
    points: [
      {
        x: 312,
        y: 52,
        marker: {
          size: 8,
          fillColor: primary,
          strokeColor: "#ffffff",
          strokeWidth: 4,
          radius: 5,
        },
        label: {
          borderWidth: 1,
          offsetY: 0,
          text: "43.10k",
          style: {
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Outfit, sans-serif",
          },
        },
      },
    ],
  },
  labels: ["Jan", "", "Feb", "", "Feb", "", "Apr", "", "Mar", "", "Jun", "", "Apr", "", "Aug", "Sep", "May", "Nov", "Aug", "Sep", "Jun", "Nov"],
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    min: 0,
    tickAmount: 6,
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
};

export const OrderChart: ApexOptions = {
  series: [
    {
      name: "Revenue",
      data: [30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11],
    },
  ],
  chart: {
    type: "bar",
    height: 180,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
    },
  },
  colors: ["#48A3D7"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.3,
  },
  tooltip: {
    enabled: false,
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  responsive: [
    {
      breakpoint: 405,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
};

export const ClientActivityTableData = [
  {
    image: "1.png",
    title: "Redesign Layout",
    name: "Anna Catmire",
    date: "Sep 20 - Oct 26",
    images: ["1.png", "12.png", "3.png", ""],
    type: "UI/UX Design",
    progressValue: "40",
    color: "primary",
  },
  {
    image: "2.png",
    title: "Login & Sign Up Ui",
    name: "John Elliot",
    date: "Mar 16 - Apr 10",
    images: ["4.png", "5.png", "6.png"],
    type: "Designer",
    progressValue: "70",
    color: "secondary",
  },
  {
    image: "3.png",
    title: "Redesign CRM",
    name: "Ashley Hart",
    date: "May 09 - Jun 02",
    images: ["7.png", "8.png", "9.png", ""],
    type: "UI/UX Design",
    progressValue: "50",
    color: "warning",
  },
  {
    image: "4.png",
    title: "Front-End Website",
    name: "Dana Lemon",
    date: "Jul 12 - Aug 20",
    images: ["10.png", "11.png", "12.png"],
    type: "Developer",
    progressValue: "50",
    color: "tertiary",
  },
  {
    image: "3.png",
    title: "Redesign CRM",
    name: "Ashley Hart",
    date: "May 09 - Jun 02",
    images: ["7.png", "8.png", "9.png", ""],
    type: "UI/UX Design",
    progressValue: "50",
    color: "warning",
  },
  {
    image: "1.png",
    title: "Redesign Layout",
    name: "Anna Catmire",
    date: "Sep 20 - Oct 26",
    images: ["1.png", "12.png", "3.png", ""],
    type: "UI/UX Design",
    progressValue: "40",
    color: "primary",
  },
  {
    image: "4.png",
    title: "Front-End Website",
    name: "Dana Lemon",
    date: "Jul 12 - Aug 20",
    images: ["10.png", "11.png", "12.png"],
    type: "Developer",
    progressValue: "50",
    color: "tertiary",
  },
  {
    image: "2.png",
    title: "Login & Sign Up Ui",
    name: "John Elliot",
    date: "Mar 16 - Apr 10",
    images: ["4.png", "5.png", "6.png"],
    type: "Designer",
    progressValue: "70",
    color: "secondary",
  },
  {
    image: "1.png",
    title: "Redesign Layout",
    name: "Anna Catmire",
    date: "Sep 20 - Oct 26",
    images: ["1.png", "12.png", "3.png", ""],
    type: "UI/UX Design",
    progressValue: "40",
    color: "primary",
  },
  {
    image: "2.png",
    title: "Login & Sign Up Ui",
    name: "John Elliot",
    date: "Mar 16 - Apr 10",
    images: ["4.png", "5.png", "6.png"],
    type: "Designer",
    progressValue: "70",
    color: "secondary",
  },
];

export const TodayTasksData = [
    {
        color:"primary",
        header:NFTillustrationPackage,
        img:"17.png",
        name:"Hackett Yessenia",
        assign:"Assigned to",
    },
    {
        color:"secondary",
        header:PodcastlandingPage,
        img:"13.png",
        img1:"14.png",
        name:"schneider..",
        assign:"Assigned to",
    },
    {
        color:"warning",
        header:DeliveryFoodApp,
        img:"15.png",
        name:"Mahdi Gholizadeh",
        assign:"Assigned to",
    }
]

export const OnlineTimelineGroup =[
    { id: 1, title: '12am' },
    { id: 2, title: '1am' },
    { id: 3, title: '2am' },
    { id: 4, title: '3am' },
    { id: 5, title: '4am' },
    { id: 6, title: '5am' },
    { id: 7, title: '6am' },
    { id: 8, title: '7am' },
    { id: 9, title: '8am' },
    { id: 10, title: '9am' },
    { id: 11, title: '10am' },
    { id: 12, title: '11am' },
    { id: 13, title: '12pm' },
    { id: 14, title: '1pm' },
    { id: 15, title: '2pm' },
    { id: 16, title: '3pm' },
    { id: 17, title: '4pm' },
    { id: 18, title: '5pm' },
    { id: 19, title: '6pm' },
    { id: 20, title: '7pm' },
    { id: 21, title: '8pm' },
    { id: 22, title: '9pm' },
    { id: 23, title: '10pm' },
    { id: 24, title: '11pm' },
] 

export const OnlineTimelineItems = [
    {
      id: 1,
      group: 1,
      title: 'Create Detail Page',
      start_time: moment(),
      end_time: moment().add(1, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'Profile Landing page',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour')
    },
    {
      id: 3,
      group: 1,
      title: 'Teammeeting',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour')
    }
  ]