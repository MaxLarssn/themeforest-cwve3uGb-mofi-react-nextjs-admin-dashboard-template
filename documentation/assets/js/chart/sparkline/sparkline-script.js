(function($) {
    "use strict";
    var sparkline_chart = {
      init: function() {
        setTimeout(function(){
            $("#simple-line-chart-sparkline").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
                type: 'line',
                width: '100%',
                height: '150',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#7366ff',
                fillColor: 'transparent',
                highlightLineColor: '#7366ff',
                highlightSpotColor: '#7366ff',
                targetColor: '#7366ff',
                performanceColor: '#7366ff',
                boxFillColor: '#7366ff',
                medianColor: '#7366ff',
                minSpotColor: '#7366ff'
            });
      })
    }
};
  sparkline_chart.init()
})(jQuery);
