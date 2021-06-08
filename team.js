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



const cards = document.querySelectorAll('.card .card-header');
const span = document.querySelectorAll('.card-span')

let no = 0;

cards.forEach(card => {
    if (cards[no].getAttribute('aria-expanded')  == 'true') {
        span[no].setAttribute('class', 'fa fa-chevron-up');
        no++;
    }
    else {
        span[no].setAttribute('class', 'fa fa-chevron-down');
        no++;
    }
});


function myFunc0() {
    if (cards[0].getAttribute('aria-expanded')  == 'true') {
        span[0].setAttribute('class', 'fa fa-chevron-up');
    }
    else {
        span[0].setAttribute('class', 'fa fa-chevron-down');
    }
}

function myFunc1() {
    if (cards[1].getAttribute('aria-expanded')  == 'true') {
        span[1].setAttribute('class', 'fa fa-chevron-up');
    }
    else {
        span[1].setAttribute('class', 'fa fa-chevron-down');
    }
}

function myFunc2() {
    if (cards[2].getAttribute('aria-expanded')  == 'true') {
        span[2].setAttribute('class', 'fa fa-chevron-up');
    }
    else {
        span[2].setAttribute('class', 'fa fa-chevron-down');
    }
}

function myFunc3() {
    if (cards[3].getAttribute('aria-expanded')  == 'true') {
        span[3].setAttribute('class', 'fa fa-chevron-up');
    }
    else {
        span[3].setAttribute('class', 'fa fa-chevron-down');
    }
}

function myFunc4() {
    if (cards[4].getAttribute('aria-expanded')  == 'true') {
        span[4].setAttribute('class', 'fa fa-chevron-up');
    }
    else {
        span[4].setAttribute('class', 'fa fa-chevron-down');
    }
}