var radarData = {
    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
    datasets: [{
        label: "My First dataset",
        fillColor: "rgba(145, 46, 252, 0.4)",
        strokeColor: "#7366ff",
        pointColor: "#7366ff",
        pointStrokeColor: "#7366ff",
        pointHighlightFill: "#7366ff" ,
        pointHighlightStroke: "rgba(145, 46, 252, 0.4)",
        data: [12, 3, 5, 18, 7]
    }]
};
var radarOptions = {
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.2)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 3,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var radarCtx = document.getElementById("myRadarGraph").getContext("2d");
var myRadarChart = new Chart(radarCtx).Radar(radarData, radarOptions);
