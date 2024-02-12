import { MenuItem } from "@/Types/LayoutTypes";

export const MenuList: MenuItem[] | undefined = [
  {
    title: "General",
    lanClass: "lan-8",
    menucontent: "General",
    Items: [
      {
        title: "Sample Page",
        id: 3,
        icon: "sample-page",
        type: "sub",
        active: false,
        children: [
          { path: "/sample_page", type: "link", title: "Sample Page" },
        ],
      },
      { path: "/support_ticket", icon: "support-tickets", title: "Support Ticket", type: "link" },
    ]
  },
];
