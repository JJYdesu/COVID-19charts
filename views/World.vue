<template>
  <div class="map">
    <div id="world"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/world";
import axios from "axios";
import NameMap from "../options/NameMap.js"
let option = {
  title: {
    text: "世界疫情地图",
    x: "center",
    textStyle: {
      color: "#9c0505"
    }
  },
  visualMap: {
    type: "piecewise",
    show: true,
    left:'20%',
    pieces: [
      { min:50000},
      { min: 10000, max:49999}, // 不指定 max，表示 max 为无限大（Infinity）。
      { min: 1000, max: 9999 },
      { min: 100, max: 999 },
      { min: 10, max: 99 },
      { min: 1, max: 9 }, // 不指定 min，表示 min 为无限大（-Infinity）。
      { value: 0 }
    ],
    inRange: {
      color: ["#fff", "#ffaa85", "#660208"]
    }
  },
  tooltip: {
    trigger: "item",
    formatter: "地区：{b}</br>确诊：{c}"
  },
  series: {
    type: "map",
    map: "world",
    nameMap:NameMap,
  },
  zoom: 2.0
};
export default {
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let myChart = echarts.init(document.getElementById("world"));
      let data = JSON.parse(sessionStorage.getItem("totalData"));
      // data = data.World;
      data = data.EachCountryList
      console.log(data)
      let totalData = data.map(item=>{
        return {name:item.area,value:item.confirmed}
      })
      option.series.data = totalData
      
      myChart.setOption(option);
      window.onresize = myChart.resize;
    }
  }
};
</script>

<style scope>
#world {
  width: 100%;
  height: 600px;
}
</style>