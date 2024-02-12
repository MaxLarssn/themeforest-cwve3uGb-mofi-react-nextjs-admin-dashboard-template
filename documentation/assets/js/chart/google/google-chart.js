google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.load('current', {'packages':['line']});
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawBasic);
function drawBasic() {
    if ($("#bar-chart2").length > 0) {
        var a = google.visualization.arrayToDataTable([
                ["Element", "Density", {
                    role: "style"
                }],
                ["Copper", 10, "#a927f9"],
                ["Silver", 12, "#f8d62b"],
                ["Gold", 14, "#f73164"],
                ["Platinum", 16, "color: #7366ff"]
            ]),
            d = new google.visualization.DataView(a);
        d.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }, 2]);
        var b = {
                title: "Density of Precious Metals, in g/cm^3",
                width:'100%',
                height: 150,
                bar: {
                    groupWidth: "95%"
                },
                legend: {
                    position: "none"
                }
            },
            c = new google.visualization.BarChart(document.getElementById("bar-chart2"));
        c.draw(d, b)
    }
}