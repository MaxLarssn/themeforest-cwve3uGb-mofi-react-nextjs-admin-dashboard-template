import { ZeroConfigurationTableColumnsType } from "@/Types/TableType";

export const ChildRowData = [
  {
    text: "The DataTables API has a number of methods for attaching child rows to a parent row in the DataTable. This can be used to show additional information about a row, useful for cases where you wish to convey more information about a row than there is space for in the host table.",
  },
];

export const ChildRowColumn = [
  {
    name: "Name",
    selector: (row: ZeroConfigurationTableColumnsType) => row["name"],
    sortable: true,
    center: false,
  },
  {
    name: "Position",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.position}`,
    sortable: true,
    center: false,
  },
  {
    name: "Office",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.office}`,
    sortable: true,
    center: false,
  },
  {
    name: "Salary",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.salary}`,
    sortable: true,
    center: false,
  },
];
