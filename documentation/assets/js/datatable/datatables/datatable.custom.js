$(document).ready(function () {
  $("product-list").DataTable();
  // Basic table example
  $("#basic-1").DataTable();
  $("#basic-2").DataTable({
    paging: true,
    ordering: false,
    info: false,
  });
  $("#basic-3").DataTable({
    order: [[3, "desc"]],
  });
  $("#basic-4").DataTable({
    columnDefs: [
      {
        targets: [0],
        orderData: [0, 1],
      },
      {
        targets: [1],
        orderData: [1, 0],
      },
      {
        targets: [4],
        orderData: [4, 0],
      },
    ],
  });
  $("table.show-case").DataTable();
  $("#basic-5").DataTable({
    columnDefs: [
      {
        targets: [2],
        visible: false,
        searchable: false,
      },
      {
        targets: [3],
        visible: false,
      },
    ],
  });
  $("#basic-6").DataTable();
  $("#basic-7").DataTable({
    dom: '<"wrapper"ltipf>',
  });
  $("#basic-8").DataTable();
  $("#basic-9").DataTable({
    stateSave: true,
  });
  $("#basic-10").DataTable({
    pagingType: "full_numbers",
  });
  $("#basic-11").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
  });
  $("#basic-12").DataTable({
    scrollY: "40vh",
    scrollCollapse: true,
    paging: false,
  });
  $("#basic-13").DataTable({
    scrollY: 200,
    scrollX: true,
  });
  $("#basic-14").DataTable({
    language: {
      decimal: ",",
      thousands: ".",
    },
  });
  // Advance data table
  var table = $("#advance-1").DataTable();
  $("#advance-1 tbody").on("click", "tr", function () {
    var data = table.row(this).data();
    alert("You clicked on " + data[0] + "'s row");
  });
  var eventFired = function (type) {
    var n = $("#demo_info")[0];
    n.innerHTML +=
      '<div class="me-2"><b>' +
      type +
      " event - </b>" +
      new Date().getTime() +
      "</div>";
    n.scrollTop = n.scrollHeight;
  };
  $("#advance-2")
    .on("order.dt", function () {
      eventFired("Order");
    })
    .on("search.dt", function () {
      eventFired("Search");
    })
    .on("page.dt", function () {
      eventFired("Page");
    })
    .DataTable();
  $("#advance-3").DataTable({
    columnDefs: [
      {
        render: function (data, type, row) {
          return data + " (" + row[3] + ")";
        },
        targets: 0,
      },
      { visible: false, targets: [3] },
    ],
  });
  $("#advance-4").DataTable({
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
  });
  $("#advance-5").DataTable({
    dom: '<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',
  });
  $("#advance-6").DataTable({
    columnDefs: [
      {
        visible: false,
        targets: -1,
      },
    ],
  });
  $("#advance-7").DataTable({
    columns: [
      { data: "name" },
      { data: "position" },
      { data: "office" },
      { data: "age" },
      { data: "start_date" },
      { data: "salary" },
    ],
  });
  $("div.toolbar").html("<b>Hello This is custom toolbar</b>");
});
