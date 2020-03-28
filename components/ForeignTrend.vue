<template>
  <div id="box1"></div>
</template>

<script>
import echarts from 'echarts'
import {option1} from '../options/Compare'
export default {
  name: 'ForeignTrend',
  data() {
    return {
      // Data:{},
      // LineX:[]
    }
  },
  mounted() {
    this.Data = JSON.parse(sessionStorage.getItem('totalData'))
    this.LineX = this.Data.foreignTrend[15].trend.updateDate
    this.Line()
  },
  methods: {
    Line() {
      let myChart1 = echarts.init(document.getElementById('box1'))
      let date = this.LineX
      let data = this.Data
      let nameData = []
      let DataObj = []
      option1.xAxis.data = date
      for (let i = 8; i < 15; i++) {
        let foreignData = data.foreignTrend[i].trend.list[0].data
        let updateDate = data.foreignTrend[i].trend.updateDate
        let n = 0
        while (updateDate[0] != '2.21') {
          let str = (updateDate[0].split('.')[1] - 1).toString()
          updateDate.unshift('2.' + str)
          foreignData.unshift(0)
        }
        for (let i = 0; i < date.length; i++) {
          if (updateDate[i] != date[i]) {
            foreignData.splice(i, 0, foreignData[i - 1])
            updateDate.splice(i, 0, 0)
          }
        }
        let seriesObj = {
          name: data.foreignTrend[i].name,
          type: 'line',
          data: foreignData
        }

        nameData.push(seriesObj.name)
        DataObj.push(seriesObj)
      }
      option1.legend.data = nameData
      option1.series = DataObj
      myChart1.setOption(option1)
    }
  }
}
</script>

<style scoped>
#box1 {
  width: 100%;
  height: 100%;
}
</style>
