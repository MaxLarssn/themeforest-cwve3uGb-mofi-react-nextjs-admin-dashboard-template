var dom = document.getElementById("echart-pierich");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: 'access source',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: 'direct interview'},
                {value: 310, name: 'email marketing'},
                {value: 274, name: 'affiliate advertising'},
                {value: 235, name: 'video ad'},
                {value: 400, name: 'search engine'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(0,0,0 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(0,0,0 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            selectedMode: "single",
            emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
