<template>
  <div class="charts">
    <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { option3 } from '../options/Compare'
export default {
  name: 'DataCompare',
  mounted() {
    this.Data = JSON.parse(sessionStorage.getItem('totalData'))
    this.LineX = this.Data.foreignTrend[13].trend.updateDate
    this.ConfirmCompare()
    this.CuredCompare()
    this.DeadCompare()
  },
  methods: {
    Calculate() {
      let ChinaData = this.Data.ChinaTrend
      let foreignData = this.Data.foreignTrend
      let xAxis = []
      let legendName = []
      let ChinaDataConfirm = []
      let ChinaDataCured = []
      let ChinaDataDead = []
      let ChinaConfirmIncrease = []
      for (let i = 1; i < this.LineX.length + 1; i++) {
        xAxis.push('Day' + i)
        ChinaDataConfirm.push(ChinaData.list[0].data[i - 1])
        ChinaDataCured.push(ChinaData.list[2].data[i - 1])
        ChinaDataDead.push(ChinaData.list[3].data[i - 1])
      }
      let totalData = foreignData.map((item, index) => {
        let confirmData = item.trend.list[0].data.map(item => {
          return item
        })
        let curedData = item.trend.list[1].data.map(item => {
          return item
        })
        let deadData = item.trend.list[2].data.map(item => {
          return item
        })
        legendName.push(item.name)
        return {
          name: item.name,
          confirmData: confirmData,
          curedData: curedData,
          deadData: deadData
        }
      })
      totalData.push({
        name: '中国',
        confirmData: ChinaDataConfirm,
        curedData: ChinaDataCured,
        deadData: ChinaDataDead
      })
      legendName.push('中国')
      let all = {
        xAxis: xAxis,
        totalData: totalData,
        legendName: legendName
      }
      return all
    },

    ConfirmCompare() {
      let option = option3
      let myChart1 = echarts.init(document.getElementById('box1'))
      let confirmData = this.Calculate()
      let seriesObj = confirmData.totalData.map((item, index) => {
        if (index == 4 || index > 8) {
          return { name: item.name, data: item.confirmData, type: 'line' }
        }
      })
      option.title.text = '中外确诊数同日对比'
      option.legend.data = confirmData.legendName
      option.series = seriesObj
      option.xAxis.data = confirmData.xAxis
      myChart1.setOption(option)
    },

    CuredCompare() {
      let option = option3
      let myChart2 = echarts.init(document.getElementById('box2'))
      let curedData = this.Calculate()

      let seriesObj = curedData.totalData.map((item, index) => {
        if (index == 4 || index > 8) {
          return { name: item.name, data: item.curedData, type: 'line' }
        }
      })
      option.title.text = '中外治愈数同日对比'
      option.legend.data = curedData.legendName
      option.series = seriesObj
      option.xAxis.data = curedData.xAxis
      myChart2.setOption(option)
    },
    DeadCompare() {
      let option = option3
      let myChart3 = echarts.init(document.getElementById('box3'))
      let deadData = this.Calculate()
      let seriesObj = deadData.totalData.map((item, index) => {
        if (index == 4 || index > 8) {
          return { name: item.name, data: item.deadData, type: 'line' }
        }
      })
      option.title.text = '中外死亡数同日对比'
      option.legend.data = deadData.legendName
      option.series = seriesObj
      option.xAxis.data = deadData.xAxis
      myChart3.setOption(option)
    }
  }
}
</script>

<style scsoped>
.charts {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
#box1 {
  width: 100%;
  height: 100%;
}
#box2 {
  width: 100%;
  height: 100%;
}
#box3 {
  width: 100%;
  height: 100%;
}
</style>
