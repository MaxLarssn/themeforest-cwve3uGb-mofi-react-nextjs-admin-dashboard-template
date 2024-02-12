import { FileText, Mail, Settings, Users } from "react-feather";

export const NotificationData = [
  {
    src: "wallet.png",
    alt: "Wallet",
    title: "New daily offer added",
    text: "New user-only offer added",
    color: "primary",
  },
  {
    src: "shield-dne.png",
    alt: "Shield-dne",
    title: "Product Evaluation",
    text: "Changed to a new workflow",
    color: "info",
  },
  {
    src: "graph.png",
    alt: "Graph",
    title: "Return of a Product",
    text: "Changed to a new workflow",
    color: "warning",
  },
  {
    src: "ticket-star.png",
    alt: "Ticket-star",
    title: "Recently Paid",
    text: "Mastercard payment of $343",
    color: "tertiary",
  },
];

export const BookMarkData = [
  {
    icon: "form",
    path:"/forms/form_controls/validation_form",
    title: "Form",
    color: "primary",
  },
  {
    icon: "user",
    path:"/users/user_profile",
    title: "Profile",
    color: "secondary",
  },
  {
    icon: "table",
    path:"/table/reactstrap_table/basic_table",
    title: "Tables",
    color: "warning",
  },
];

const iconOne = `Hello Miss...&#128522;`;
const iconTwo = `Wishing You a Happy Birthday Dear.. 🥳&#127882;`;

export const MessageData = [
  {
    image: "1.png",
    title: "Hackett Yessenia",
    color: "primary",
    text: <div dangerouslySetInnerHTML={{ __html: iconOne }}></div>,
    time: "10 min.",
  },
  {
    image: "2.png",
    title: "schneider Adan",
    color: "secondary",
    text: <p dangerouslySetInnerHTML={{ __html: iconTwo }}></p>,
    time: "25 min.",
  },
  {
    image: "3.png",
    title: "Mahdi Gholizadeh",
    color: "success",
    text: "Hello Dear!! This Theme Is Very beautiful",
    time: "1 hours.",
  },
];

export const cartDetailsList = ["Furniture Chair for Home", "Furniture Table for Office"];

export const UserProfileData = [
  {
    icon: <Users />,
    title: "Account",
    link:"chat/private_chat",
  },
  {
    icon: <Mail />,
    title: "Inbox",
    link:"app/letter_box",
  },
  {
    icon: <FileText />,
    title: "Taskboard",
    link:"app/task",
  },
  {
    icon: <Settings />,
    title: "Settings",
    link:"users/edit_profile",
  },
];

export const LanguagesData = [
  {
    data: "en",
    logo: "flag-icon flag-icon-us",
    language: "English",
  },
  {
    data: "es",
    logo: "flag-icon flag-icon-is",
    language: "Spanish",
  },
  {
    data: "pt",
    logo: "flag-icon flag-icon-uy",
    language: "Portuegse",
  },
  {
    data: "fr",
    logo: "flag-icon flag-icon-nz",
    language: "French",
  },
  {
    data: "ae",
    logo: "flag-icon flag-icon-ae",
    language: "لعربية",
  },
  {
    data: "du",
    logo: "flag-icon flag-icon-de",
    language: "Deutsch",
  },
  {
    data: "cn",
    logo: "flag-icon flag-icon-cn",
    language: "简体中文",
  },
];

export const NavLinkList = [
  {
      path: 'https://support.pixelstrap.com/',
      image: 'support.png',
      name: 'Support'
  },
  {
      path: 'https://docs.pixelstrap.net/next/mofi/document/',
      image: 'setting.png',
      name: 'Document'
  },
  {
      path: 'https://landing.pixelstrap.net/next/mofi/template/landing-page.html',
      image: 'features.png',
      name: 'Check Features'
  },
  {
      path: 'https://themeforest.net/user/pixelstrap/portfolio',
      image: 'document.png',
      name: 'Buy Now'
  }
]
