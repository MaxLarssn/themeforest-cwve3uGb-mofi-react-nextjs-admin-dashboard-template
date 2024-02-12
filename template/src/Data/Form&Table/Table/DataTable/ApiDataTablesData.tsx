import { AddRowsTable } from "@/Types/TableType";

export const AddRowData = [
  {
    column1: 101,
    column2: 10.2,
    column3: 10.3,
    column4: 10.4,
    column5: 10.5,
  },
  {
    column1: 111,
    column2: 11.2,
    column3: 11.3,
    column4: 11.4,
    column5: 11.5,
  },
  {
    column1: 121,
    column2: 12.2,
    column3: 12.3,
    column4: 12.4,
    column5: 12.5,
  },
];

export const AddRowColumn = [
  {
    name: "Column1",
    selector: (row: AddRowsTable) => row.column1,
    sortable: true,
    center: false,
  },
  {
    name: "Column2",
    selector: (row: AddRowsTable) => row.column2,
    sortable: true,
    center: true,
  },
  {
    name: "Column3",
    selector: (row: AddRowsTable) => row.column3,
    sortable: true,
    center: true,
  },
  {
    name: "Column4",
    cell: (row: AddRowsTable) => row.column4,
    sortable: true,
    center: true,
  },
  {
    name: "Column5",
    cell: (row: AddRowsTable) => row.column5,
    sortable: true,
    center: true,
  },
];
