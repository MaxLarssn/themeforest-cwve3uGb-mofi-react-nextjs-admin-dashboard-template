import { Href } from "@/Constant";
import { DeleteRowData } from "@/Types/TableType";

export const DeleteRowDataList = [
  {
    name: "Airi Satou",
    id: 1,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Angelica Ramos",
    id: 2,
    job: "Chief Executive Officer (CEO)",
    companyName: "Tata Co.",
    invoiceNumber: "#VC47",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2009/10/09",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$1.200.000,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Bradley Greer",
    id: 3,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#JH41",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2012/10/13",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$132.000,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Bruno Nash",
    id: 4,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Caesar Vance",
    id: 5,
    job: "Pre-Sales Support",
    companyName: "New York",
    invoiceNumber: "#CV21",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2011/12/12",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$106.450,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Cara Stevens",
    id: 6,
    job: "Sales Assistant",
    companyName: "New York",
    invoiceNumber: "#TY46",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/12/06",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$145.600,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Cedric Kelly",
    id: 7,
    job: "Senior Javascript Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#UH22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2012/03/29",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$433.060,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Charde Marshall",
    id: 8,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Colleen Hurst",
    id: 9,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Dai Rios",
    id: 10,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Donna Snider",
    id: 11,
    job: "Customer Support",
    companyName: "New York",
    invoiceNumber: "#GD27",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/01/25",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$112.000,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Doris Wilder",
    id: 12,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Finn Camacho",
    id: 13,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Fiona Green",
    id: 14,
    job: "Chief Operating Officer (COO)",
    companyName: "Infosys Ltd.",
    invoiceNumber: "#GF48",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/03/11",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$850.000,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Garrett Winters",
    id: 15,
    job: "Accountant",
    companyName: "Edinburgh",
    invoiceNumber: "#FG63",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2011/07/25",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$170.750,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Gavin Cortez",
    id: 16,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Gavin Joyce",
    id: 17,
    job: "Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#TH42",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/12/22",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$92.575,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Airi Satou",
    id: 18,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Bruno Nash",
    id: 19,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Gavin Cortez",
    id: 20,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Finn Camacho",
    id: 21,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Doris Wilder",
    id: 22,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Airi Satou",
    id: 23,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Charde Marshall",
    id: 24,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Airi Satou",
    id: 25,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Angelica Ramos",
    id: 26,
    job: "Chief Executive Officer (CEO)",
    companyName: "Tata Co.",
    invoiceNumber: "#VC47",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2009/10/09",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$1.200.000,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Bradley Greer",
    id: 27,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#JH41",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2012/10/13",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$132.000,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Bruno Nash",
    id: 28,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Caesar Vance",
    id: 29,
    job: "Pre-Sales Support",
    companyName: "New York",
    invoiceNumber: "#CV21",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2011/12/12",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$106.450,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Cara Stevens",
    id: 30,
    job: "Sales Assistant",
    companyName: "New York",
    invoiceNumber: "#TY46",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/12/06",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$145.600,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Cedric Kelly",
    id: 31,
    job: "Senior Javascript Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#UH22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2012/03/29",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$433.060,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Charde Marshall",
    id: 32,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Colleen Hurst",
    id: 33,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Dai Rios",
    id: 34,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Donna Snider",
    id: 35,
    job: "Customer Support",
    companyName: "New York",
    invoiceNumber: "#GD27",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%</i>,
    date: "2011/01/25",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$112.000,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Doris Wilder",
    id: 36,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Finn Camacho",
    id: 37,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Fiona Green",
    id: 38,
    job: "Chief Operating Officer (COO)",
    companyName: "Infosys Ltd.",
    invoiceNumber: "#GF48",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/03/11",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$850.000,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Garrett Winters",
    id: 39,
    job: "Accountant",
    companyName: "Edinburgh",
    invoiceNumber: "#FG63",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2011/07/25",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$170.750,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Gavin Cortez",
    id: 40,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Gavin Joyce",
    id: 41,
    job: "Developer",
    companyName: "Edinburgh",
    invoiceNumber: "#TH42",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">9.8%</i>,
    date: "2010/12/22",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$92.575,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Airi Satou",
    id: 42,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Bruno Nash",
    id: 43,
    job: "Software Engineer",
    companyName: "Tata Co.",
    invoiceNumber: "#UY38",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">1.4%</i>,
    date: "2011/05/03",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$163.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Gavin Cortez",
    id: 44,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Finn Camacho",
    id: 45,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Doris Wilder",
    id: 46,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Airi Satou",
    id: 47,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Charde Marshall",
    id: 48,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Colleen Hurst",
    id: 49,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Dai Rios",
    id: 50,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Gavin Cortez",
    id: 51,
    job: "Team Leader",
    companyName: "Google Co.",
    invoiceNumber: "#SW22",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2008/10/26",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$235.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Finn Camacho",
    id: 52,
    job: "Support Engineer",
    companyName: "Google Co.",
    invoiceNumber: "#YU47",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2009/07/07",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$87.500,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Doris Wilder",
    id: 53,
    job: "Sales Assistant",
    companyName: "Sidney",
    invoiceNumber: "#BH23",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">5.6%</i>,
    date: "2010/09/20",
    priority: <span className="badge badge-light-primary">High</span>,
    budget: "$85.600,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Airi Satou",
    id: 54,
    job: "Accountant",
    companyName: "Google Inc.",
    invoiceNumber: "#TY33",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.5%1</i>,
    date: "2008/11/28",
    priority: <span className="badge badge-light-danger">Urgent</span>,
    budget: "$162.700,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Charde Marshall",
    id: 55,
    job: "Regional Director",
    companyName: "Google Co.",
    invoiceNumber: "#FV36",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">1.4%</i>,
    date: "2008/10/16",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$470.600,00",
    action: (
      <ul className="action">
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
    ),
  },
  {
    name: "Colleen Hurst",
    id: 56,
    job: "Javascript Developer",
    companyName: "Google Co.",
    invoiceNumber: "#NB39",
    credit: <i className="icofont icofont-arrow-up me-1 text-success">2.8%</i>,
    date: "2009/09/15",
    priority: <span className="badge badge-light-warning">Medium</span>,
    budget: "$205.500,00",
    action: (
      <ul className="action">
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
    ),
  },

  {
    name: "Dai Rios",
    id: 57,
    job: "Personnel Lead",
    companyName: "Edinburgh",
    invoiceNumber: "#YT35",
    credit: <i className="icofont icofont-arrow-down me-1 text-danger">2.8%</i>,
    date: "2012/09/26",
    priority: <span className="badge badge-light-success">Low</span>,
    budget: "$217.500,00",
    action: (
      <ul className="action">
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
    ),
  },
];

export const DeleteDataColumn = [
  {
    name: "Employee Name",
    selector: (row: DeleteRowData) => row["name"],
    sortable: true,
    center: false,
  },
  {
    name: "Job Designation",
    selector: (row: DeleteRowData) => row["job"],
    sortable: true,
    center: false,
  },
  {
    name: "Company Name",
    selector: (row: DeleteRowData) => row["companyName"],
    sortable: true,
    center: false,
  },
  {
    name: "Credit/Debit",
    cell: (row: DeleteRowData) => row["credit"],
    sortable: true,
    center: false,
  },
  {
    name: "Date",
    selector: (row: DeleteRowData) => row["date"],
    sortable: true,
    center: false,
  },
  {
    name: "Priority",
    cell: (row: DeleteRowData) => row["priority"],
    sortable: true,
    center: false,
  },
  {
    name: "Budget",
    selector: (row: DeleteRowData) => row["budget"],
    sortable: true,
    center: false,
  },
  {
    name: "action",
    cell: (row: DeleteRowData) => row["action"],
    sortable: true,
    center: false,
  },
];
