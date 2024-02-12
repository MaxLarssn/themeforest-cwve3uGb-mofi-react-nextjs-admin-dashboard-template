import { Href } from "@/Constant";
import { TableActionType, ZeroConfigurationTableColumnsType } from "@/Types/TableType";

export const ZeroConfigurationData = [
  {
    id: 1,
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: 33,
    startDate: "2008/11/28",
    salary: "$162,700",
    action: "t-1",
  },
  {
    id: 2,
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2009/01/12",
    salary: "$86,000",
    action: "t-2",
  },
  {
    id: 3,
    name: "Brielle WilLIamson",
    position: "Integration SpeciaLIst",
    office: "New York",
    age: 61,
    startDate: "2012/12/02",
    salary: "$372,000",
    action: "t-3",
  },
  {
    id: 4,
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    startDate: "2012/03/29",
    salary: "$433,060",
    action: "t-4",
  },
  {
    id: 5,
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    age: 36,
    startDate: "2008/10/16",
    salary: "$470,600",
    action: "t-5",
  },
  {
    id: 6,
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    age: 39,
    startDate: "2009/09/15",
    salary: "$205,500",
    action: "t-6",
  },
  {
    id: 7,
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    age: 27,
    startDate: "2011/01/25",
    salary: "$112,000",
    action: "t-7",
  },
  {
    id: 8,
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
    action: "t-8",
  },
  {
    id: 9,
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
    action: "t-9",
  },
  {
    id: 10,
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    age: 30,
    startDate: "2008/12/19",
    salary: "$90,560",
    action: "t-10",
  },
  {
    id: 11,
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    age: 22,
    startDate: "2013/03/03",
    salary: "$342,000",
    action: "t-11",
  },
  {
    id: 12,
    name: "Rhona Davidson",
    position: "Integration SpeciaLIst",
    office: "Tokyo",
    age: 55,
    startDate: "2010/10/14",
    salary: "$327,900",
    action: "t-12",
  },
  {
    id: 13,
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: 23,
    startDate: "2008/12/13",
    salary: "$103,600",
    action: "t-13",
  },
  {
    id: 14,
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    age: 61,
    startDate: "2011/04/25",
    salary: "$320,800",
    action: "t-14",
  },
];

const TableAction = ({ id }: TableActionType) => {
  return (
    <ul className="action" id={id}>
      <li className="edit">
        <a href={Href}>
          <i className="icon-pencil-alt" />
        </a>
      </li>
      <li className="delete">
        <a href={Href}>
          <i className="icon-trash" />
        </a>
      </li>
    </ul>
  );
};

export const ZeroConfigurationColumn = [
  {
    name: "Name",
    selector: (row: ZeroConfigurationTableColumnsType) => row["name"],
    sortable: true,
  },
  {
    name: "Position",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.position}`,
    sortable: true,
  },
  {
    name: "Office",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.office}`,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.age}`,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row: ZeroConfigurationTableColumnsType) => row["startDate"],
    sortable: true,
  },
  {
    name: "Salery",
    selector: (row: ZeroConfigurationTableColumnsType) => `${row.salary}`,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: ZeroConfigurationTableColumnsType) => <TableAction id={row.action} />,
    sortable: true,
  },
];