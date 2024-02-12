const primary = "#7A70BA";
const secondary = "#48A3D7";

export const AreChartOneData = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const AreChartOneDataOption: any = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  width: "100%",
  height: 400,
  colors: [primary, secondary],
};

export const AreaChartTwoData = [
  ["Year", "Cars", "Trucks", "Drones", "Segways"],
  ["2013", 100, 400, 2000, 400],
  ["2014", 500, 700, 530, 800],
  ["2015", 2000, 1000, 620, 120],
  ["2016", 120, 201, 2501, 540],
];

export const AreaChartTwoDataOption: any = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  width: "100%",
  height: 400,
  colors: [primary, secondary, "#51bb25", "#f8d62b"],
};

export const ColumnChartData = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2018", 1e3, 400, 250],
  ["2019", 1170, 460, 300],
  ["2020", 660, 1120, 400],
  ["2021", 1030, 540, 450],
];

export const ColumnChartDataOption: any = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  bars: "vertical",
  vAxis: {
    format: "decimal",
  },
  height: 400,
  width: "100%",
  colors: [primary, secondary, "#51bb25"],
};

export const ColumnCartTwoData = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2018", 1e3, 400, 250],
  ["2019", 1170, 460, 300],
  ["2020", 660, 1120, 400],
  ["2021", 1030, 540, 450],
];

export const ColumnCartTwoDataOption: any = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  bars: "horizontal",
  vAxis: {
    format: "decimal",
  },
  height: 400,
  width: "100%",
  colors: [primary, secondary, "#51bb25"],
};

const daysToMilliseconds = (days: number) => {
  return days * 24 * 60 * 60 * 1000;
};

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  ["Research", "Find sources", null, new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null],
  ["Write", "Write paper", "write", null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, "Research,Outline"],
  ["Cite", "Create bibliography", "write", null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, "Research"],
  ["Complete", "Hand in paper", "complete", null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, "Cite,Write"],
  ["Outline", "Outline paper", "write", null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, "Research"],
];

export const GanttChartData = [columns, ...rows];

export const GanttChartDataOption: any = {
  height: 275,
  gantt: {
    criticalPathEnabled: false,
    arrow: {
      angle: 100,
      width: 5,
      color: "#51bb25",
      radius: 0,
    },

    palette: [
      {
        color: primary,
        dark: secondary,
        light: "#047afb",
      },
    ],
  },
};

export const LineChartData = [
  ["Month", "Guardians of the Galaxy", "The Avengers", "Transformers: Age of Extinction"],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 10.5, 32.4],
  [3, 40.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 20, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
];

export const LineChartDataOption: any = {
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD)",
  },
  colors: [primary, secondary, "#51bb25"],
  height: 500,
  width: "100%",
};

export const ComboChartData = [
  ["Month", "Bolivia", "Ecuador", "Madagascar", "Papua", "Rwanda", "Average"],
  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];

export const ComboChartDataOption: any = {
  title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
  height: 500,
  width: "100%",
  colors: [primary, secondary, "#51bb25", "#a927f9", "#f8d62b"],
};

export const BarOneChartData = [
  [
    "Element",
    "Density",
    {
      role: "style",
    },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Copper", 10, "#a927f9", 10],
  ["Silver", 12, "#f8d62b", 12],
  ["Gold", 14, "#f73164", 14],
  ["Platinum", 16, "color: #7366ff", 14],
];

export const BarOneChartDataOption: any = {
  title: "Density of Precious Metals, in g/cm^3",
  width: "100%",
  height: 400,
  bar: {
    groupWidth: "95%",
  },
  legend: {
    position: "none",
  },
};

export const WordTreeChartData = [["Phrases"], ["cats are better than dogs"], ["cats eat kibble"], ["cats are better than hamsters"], ["cats are awesome"], ["cats are people too"], ["cats eat mice"], ["cats meowing"], ["cats in the cradle"], ["cats eat mice"], ["cats in the cradle lyrics"], ["cats eat kibble"], ["cats for adoption"], ["cats are family"], ["cats eat mice"], ["cats are better than kittens"], ["cats are evil"], ["cats are weird"], ["cats eat mice"]];

export const WordTreeChartDataOption: any = {
  wordtree: {
    format: "implicit",
    word: "cats",
  },
};

export const PieOneChartData = [
  ["Task", "Hours per Day"],
  ["Work", 5],
  ["Eat", 10],
  ["Commute", 15],
  ["Watch TV", 20],
  ["Sleep", 25],
];

export const PieOneChartDataOption: any = {
  title: "My Daily Activities",
  width: "100%",
  height: 300,
  colors: ["#f8d62b", "#51bb25", "#a927f9", "#f73164", primary],
};

export const PieChartTwoData = [
  ["Task", "Hours per Day"],
  ["Work", 2],
  ["Eat", 2],
  ["Commute", 11],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const PieChartTwoDataOption:any = {
  title: "My Daily Activities",
  pieHole: 0.4,
  width: "100%",
  height: 300,
  colors: ["#f8d62b", "#a927f9", "#51bb25", "#f73164", primary],
};

export const PieChartThreeData = [
  ["Language", "Speakers (in millions)"],
  ["Assamese", 13],
  ["Bengali", 83],
  ["Bodo", 1.4],
  ["Dogri", 2.3],
  ["Gujarati", 46],
  ["Hindi", 300],
  ["Kannada", 38],
  ["Kashmiri", 5.5],
  ["Konkani", 5],
  ["Maithili", 20],
  ["Malayalam", 33],
  ["Manipuri", 1.5],
  ["Marathi", 72],
  ["Nepali", 2.9],
  ["Oriya", 33],
  ["Punjabi", 29],
  ["Sanskrit", 0.01],
  ["Santhali", 6.5],
  ["Sindhi", 2.5],
  ["Tamil", 61],
  ["Telugu", 74],
  ["Urdu", 52],
];

export const PieChartThreeDataOption: any = {
  title: "Indian Language Use",
  legend: "none",
  width: "100%",
  height: 300,
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export const PieChartForthData = [
  ["Task", "Hours per Day"],
  ["Work", 5],
  ["Eat", 10],
  ["Commute", 15],
  ["Watch TV", 20],
  ["Sleep", 25],
];

export const PieChartForthDataOption: any = {
  title: "My Daily Activities",
  is3D: true,
  width: "100%",
  height: 300,
  colors: ["#f8d62b", "#a927f9", "#51bb25", "#f73164", primary],
};
