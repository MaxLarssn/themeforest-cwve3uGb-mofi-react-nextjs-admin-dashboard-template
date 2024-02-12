export const BasicTreeData = [
  {
    text: "Use the dynamic tree view with checkboxes.",
  },
];

export const TreeViewList = {
  name: "",
  children: [
    {
      name: "root",
      children: [
        {
          name: "Applications",
          children: [
            {
              name: "Ecommerce",
              children: [{ name: "Product" }, { name: "Cart" }, { name: "Invoice" }],
            },
            {
              name: "Users",
              children: [{ name: "User-profile" }, { name: "User-edit" }, { name: "User-cards" }],
            },
            {
              name: "Chat",
              children: [{ name: "Chat-app" }, { name: "Video-chat" }],
            },
          ],
        },
        {
          name: "Components",
          children: [
            {
              name: "UI-Kits",
              children: [{ name: "Typography" }, { name: "Avatars" }, { name: "Grid" }],
            },
            {
              name: "Bonus-UI",
              children: [{ name: "Toasts" }, { name: "Rating" }, { name: "Pagination" }],
            },
            {
              name: "Charts",
              children: [{ name: "Apex-chart" }, { name: "Google-chart" }, { name: "Chartjs-chart" }],
            },
          ],
        },
        {
          name: "Miscellaneous",
          children: [
            {
              name: "Gallery",
              children: [{ name: "Gallery-grid" }, { name: "Gallery-grid-desc" }, { name: "Masonary-gallery" }],
            },
            {
              name: "Blog",
              children: [{ name: "Blog-details" }, { name: "Blog-single" }, { name: "Add-post" }],
            },
            {
              name: "Editors",
              children: [{ name: "CK-editors" }, { name: "MDE-editors" }, { name: "ACE-editors" }],
            },
          ],
        },
      ],
    },
  ],
};

export const DisableTreeData = [
  {
    text: "Use the dynamic tree view with checkboxes.",
  },
];
