import { ApexOptions } from "apexcharts";

const primary = "var(--theme-default)";
const secondary = "var(--theme-secondary)";

export const GrowthChart: ApexOptions = {
  series: [
    {
      name: "Growth",
      data: [22, 14, 23, 8, 14, 12, 2, 14, 18, 35, 18, 8, 24],
    },
  ],
  chart: {
    height: 150,
    type: "line",
    stacked: true,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 4,
      color: "#7A70BA",
      opacity: 0.22,
    },
  },
  grid: {
    show: true,
    borderColor: "#000000",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },

  colors: ["#5527FF"],
  stroke: {
    width: 3,
    curve: "smooth",
  },
  xaxis: {
    type: "category",
    categories: ["0", "", "10k", "", "20k", "", "30k", "", "40k", "", "50k", "", "60k", ""],
    tickAmount: 10,
    labels: {
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
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#5527FF"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: "#7A70BA",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#48A3D7",
          opacity: 1,
        },
      ],
    },
  },
  yaxis: {
    min: -10,
    max: 40,
    labels: {
      show: false,
    },
  },
};

export const ShiftsOptionChart: ApexOptions = {
  labels: ["Shoes", "Grocery", "other", "other"],
  series: [30, 25, 35, 55],
  chart: {
    type: "donut",
    height: 200,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 6,
  },
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
            label: "$ 34,098",
            formatter: () => "Total Overviewt",
          },
        },
      },
    },
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
  colors: ["#48A3D7", "#D77748", "#C95E9E", "#7A70BA"],
};

export const ShiftsOverviewData = [
  {
    color: "primary",
    title: "New",
    count: 86,
  },
  {
    color: "secondary",
    title: "Waiting for approval",
    count: 210,
  },
  {
    color: "warning",
    title: "Assigned",
    count: 95,
  },
  {
    color: "tertiary",
    title: "Cancelled",
    count: 37,
  },
];

export const ProjectsTableData = [
  {
    id: 1,
    image: 1,
    name: "Rules Post on Dribble",
    color: "primary",
    type: "Document",
    date: "12 Aug 2023",
    size: "200 Kb",
    author: "Monry Hasu",
  },
  {
    id: 2,
    image: 2,
    name: "Login & Sign Up Ui",
    type: "Animation",
    color: "secondary",
    date: "19 Mar 2023",
    size: "3.5 Mb",
    author: "Alex Madus",
  },

  {
    id: 5,
    image: 1,
    name: "Rules Post on Dribble",
    type: "Document",
    color: "tertiary",
    date: "12 Aug 2023",
    size: "200 Kb",
    author: "Monry Hasu",
  },
  {
    id: 6,
    image: 2,
    name: "Login & Sign Up Ui",
    type: "Animation",
    color: "secondary",
    date: "19 Mar 2023",
    size: "3.5 Mb",
    author: "Alex Madus",
  },
  {
    id: 7,
    image: 3,
    name: "Nft website Pages",
    type: "Image",
    color: "secondary",
    date: "30 Jun 2023",
    size: "800 Kb",
    author: "Nomru Nalij",
  },
  {
    id: 8,
    image: 4,
    name: "Square Dashboard",
    type: "Document",
    color: "tertiary",
    date: "24 Oct 2023",
    size: "2.8 Mb",
    author: "Willium sen",
  },
  {
    id: 3,
    image: 3,
    name: "Nft website Pages",
    type: "Image",
    color: "warning",
    date: "30 Jun 2023",
    size: "800 Kb",
    author: "Nomru Nalij",
  },
  {
    id: 4,
    image: 4,
    name: "Square Dashboard",
    type: "Document",
    color: "tertiary",
    date: "24 Oct 2023",
    size: "2.8 Mb",
    author: "Willium sen",
  },
  {
    id: 9,
    image: 3,
    name: "Rules Post on Dribble",
    type: "Image",
    color: "warning",
    date: "12 Aug 2023",
    size: "200 Kb",
    author: "Monry Hasu",
  },
  {
    id: 10,
    image: 2,
    name: "Login & Sign Up Ui",
    type: "Animation",
    color: "secondary",
    date: "19 Mar 2023",
    size: "3.5 Mb",
    author: "Alex Madus",
  },
];

export const CustomerChartData: ApexOptions = {
  series: [
    {
      type: "bar",
      data: [350, 180, 240, 470, 200, 570, 300, 200],
    },
    {
      type: "bar",
      data: [500, 390, 280, 140, 290, 190, 390, 90],
    },
    {
      type: "line",
      data: [350, 180, 240, 470, 200, 570, 300, 200],
    },
  ],
  chart: {
    height: 350,
    toolbar: {
      show: false,
    },
  },
  markers: {
    size: 6,
    strokeColors: "#ffffff",
    strokeWidth: 3,
    offsetX: -3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "60%",
      borderRadius: 6,
      dataLabels: {
        position: "top",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    offsetX: -6,
    style: {
      fontSize: "14px",
      fontWeight: 600,
      colors: ["#fff"],
    },
  },
  stroke: {
    show: true,
    width: [4, 4, 3],
    colors: ["#ffffff", "#ffffff", primary],
  },
  colors: [primary, secondary],
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
    axisBorder: {
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
  yaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 340,
        },
      }
    },
    {
      breakpoint: 1400,
      options: {
        series: [
          {
            type: "bar",
            data: [350, 180, 240, 470, 200],
          },
          {
            type: "bar",
            data: [500, 390, 280, 140, 290],
          },
          {
            type: "line",
            data: [350, 180, 240, 470, 200],
          },
        ],
      },
    },
    {
      breakpoint: 1200,
      options: {
        series: [
          {
            type: "bar",
            data: [350, 180, 240, 470, 200, 570, 300, 200],
          },
          {
            type: "bar",
            data: [500, 390, 280, 140, 290, 190, 390, 90],
          },
          {
            type: "line",
            data: [350, 180, 240, 470, 200, 570, 300, 200],
          },
        ],
      },
    },
    {
      breakpoint: 550,
      options: {
        series: [
          {
            type: "bar",
            data: [350, 180, 240, 470],
          },
          {
            type: "bar",
            data: [500, 390, 280, 140],
          },
          {
            type: "line",
            data: [350, 180, 240, 470],
          },
        ],
      },
    },
  ],
};

export const NotificationsData = [
  {
    img: "wallet.png",
    title: "New daily offer added",
    subTitle: "New user-only offer added",
    color: "primary",
    date: "10 Sep,2023",
  },
  {
    img: "shield-dne.png",
    title: "Product Evaluation",
    subTitle: "Changed to a new workflow",
    color: "info",
    date: "12 Oct,2023",
  },
  {
    img: "graph.png",
    title: "Return of a Product",
    subTitle: "452 items were returned",
    color: "warning",
    date: "15 Mar,2023",
  },
  {
    img: "ticket-star.png",
    title: "Recently Paid",
    subTitle: "Mastercard payment of $343",
    color: "tertiary",
    date: "20 Jun,2023",
  },
];

export const UpcomingData = [
  {
    img: "05.png",
    name: "John Elliot",
    date: "21 Oct 2023",
    time: "15:55 AM",
  },
  {
    img: "06.png",
    name: "Ashley Hart",
    date: "12 Oct 2023",
    time: "10:20 AM",
  },
  {
    img: "07.png",
    name: "Anna lverson",
    date: "05 Oct 2023",
    time: "14:30 AM",
  },
  {
    img: "08.png",
    name: "Dana Lemon",
    date: "01 Oct 2023",
    time: "18:45 AM",
  },
];

export const ActiveTableData = [
  {
    img: "01.jpg",
    name: "Joshua Wood",
    position: "UI/UX Designer",
    status: "02 hours",
    color: "primary",
    btnName: "Away",
  },
  {
    img: "02.jpg",
    name: "Ashley Hart",
    position: "Website Design",
    status: "05 hours",
    color: "secondary",
    btnName: "Working",
  },
  {
    img: "03.jpg",
    name: "Anna lverson",
    position: "UX Research",
    status: "10 hours",
    color: "secondary",
    btnName: "Working",
  },
  {
    img: "04.jpg",
    name: "Ron Dayley",
    position: "234+ Online",
    status: "15 hours",
    color: "primary",
    btnName: "Away",
  },
];

export const SalesData = [
  {
    img: "customers.png",
    title: "Customers",
    count: "1.736",
    result: "+3.7%",
    color: "success",
  },
  {
    img: "revenue.png",
    title: "Revenue",
    count: "$9.247",
    result: "-0.10%",
    color: "danger",
  },
  {
    img: "profit.png",
    title: "Profit",
    count: "80%",
    result: "+11.6%",
    color: "success",
  },
];

export const SalesChartData: ApexOptions = {
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [20, 50, 60, 180, 90, 340, 120, 250, 190, 100, 180, 380, 190, 220, 100, 90, 140, 70, 130, 90, 100, 50, 10, 0],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [20, 70, 30, 100, 120, 220, 250, 100, 200, 300, 330, 270, 300, 200, 180, 220, 130, 300, 220, 180, 40, 70, 10, 0],
    },
  ],
  chart: {
    height: 270,
    type: "line",
    toolbar: {
      show: false,
    },

    dropShadow: {
      enabled: true,
      top: 4,
      left: 1,
      blur: 8,
      color: '#7A70BA',
      opacity: 0.4,
    },
  },
  stroke: {
    curve: "smooth",
    width: [3, 3],
    dashArray: [0, 4],
  },
  grid: {
    show: true,
    borderColor: "rgba(106, 113, 133, 0.30)",
    strokeDashArray: 3,
  },
  fill: {
    type: "solid",
    opacity: [0, 1],
  },

  labels: ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "", "Dec"],
  markers: {
    size: [3, 0],
    colors: ["#3D434A"],
    strokeWidth: [0, 0],
  },
  responsive: [
    {
      breakpoint: 991,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          height: 325,
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
  annotations: {
    xaxis: [
      {
        x: 550,
        strokeDashArray: 5,
        borderWidth: 3,
        borderColor: "#7a70ba69",
      },
    ],
    points: [
      {
        x: 550,
        y: 330,
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
          text: "32.10k",
          style: {
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Outfit, sans-serif",
          },
        },
      },
    ],
  },
  legend: {
    show: false,
  },
  colors: ["#7A70BA", "#8D8D8D"],
  xaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "k";
      },
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },
    },
  },
};

export const SalesByProductTableData = [
  {
    img: "1.png",
    fileName: "Touch sensor Lamp",
    amount: "7.938",
    sold: "52.93%",
    color: "primary",
    value: 70,
  },
  {
    img: "2.png",
    fileName: "Bluetooth headphone",
    amount: "2.937",
    sold: "12.52%",
    color: "secondary",
    value: 40,
  },
  {
    img: "3.png",
    fileName: "Apple watch series 8",
    amount: "1.923",
    sold: "84.12%",
    color: "warning",
    value: 60,
  },
  {
    img: "4.png",
    fileName: "Macbook Pro M1",
    amount: "5.538",
    sold: "01.41%",
    color: "tertiary",
    value: 80,
  },
  {
    img: "5.png",
    fileName: "iphone 12 Pro max",
    amount: "8.258",
    sold: "14.34%",
    color: "primary",
    value: 50,
  },
];
