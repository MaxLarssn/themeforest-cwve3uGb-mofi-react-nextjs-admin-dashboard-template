export const CalenderInitialData = {
  calendarEvents: [
    {
      title: "Atlanta Monster",
      start: new Date("2022-04-04 00:00"),
      id: "1001",
    },
    {
      title: "My Favorite Murder",
      start: new Date("2022-04-05 00:00"),
      id: "1002",
    },
  ],
  events: [
    {
      className: "bg-primary",
      title: "Meeting",
      id: "1",
      icon: "fa fa-birthday-cake",
    },
    { className: "bg-secondary", title: "Party", id: "2", icon: "fa fa-user" },
    { className: "bg-dark", title: "Long Event", id: "3", icon: "fa fa-plane" },
    {
      className: "bg-danger",
      title: "Lunch",
      id: "4",
      icon: "fa fa-file-text",
    },
    {
      className: "bg-success",
      title: "Happy Hour",
      id: "5",
      icon: "fa fa-briefcase",
    },
  ],
};