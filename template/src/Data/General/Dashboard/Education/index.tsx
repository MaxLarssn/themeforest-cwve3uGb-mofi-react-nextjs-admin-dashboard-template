import { ApexOptions } from "apexcharts";

const primary = "#7A70BA";
const secondary = "#48A3D7";

export const TotalStudentData = [
  {
    student: "42,954",
    title: "Total Students",
    color: "danger",
    icon: "down",
    percentage: "- 17.06%",
    detail: "than last 6 Month",
    image: "student.png",
    class: "student",
  },
  {
    student: "659",
    title: "Total Teachers",
    color: "success",
    icon: "up",
    percentage: "+27.02%",
    detail: "than last 4 Month",
    image: "teacher.png",
    class: "student-2",
  },
  {
    student: "984",
    title: "Events",
    color: "success",
    icon: "up",
    percentage: "+ 12.01%",
    detail: "than last 8 Month",
    image: "calendar.png",
    class: "student-3",
  },
  {
    student: "1,984",
    title: "Invoice Status",
    color: "danger",
    icon: "down",
    percentage: "- 15.02%",
    detail: "than last 5 Month",
    image: "invoice.png",
    class: "student-4",
  },
];

export const StudyStatisticChart: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [4.6, 3.6, 2, 3, 4, 2.4, 2.8, 4.3, 2, 1.6],
    },
    {
      name: "series2",
      data: [1.5, 2, 3.8, 3.5, 2.2, 3.5, 4, 3, 1.5, 3.8],
    },
  ],
  chart: {
    height: 230,
    type: "area",
    offsetY: 12,
    offsetX: -15,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [primary, secondary],

  stroke: {
    curve: "smooth",
    width: 2,
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
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [5, 100, 100, 100],
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
        y: 4.5,
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
          text: "7h a week on average in Apr",
          style: {
            fontSize: "14px",
            fontWeight: "600",
            fontFamily: "Outfit, sans-serif",
          },
        },
      },
    ],
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },

      formatter: (value) => {
        return `${value}h`;
      },
    },
  },
  xaxis: {
    type: "category",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    tickAmount: 12,
    labels: {
      minHeight: undefined,
      maxHeight: 28,
      offsetX: 10,
      offsetY: 0,
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
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="apex-tooltip"> 
                  <span>
                       <span class="bg-secondary"> </span>
                        Selling : ${series[0][dataPointIndex]} K
                  </span> 
                  <span class="mt-2">
                       <span class="bg-primary"> </span>
                        Selling : ${series[1][dataPointIndex]} K
                  </span> 
                </div>`;
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1657,
      options: {
        chart: {
          height: 190,
        },
      },
    },
  ],
};


export const AssignmentData = [
    {
       id:"0542",
       image:"1.png",
       name:"Gary payi",
       subjects:"Accounts",
       startDate:"12 May 2023",
       endDate:"20 May 2023",
       value:"80",
       color:"primary"
    },
    {
        id:"9548",
        image:"2.png",
        name:"Ralph Waters",
        subjects:"UI/UX Design",
        startDate:"06 May 2023",
        endDate:"16 May 2023",
        value:"60",
        color:"secondary"
     },
     {
        id:"2950",
        image:"3.png",
        name:"Edwin Day",
        subjects:"Mathematics",
        startDate:"25 Sep 2023",
        endDate:"30 May 2023",
        value:"50",
        color:"warning"
     },
     {
        id:"9605",
        image:"4.png",
        name:"Aaron Hogan",
        subjects:"Computer App",
        startDate:"23 May 2023",
        endDate:"26 May 2023",
        value:"65",
        color:"tertiary"
     },
     {
        id:"1522",
        image:"2.png",
        name:"Ralph Waters",
        subjects:"UI/UX Design",
        startDate:"06 May 2023",
        endDate:"26 May 2023",
        value:"60",
        color:"secondary"
     },
     {
        id:"125",
        image:"4.png",
        name:"Aaron Hogan",
        subjects:"Computer App",
        startDate:"5 May 2023",
        endDate:"19 May 2023",
        value:"65",
        color:"tertiary"
     },
     {
        id:"254",
        image:"1.png",
        name:"Gary payi",
        subjects:"Accounts",
        startDate:"22 May 2023",
        endDate:"2 May 2023",
        value:"80",
        color:"primary"
     },
]

export const ActivelyHoursChart:ApexOptions = {
    series: [{
        name: 'PRODUCT A',
        data: [2, 4, 3.8, 3, 4, 3, 2]
    }, {
        name: 'PRODUCT B',
        data: [5, 4, 5, 5, 4, 5, 5]
    }, {
        name: 'PRODUCT C',
        data: [7, 6, 6, 7, 6, 4, 7]
    }, {
        name: 'PRODUCT C',
        data: [8.9, 8.9, 8.9, 8.9, 8.9, 8.9, 8.9]
    },],
    chart: {
        type: 'bar',
        height: 345,
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    stroke: {
        show: true,
        width: [4, 4, 4, 4],
        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff']
    },
    responsive: [{
        breakpoint: 480,
        options: {

            legend: {
                show: false,
            }
        }

    },
    {
        breakpoint: 1200,
        options: {
            chart: {
                height: 200,
            },
            series: [{
                name: 'PRODUCT A',
                data: [2, 4, 3.8, 3, 4, 3, 2]
            }, {
                name: 'PRODUCT B',
                data: [5, 4, 5, 5, 4, 5, 5]
            }, {
                name: 'PRODUCT C',
                data: [7, 6, 6, 7, 6, 4, 7]
            }, {
                name: 'PRODUCT C',
                data: [1, 2, 2, 1, 2, 2, 1]
            },],
        }

    },
    {
        breakpoint: 768,
        options: {
            chart: {
                height: 345,
            },
            series: [{
                name: 'PRODUCT A',
                data: [2, 4, 3.8, 3, 4, 3, 2]
            }, {
                name: 'PRODUCT B',
                data: [5, 4, 5, 5, 4, 5, 5]
            }, {
                name: 'PRODUCT C',
                data: [7, 6, 6, 7, 6, 4, 7]
            }, {
                name: 'PRODUCT C',
                data: [8.9, 8.9, 8.9, 8.9, 8.9, 8.9, 8.9]
            },],
        }

    },
    {
        breakpoint: 436,
        options: {
            chart: {
                height: 345,
            },
            series: [{
                name: 'PRODUCT A',
                data: [2, 4, 3.8, 3, 4]
            }, {
                name: 'PRODUCT B',
                data: [5, 4, 5, 5, 4]
            }, {
                name: 'PRODUCT C',
                data: [7, 6, 6, 7, 6]
            }, {
                name: 'PRODUCT C',
                data: [8.9, 8.9, 8.9, 8.9, 8.9]
            },],
        }

    },],

    colors: ['#C95E9E', '#D77748', secondary, primary],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 2,
            columnWidth: '38%',
        },
    },
    grid: {
        show: true,
        strokeDashArray: 5,
        position: 'back',
        xaxis: {
            lines: {
                show: false
            }
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Feb', 'Feb'],
        labels: {
            show: true,
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1
    },
    yaxis: {
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#3D434A',
            },
        },
    }
};

export const EnrolledData = [
    {
        color:"primary",
        title:"After Effects CC Masterclass",
        time:"10:20 -11:30"
    },
    {
        color:"secondary",
        title:"Design from A to Z",
        time:"09:00 -10:30"
    },
    {
        color:"warning",
        title:"Graphic Design Bootcamp",
        time:"15:00 -16:00"
    },
    {
        color:"tertiary",
        title:"The Ultimate Guide to Usabillity",
        time:"13:25 -14:30"
    },
    {
        color:"success",
        title:"After Effects CC Masterclass",
        time:"12:45 -14:20"
    },
]

export const FeaturedCourseData = [
    {
        image:"1.png",
        title:"Mobile UX",
        name:"Erin Mooney",
        date:"Feb 15",
        ratting:"4.8",
        type:"UX/UI Design",
        id:"colorChangeButton"
    },
    {
        image:"2.png",
        title:"Illustration",
        name:"Elsie Lemon",
        date:"Mar 22",
        ratting:"2.3",
        type:"Web Designer",
        id:"colorChangeButton1"
    },
    {
        image:"3.png",
        title:"Design System",
        name:"Anna Green",
        date:"Jun 28",
        ratting:"1.5",
        type:"Developer",
        id:"colorChangeButton2"
    },
    {
        image:"4.png",
        title:"Leadership",
        name:"John Elliot",
        date:"Apr 04",
        ratting:"42.4",
        type:"UX/UI Design",
        id:"colorChangeButton3"
    },
    {
        image:"5.png",
        title:"Latest Figma",
        name:"Dylan Field",
        date:"jun 01",
        ratting:"5.4",
        type:"Graphic Designer",
        id:"colorChangeButton4"
    }
]

export const MonthlyChartData:ApexOptions = {
    series: [{
        name: 'Website Blog',
        type: 'column',
        data: [20, 38, 18, 30, 50, 32, 60, 39, 79, 50, 40, 50, 40, 24, 65, 42]
    }, {
        name: 'Social Media',
        type: 'line',
        data: [10, 22, 36, 49, 62, 78, 90, 98, 97, 90, 78, 62, 49, 36, 22, 10]
    }],
    chart: {
        height: 315,
        type: 'line',
        offsetX: -15,
        toolbar: {
            show: false
        },
    },
    stroke: {
        width: [0, 3]
    },
    grid: {
        show: true,
        borderColor: 'rgba(106, 113, 133, 0.30)',
        strokeDashArray: 3,
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        type: 'gradient',
        opacity: 1,
        gradient: {
            shade: 'light',
            type: "vertical",
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 80, 100],
        },
    },
    markers: {
        discrete: [{
            seriesIndex: 1,
            dataPointIndex: 0,
            fillColor: primary,
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }, {
            seriesIndex: 1,
            dataPointIndex: 7,
            fillColor: primary,
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }, {
            seriesIndex: 1,
            dataPointIndex: 12,
            fillColor: primary,
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }, {
            seriesIndex: 1,
            dataPointIndex: 15,
            fillColor: primary,
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        },],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: '60%',
        },
    },
    colors: [primary, secondary],
    legend: {
        show: false,
    },
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    xaxis: {
        categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '08', '09', '10', '11'],
        labels: {
            show: true,
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
        axisBorder: {
            show: false
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#3D434A',
            },

            formatter: (value) => {
                return `${value}%`;
            },
        },
    },
};

export const ScheduleChart:ApexOptions = {
    series: [
        {
            data: [
                {
                    x: "Branding",
                    y: [
                        new Date("2023-01-01").getTime(),
                        new Date("2023-01-30").getTime(),
                    ],
                    fillColor: primary,
                },
                {
                    x: "Web Design",
                    y: [
                        new Date("2023-02-20").getTime(),
                        new Date("2023-03-20").getTime(),
                    ],
                    fillColor: "#48A3D7",
                },
                {
                    x: "UX research",
                    y: [
                        new Date("2023-01-25").getTime(),
                        new Date("2023-02-25").getTime(),
                    ],
                    fillColor: "#D77748",
                },
                {
                    x: "Mobile Design",
                    y: [
                        new Date("2023-01-01").getTime(),
                        new Date("2023-02-01").getTime(),
                    ],
                    fillColor: "#C95E9E",
                },
                {
                    x: "NFT Website",
                    y: [
                        new Date("2023-02-20").getTime(),
                        new Date("2023-03-20").getTime(),
                    ],
                    fillColor: "#0DA759",
                },
                {
                    x: "Logo Design",
                    y: [
                        new Date("2023-01-25").getTime(),
                        new Date("2023-02-25").getTime(),
                    ],
                    fillColor: primary,
                },
            ],
        },
    ],
    chart: {
        height: 355,
        type: "rangeBar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: true,
            barHeight: "40%",
            dataLabels: {
                hideOverflowingLabels: false,
            },
        },
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
            var label = opts.w.globals.labels[opts.dataPointIndex];
            return label;
        },
        textAnchor: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '16px',
            fontFamily: 'Outfit, sans-serif',
        },
        background: {
            enabled: true,
            padding: 6,
            borderRadius: 12,
            borderWidth: 0,
            borderColor: "var(--white)",
            opacity: 0,
        },
    },
    xaxis: {
        type: "datetime",
        position: "top",
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#3D434A',
            },
        },

        tooltip: {
            enabled: false,
        },
    },
    grid: {
        show: false,
        row: {
            colors: ["#F4F7F9", "#fff"],
            opacity: 1,
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                grid: {
                    padding: {
                        left: -10,
                    },
                },
            },
        },
    ],
};