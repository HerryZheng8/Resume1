// 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '静态页面', max: 10000 },
                { name: '编程基础', max: 10000 },
                { name: 'Vue', max: 10000 },
                { name: '项目能力', max: 10000 },
                { name: '沟通能力', max: 10000 },
                { name: '学习能力', max: 10000 }
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [9000, 7200, 7000, 6000, 8000, 9500],
                        name: 'Actual Spending'
                    }
                ]
            }
        ]
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);