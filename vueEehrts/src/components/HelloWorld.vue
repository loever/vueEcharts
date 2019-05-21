<template>
  <div class="hello">
    <div id="myChart" :style="{width: '1150px', height: '600px'}"></div>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts')
  export default {
    name: 'hello',
    data() {
      return {
        data: []
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: this.data, // 这里就放后台传过来的数据
          dataZoom: [{ // 这是滚动条插件  可以是Y轴 也可以是X轴
              type: 'inside',
              start: 0,
              end: 20
            },

            {
              start: 0,
              end: 20, //位置     下面这个是  自定义图标  格式可以是base64  url  inco 格式
              handleIcon: 'd="M625.353 69.801L844.722 343.814c0 0 11.085 102.239-87.737 59.17-57.017-25.586-77.367-79.29799999-77.367-79.298l-2.043 417.39c0 0-58.947 87.901-110.234 0l-0.934-264.25399999c0 0-63.75 86.74199999-138.747-6.064 0 0-56.248 94.518-135.27-4.57700001 0 0-56.03 109.298-112.278-9.485l0-331.75c0 0 3.25599999-25.862 48.862-55.145L625.353 69.801 625.353 69.801zM625.353 69.801"',
              handleSize: '80%', // 图标大小 
              handleStyle: { // 图标样式
                color: '#fff',
                shadowBlur: 3,
                shadowOffsetX: 4,
                shadowOffsetY: 2,
                transform: "rolate(90deg)" // 图标旋转
              }
            }

          ],
        });
      }
    },
    created() {
      //  在created 里面 直接调用   this.drawLine();    回报这个错误   因为这里时候echarts还没有加载出来   created hook: "TypeError: Cannot read property 'getAttribute' of null"
     
      /*   axios.post('*********', ).then(res => { */
          var arr = []  // 在这里把数据过滤成Ehcarts 需要的格式 
          for (var i = 0; i < 10; i++) {
            var json = {
              name: '视频广告' + i,
              type: 'bar',
              stack: '广告',
              data: [150 + i, 2 - i, 20 * i, 154 - 100, 19 - 8, 30, 40]
            }
            arr.push(json)
          }
          this.data = arr
          // 主要 echarts不能v-if 也会报错
         // this.drawLine();      axios 里面必须在调用一次 不然回报错   created hook: "TypeError: Cannot read property 'getAttribute' of null" 
      /*    }) */
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>