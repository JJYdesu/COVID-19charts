<template>
	<div id="box1"></div>
</template>

<script>
import echarts from 'echarts'
import { option1 } from '../options/Compare'
export default {
	name: 'ForeignTrend',
	data() {
		return {
			// Data:{},
			// LineX:[]
		}
	},
	created() {},
	mounted() {
		this.Data = JSON.parse(sessionStorage.getItem('totalData'))
		this.LineX = this.Data.foreignTrend.updateDate
		console.log(this.Data.foreignTrend)
		this.Line()
	},
	methods: {
		Line() {
			let myChart1 = echarts.init(document.getElementById('box1'))
			let date = this.LineX
      let fDate = []
			let data = this.Data.foreignTrend.list[0].data
      let fData = []
      let cured = this.Data.foreignTrend.list[1].data
      let fCured = []
      let dead = this.Data.foreignTrend.list[2].data
      let fDead = []
			for (let i = 0; i < date.length - 1; i = i + 5) {
				if (i > date.length) break
				else {
          fDate.push(date[i])
          fData.push(data[i])
          fDead.push(dead[i])
          fCured.push(cured[i])
				}
			}
      fDate.push(date[date.length - 1])
      fData.push(data[date.length - 1])
      fDead.push(dead[dead.length - 1])
      fCured.push(cured[cured.length - 1])
			option1.xAxis.data = fDate
			let confirmObj = {
				name: '累计确诊',
				data: fData,
				type: 'line',
      }
      let deadObj = {
        name: '累计死亡',
				data: fDead,
				type: 'line',
      }
      let curedObj = {
        name: '累计治愈',
				data: fCured,
				type: 'line',
      }
      option1.series[0] = confirmObj
      option1.series[1] = deadObj
      option1.series[2] = curedObj
      option1.legend.data = ['累计确诊','累计死亡','累计治愈']
      option1.title.text='全球疫情趋势'
      myChart1.setOption(option1)
      window.onresize = myChart1.resize;
		},
		// Line() {
		//   let myChart1 = echarts.init(document.getElementById('box1'))
		//   let date = this.LineX
		//   let data = this.Data
		//   let nameData = []
		//   let DataObj = []
		//   option1.xAxis.data = date
		//   for (let i = 8; i < 15; i++) {
		//     let foreignData = data.foreignTrend[i].trend.list[0].data
		//     let updateDate = data.foreignTrend[i].trend.updateDate
		//     let n = 0
		//     while (updateDate[0] != '2.21') {
		//       let str = (updateDate[0].split('.')[1] - 1).toString()
		//       updateDate.unshift('2.' + str)
		//       foreignData.unshift(0)
		//     }
		//     for (let i = 0; i < date.length; i++) {
		//       if (updateDate[i] != date[i]) {
		//         foreignData.splice(i, 0, foreignData[i - 1])
		//         updateDate.splice(i, 0, 0)
		//       }
		//     }
		//     let seriesObj = {
		//       name: data.foreignTrend[i].name,
		//       type: 'line',
		//       data: foreignData
		//     }

		//     nameData.push(seriesObj.name)
		//     DataObj.push(seriesObj)
		//   }
		//   option1.legend.data = nameData
		//   option1.series = DataObj
		//   myChart1.setOption(option1)
		// }
	},
}
</script>

<style scoped>
#box1 {
	width: 100%;
	height: 100%;
}
</style>
