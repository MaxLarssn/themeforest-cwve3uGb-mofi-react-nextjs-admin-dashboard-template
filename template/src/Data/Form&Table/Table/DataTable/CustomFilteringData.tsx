import { ImagePath } from "@/Constant";
import { DeleteRowDataProp } from "@/Types/TableType";

export const CustomFilteringList = [
  {
    text: "This example shows a search being performed on the age column in the data, based upon two inputs.",
  },
];

export const FilteringTableData = [
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Airi Satou
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 33,
    startDate: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/11.png`} alt="user image" />
        Ashton Cox
      </>
    ),
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: 47,
    startDate: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Bradley Greer
      </>
    ),
    position: "Junior Technical Author",
    office: "San Francisco",
    age: 66,
    startDate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Brenden Wagner
      </>
    ),
    position: "Software Engineer",
    office: "London",
    age: 41,
    startDate: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Brielle Williamson
      </>
    ),
    position: "Software Engineer",
    office: "San Francisco",
    age: 28,
    startDate: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Bruno Nash
      </>
    ),
    position: "Integration Specialist",
    office: "New York",
    age: 61,
    startDate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Caesar Vance
      </>
    ),
    position: "Software Engineer",
    office: "London",
    age: 38,
    startDate: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Cara Stevens
      </>
    ),
    position: "Pre-Sales Support",
    office: "New York",
    age: 21,
    startDate: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/3.png`} alt="user image" />
        Cedric Kelly
      </>
    ),
    position: "Sales Assistant",
    office: "New York",
    age: 46,
    startDate: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Cedric Kelly
      </>
    ),
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: 22,
    startDate: "2012/03/29",
    salary: "$433,060",
  },

  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Charde Marshall
      </>
    ),
    position: "Regional Director",
    office: "San Francisco",
    age: 36,
    startDate: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Colleen Hurst
      </>
    ),
    position: "Javascript Developer",
    office: "San Francisco",
    age: 39,
    startDate: "2009/09/15",
    salary: "$205,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Dai Rios
      </>
    ),
    position: "Personnel Lead",
    office: "Edinburgh",
    age: 35,
    startDate: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Donna Snider
      </>
    ),
    position: "Customer Support",
    office: "New York",
    age: 27,
    startDate: "2011/01/25",
    salary: "$112,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Doris Wilder
      </>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Finn Camacho
      </>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Fiona Green
      </>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Garrett Winters
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Cortez
      </>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Joyce
      </>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gloria Little
      </>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Haley Kennedy
      </>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hermione Butler
      </>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Herrod Chandler
      </>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hope Fuentes
      </>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Howard Hatfield
      </>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jackson Bradshaw
      </>
    ),
    position: "Director",
    office: "New York",
    age: 65,
    startDate: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jena Gaines
      </>
    ),
    position: "Office Manager",
    office: "London",
    age: 30,
    startDate: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jenette Caldwell
      </>
    ),
    position: "Development Lead",
    office: "New York",
    age: 30,
    startDate: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Doris Wilder
      </>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Finn Camacho
      </>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Fiona Green
      </>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Garrett Winters
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Cortez
      </>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Joyce
      </>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gloria Little
      </>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Haley Kennedy
      </>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hermione Butler
      </>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Herrod Chandler
      </>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Hope Fuentes
      </>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Howard Hatfield
      </>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jackson Bradshaw
      </>
    ),
    position: "Director",
    office: "New York",
    age: 65,
    startDate: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jena Gaines
      </>
    ),
    position: "Office Manager",
    office: "London",
    age: 30,
    startDate: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Jenette Caldwell
      </>
    ),
    position: "Development Lead",
    office: "New York",
    age: 30,
    startDate: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Doris Wilder
      </>
    ),
    position: "Sales Assistant",
    office: "Sidney",
    age: 23,
    startDate: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Finn Camacho
      </>
    ),
    position: "Support Engineer",
    office: "San Francisco",
    age: 47,
    startDate: "2009/07/07",
    salary: "$87,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Fiona Green
      </>
    ),
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: 48,
    startDate: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Garrett Winters
      </>
    ),
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    startDate: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Cortez
      </>
    ),
    position: "Team Leader",
    office: "San Francisco",
    age: 22,
    startDate: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Gavin Joyce
      </>
    ),
    position: "Developer",
    office: "Edinburgh",
    age: 42,
    startDate: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Tiger Nixon
      </>
    ),
    position: "Systems Administrator",
    office: "New York",
    age: 59,
    startDate: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Timothy Mooney
      </>
    ),
    position: "Senior Marketing Designer",
    office: "London",
    age: 43,
    startDate: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Unity Butler
      </>
    ),
    position: "Regional Director",
    office: "London",
    age: 47,
    startDate: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Vivian Harrell
      </>
    ),
    position: "Sales Assistant",
    office: "San Francisco",
    age: 59,
    startDate: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Yuri Berry
      </>
    ),
    position: "Secretary",
    office: "San Francisco",
    age: 41,
    startDate: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Zenaida Frank
      </>
    ),
    position: "Office Manager",
    office: "San Francisco",
    age: 51,
    startDate: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: (
      <>
        <img className="img-fluid table-avtar" src={`${ImagePath}/user/7.jpg`} alt="user image" />
        Zorita Serrano
      </>
    ),
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    age: 43,
    startDate: "2013/02/01",
    salary: "$75,650",
  },
];

export const FilteringTableColumn = [
  {
    name: "Employee Name",
    cell: (row: DeleteRowDataProp) => row["name"],
    sortable: true,
    center: false,
  },
  {
    name: "position",
    selector: (row: DeleteRowDataProp) => row["position"],
    sortable: true,
    center: false,
  },
  {
    name: "office",
    selector: (row: DeleteRowDataProp) => row["office"],
    sortable: true,
    center: false,
  },
  {
    name: "age",
    selector: (row: DeleteRowDataProp) => row["age"],
    sortable: true,
    center: false,
  },
  {
    name: "Start Date",
    selector: (row: DeleteRowDataProp) => row["startDate"],
    sortable: true,
    center: false,
  },
  {
    name: "salary",
    selector: (row: DeleteRowDataProp) => row["salary"],
    sortable: true,
    center: false,
  },
];
