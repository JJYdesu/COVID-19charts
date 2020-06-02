<template>
  <div class="charts">
    <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div> 
  </div>
</template>

<script>
import echarts from 'echarts'
import { option2, option3, option1 } from '../options/Compare'
import {sort1} from '../api/sort'
export default {
  name: 'ForeignData',
  mounted() {
    this.Data = JSON.parse(sessionStorage.getItem('totalData'))
    this.BarX = this.Data.foreignTrend
    this.total()
    this.mortalit()
    this.cured()
  },
  methods: {
    total() {
      let option = option2
      let myChart = echarts.init(document.getElementById('box1'))
      let confirmData,
        curedData,
        deadData = []
      option.title.text = '各国疫情统计'
      option.xAxis.data = this.BarX.map(item => {
        return item.name
      })
      let seriesObj = []
      const seriesName = ['确诊', '治愈', '死亡']
      for (let n = 0; n < 3; n++) {
        seriesObj[n] = {
          name: seriesName[n],
          type: 'bar',
          barGap: 0,
          data: this.BarX.map(item => {
            return item.trend.list[n].data[item.trend.list[n].data.length - 1]
          })
        }
      }
      option.legend.data = seriesName
      option.series = seriesObj
      myChart.setOption(option)
    },

    Calculate() {
      let Data = this.BarX
      let China = this.Data.ChinaSummary
      let xAxis = Data.map(item => {
        let confirmList = item.trend.list[0].data
        let curedList = item.trend.list[1].data
        let deadList = item.trend.list[2].data

        let confirm = confirmList[confirmList.length - 1]
        let cured = curedList[curedList.length - 1]
        let dead = deadList[deadList.length - 1]
        
        let deadRate = ((dead / confirm) * 100).toFixed(1)
        let curedRate = ((cured / confirm) * 100).toFixed(1)

        return {name:item.name,curedRate:curedRate,deadRate:deadRate}
      })
      let ChinaCuredRate = ((China.cured/China.confirmed)*100).toFixed(1)
      let ChinaDeadRate = ((China.died/China.confirmed)*100).toFixed(1)
      xAxis.push({name:'中国',curedRate:ChinaCuredRate,deadRate:ChinaDeadRate})
      return xAxis
    },

    mortalit() {
      let myChart = echarts.init(document.getElementById('box2'))
      let data = this.Calculate()
      let xAxis = []
      let seriesObj = {
        name: '死亡率',
        type: 'bar',
        barGap: 0,
        data: [],
        color: '#000',
        label: {
          show: true,
          rotate: 0,
          align: 'center',
          verticalAlign: 'middle',
          position: 'top',
          distance: 10,
          formatter: function(params) {
            return params.data + '%'
          },
          fontSize: 12,
          rich: {
            name: {
              textBorderColor: '#fff'
            }
          }
        }
      }
      
      data.sort((a,b)=>{return b.deadRate-a.deadRate})

      let option = option2
      data.forEach(element => {
        xAxis.push(element.name)
        seriesObj.data.push(element.deadRate)
      });
      option.title.text = '各国死亡率对比'
      option.series = seriesObj
      option.xAxis.data = xAxis

      myChart.setOption(option)
    },

    cured() {
      let myChart = echarts.init(document.getElementById('box3'))
      let data = this.Calculate()
      let xAxis = []
      let seriesObj = {
        name: '治愈率',
        type: 'bar',
        barGap: 0,
        data: [],
        label: {
          show: true,
          rotate: 0,
          align: 'center',
          verticalAlign: 'middle',
          position: 'top',
          distance: 10,
          formatter: function(params) {
            return params.data + '%'
          },
          fontSize: 12,
          rich: {
            name: {
              textBorderColor: '#fff'
            }
          }
        }
      }
      let option = option2
      data.sort((a,b)=>{return b.curedRate-a.curedRate})
      data.forEach(element=>{
        xAxis.push(element.name)
        seriesObj.data.push(element.curedRate)
      })
      option.title.text = '各国治愈率对比'
      option.xAxis.data = xAxis
      option.series = seriesObj
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
#box1 {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
#box2 {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
#box3 {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}

</style>
