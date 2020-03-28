<template>
  <div class="map">
    <div id="chart" style="width:100%;height:500px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china";
let option = {
  title: {
    text: "中国疫情地图",
    x: "center",
    textStyle: {
      color: "#9c0505"
    }
  },
  series: {
    //数据
    type: "map", //图表类型
    map: "china",
    // data: [
    //   { name: "广东", value: 200 },
    //   { name: "湖北", value: 2000 }
    // ],
    label: {
      show: true,
      fontSize: 12
    },
    zoom: 1.3 //地图比例大小
  },
  tooltip: {
    //地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
    trigger: "item",
    formatter: "地区：{b}</br>确诊：{c}"
    // formatter: function(params) {
    //   return "地区：" + params.name + "</br>"+"确诊："+params.value+"</br>"+"治愈："+params.value
    // }
  }
};
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    // getData() {
    //   let myChart = echarts.init(document.getElementById("chart"));
    //   axios.get("https://www.maomin.club/fy/get/").then(res => {
    //     var made = JSON.parse(res.data);
    //     var madeData = made.component;
    //     var data = madeData[0];
    //     let lists = data.caseList.map(item => {
    //       return { name: item.area, value: parseInt(item.confirmed) };
    //     });
    //     option.series.data = lists
    //     myChart.setOption(option);
    //     //console.log(data);
    //   });
    // }
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("chart"));
    let data = JSON.parse(sessionStorage.getItem('totalData'))
    //console.log(data.China)     
    myChart.setOption(option);
  }
};
</script>

<style>
</style>