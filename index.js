/**
 * @ author Aaron Castle
 * @ github https://github.com/aaroncastle
 * @ date 2021/8/29 01:16
 */


const chartDom = document.getElementById('main');
const myChart = echarts.init(chartDom, 'dark');
let option;

const datas = [
    [
        { name: '殃虎下山', value: 0 },
        { name: 'S義兄S', value: 44725 },
        { name: '玉面小飞龙', value: 2862 },
        { name: '哥你也敢打', value: 5132 },
        { name: '从小爱护牛子', value: 10045 },
        { name: '夜孤单', value: 0 },
        { name: '少年的夢', value: 6255 },
        { name: '戰鬥BoBoMan', value: 13901 },
        { name: '风过无痕', value: 9090 },
        { name: 'Gabriel', value: 3890 },
        { name: '平平淡淡', value: 3411 },
        { name: 'YMJT高宫望', value: 946 },
        { name: '为了部落', value: 5482 },
        { name: '油价又涨了', value: 1314 },
        { name: ' Rio', value: 4114 },
        { name: '江苏十三妹', value: 1792 },
        { name: '天蛇神君', value: 2055 },
        { name: 's小洛s', value: 4560 },
        { name: '解放军', value: 0 },
        { name: '你们的益达', value: 11513 },
        { name: '老 农', value: 6470 },
        { name: '无言者', value: 0 },
        { name: '小 小', value: 2041 },
        { name: 'FishBaby鱼娃', value: 701 },
        { name: '圣女贞德', value: 1456 },
        { name: '战斗军师', value: 1990 },
        { name: '逆战封魔', value: 3997 },
        { name: '战斗神鬼', value: 1846 },
        { name: 'X9527', value: 695 },
        { name: '姜开源', value: 1994 }
    ],

];

option = {
    title: {
        text: '5035夺宝人员数据\n(2021/08/28)',
        left: 'right',
        top: 100,
        textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 20
        }
    },
    series: datas.map(function (data, idx) {
        const top = idx * 33.3;
        return {
            type: 'pie',
            radius: [20, 80],
            top: top + '%',
            height: '100%',
            left: 'center',
            width: 400,
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            label: {
                alignTo: 'edge',
                formatter: '{name|{b}}\n{time|{c} 积分}',
                minMargin: 12,
                edgeDistance: 10,
                lineHeight: 15,
                fontSize: 12,
                rich: {
                    time: {
                        fontSize: 14,
                        color: '#999'
                    }
                }
            },
            labelLine: {
                length: 12,
                length2: 0,
                maxSurfaceAngle: 80
            },
            labelLayout: function (params) {
                const isLeft = params.labelRect.x < myChart.getWidth() / 2;
                const points = params.labelLinePoints;
                points[2][0] = isLeft
                    ? params.labelRect.x
                    : params.labelRect.x + params.labelRect.width;

                return {
                    labelLinePoints: points
                };
            },
            data: data
        }
    })
};

option && myChart.setOption(option);
