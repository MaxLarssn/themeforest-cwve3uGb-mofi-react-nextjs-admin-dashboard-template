import { StockResultTableData } from "@/Types/TableType";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export const StockResultList = [`Data within DataTables can be easily rendered to add graphics or colour to your tables, as demonstrated in the example on this page. These examples make use of columns.render and drawCallback to customise the cells in three ways:`, `1. the colour of the cell is determine by the relative price of the stock.`, `2. a 'sparkline' class is added to the numeric array in the 'last' column.`, `3. The JQuery Sparklines Plugin Is Called To Turn That Array Into A Line Graph.`];

const AreaSpaLine: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [2.57, 2.54, 2.54, 2.56, 2.57, 2.58, 2.59],
    },
  ],
  chart: {
    height: 60,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2023-09-19T00:00:00.000Z", "2023-09-19T01:30:00.000Z", "2023-09-19T02:30:00.000Z", "2023-09-19T03:30:00.000Z", "2023-09-19T04:30:00.000Z", "2023-09-19T05:30:00.000Z", "2023-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine2: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [1.12, 1.11, 1.08, 1.08, 1.09, 1.11, 1.08],
    },
  ],
  chart: {
    height: 60,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2023-09-19T00:00:00.000Z", "2023-09-19T01:30:00.000Z", "2023-09-19T02:30:00.000Z", "2023-09-19T03:30:00.000Z", "2023-09-19T04:30:00.000Z", "2023-09-19T05:30:00.000Z", "2023-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine3: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [3.4, 3.39, 3.46, 3.51, 3.5, 3.48, 3.49],
    },
  ],
  chart: {
    height: 60,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2023-09-19T00:00:00.000Z", "2023-09-19T01:30:00.000Z", "2023-09-19T02:30:00.000Z", "2023-09-19T03:30:00.000Z", "2023-09-19T04:30:00.000Z", "2023-09-19T05:30:00.000Z", "2023-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine4: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [16.2, 16.4, 16.36, 16.35, 16.61, 16.46, 16.19],
    },
  ],
  chart: {
    height: 60,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2023-09-19T00:00:00.000Z", "2023-09-19T01:30:00.000Z", "2023-09-19T02:30:00.000Z", "2023-09-19T03:30:00.000Z", "2023-09-19T04:30:00.000Z", "2023-09-19T05:30:00.000Z", "2023-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine5: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [82.51, 83.47, 83.4, 83.68, 83.81, 83.29, 83.72],
    },
  ],
  chart: {
    height: 60,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2023-09-19T00:00:00.000Z", "2023-09-19T01:30:00.000Z", "2023-09-19T02:30:00.000Z", "2023-09-19T03:30:00.000Z", "2023-09-19T04:30:00.000Z", "2023-09-19T05:30:00.000Z", "2023-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

export const StockResultData = [
  {
    name: "ACME Gadgets",
    symbol: "AGDTS",
    price: "2.57",
    difference: <span style={{ color: "green" }}>0.02</span>,
    last: <ReactApexChart options={AreaSpaLine} series={AreaSpaLine.series} height="60" type="area" />,
  },
  {
    name: "Sole Goodman",
    symbol: "SGMAN",
    price: "16.61",
    difference: <span style={{ color: "green" }}>0.26</span>,
    last: <ReactApexChart options={AreaSpaLine2} series={AreaSpaLine2.series} height="60" type="area" />,
  },
  {
    name: "Spry Media Productions",
    symbol: "SPMP",
    price: "1.09",
    difference: <span style={{ color: "green" }}>0.01</span>,
    last: <ReactApexChart options={AreaSpaLine3} series={AreaSpaLine3.series} height="60" type="area" />,
  },
  {
    name: "Stanler Bits and Bobs",
    symbol: "SBIBO",
    price: "83.81",
    difference: <span style={{ color: "green" }}>0.13</span>,
    last: <ReactApexChart options={AreaSpaLine4} series={AreaSpaLine4.series} height="60" type="area" />,
  },
  {
    name: "Widget Emporium",
    symbol: "WDEMP",
    price: "3.50",
    difference: <span style={{ color: "red" }}>-0.01</span>,
    last: <ReactApexChart options={AreaSpaLine5} series={AreaSpaLine5.series} height="60" type="area" />,
  },
];

export const StockResultColumn = [
  {
    name: "Name",
    selector: (row: StockResultTableData) => row["name"],
    sortable: true,
  },
  {
    name: "Symbol",
    selector: (row: StockResultTableData) => `${row.symbol}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: StockResultTableData) => `${row.price}`,
    sortable: true,
  },
  {
    name: "Difference",
    cell: (row: StockResultTableData) => row.difference,
    sortable: true,
  },
  {
    name: "Last",
    cell: (row: StockResultTableData) => row.last,
    sortable: true,
  },
];
