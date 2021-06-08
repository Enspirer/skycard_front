var dom = document.getElementById("chart");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
    color : "#1189eb",
    xAxis: {
        type: 'category',
        data: ['Sales', 'HR', 'Management', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
        axisLabel : {
            rotate : '50'
        }
    },
    yAxis: {
        type: 'value',
        axisLine : {
            show : 'true'
        }
    },
    series: [{
        data: [45, 80, 65, 85, 45, 20, 10],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}