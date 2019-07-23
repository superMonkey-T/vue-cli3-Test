<style lang="less">
  @import "Test.less";
</style>
<template>
  <Card id="cards">
    <div class="cards">
      <div class="cards-block" id="myChart"></div>
      <div class="cards-block" id="myChart1"></div>
      <div class="cards-block" id="myChart2"></div>
      <div class="cards-block" id="myChart3"></div>
      <div class="cards-block" id="myChart4"></div>
      <div class="cards-block" id="myChart5"></div>
    </div>

  </Card>
</template>

<script lang="ts">
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.myOptions();
      this.myOptions1();
      this.myOptions2();
      this.myOptions3();
      this.myOptions4();
      this.myOptions5();
    },
    methods: {
      myOptions(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      myOptions1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'))
        // 绘制图表
        myChart.setOption({
          title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
      myOptions2(){
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '未来一周气温变化',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['最高气温', '最低气温']
          },
          // toolbox: {
          //   show: true,
          //   feature: {
          //     dataZoom: {
          //       yAxisIndex: 'none'
          //     },
          //     dataView: {readOnly: false},
          //     magicType: {type: ['line', 'bar']},
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series: [
            {
              name: '最高气温',
              type: 'line',
              data: [11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name: '最低气温',
              type: 'line',
              data: [1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        })
      },
      myOptions3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '标题标题'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          // toolbox: {
          //   feature: {
          //     dataView: {show: true, readOnly: false},
          //     magicType: {show: true, type: ['line', 'bar']},
          //     restore: {show: true},
          //     saveAsImage: {show: true}
          //   }
          // },
          legend: {
            data:['蒸发量','降水量','平均温度']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name:'平均温度',
              type:'line',
              yAxisIndex: 1,
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        })
      },
      myOptions4(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart4'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '基础雷达图'
          },
          tooltip: {},
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '销售（sales）', max: 6500},
              { name: '管理（Administration）', max: 16000},
              { name: '信息技术（Information Techology）', max: 30000},
              { name: '客服（Customer Support）', max: 38000},
              { name: '研发（Development）', max: 52000},
              { name: '市场（Marketing）', max: 25000}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
              {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
              },
              {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
              }
            ]
          }]
        })
      },
      myOptions5(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart5'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '漏斗图',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          // toolbox: {
          //   feature: {
          //     dataView: {readOnly: false},
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          legend: {
            data: ['展现','点击','访问','咨询','订单']
          },
          series: [
            {
              name: '预期',
              type: 'funnel',
              left: '10%',
              width: '80%',
              label: {
                normal: {
                  formatter: '{b}预期'
                },
                emphasis: {
                  position:'inside',
                  formatter: '{b}预期: {c}%'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  opacity: 0.7
                }
              },
              data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
              ]
            },
            {
              name: '实际',
              type: 'funnel',
              left: '10%',
              width: '80%',
              maxSize: '80%',
              label: {
                normal: {
                  position: 'inside',
                  formatter: '{c}%',
                  textStyle: {
                    color: '#fff'
                  }
                },
                emphasis: {
                  position:'inside',
                  formatter: '{b}实际: {c}%'
                }
              },
              itemStyle: {
                normal: {
                  opacity: 0.5,
                  borderColor: '#fff',
                  borderWidth: 2
                }
              },
              data: [
                {value: 30, name: '访问'},
                {value: 10, name: '咨询'},
                {value: 5, name: '订单'},
                {value: 50, name: '点击'},
                {value: 80, name: '展现'}
              ]
            }
          ]
        })
      }
    }
  }
</script>

