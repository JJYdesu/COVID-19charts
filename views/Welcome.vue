<template>
  <div class="about">
    <h1>WelCome to JJY Pages!</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 mounted() {
   this.getData()
 },
 methods: {
   getData(){
      axios.get("https://www.maomin.club/fy/get/").then(res=>{
        let made = JSON.parse(res.data);
        let madeData = made.component;
        let data = madeData[0];
        console.log(data)
        let totalData = {
          EachCountryList:data.caseOutsideList, //1
          China:data.caseList,  //1
          World:data.globalList,//1
          foreignTrend:data.allForeignTrend,
          ChinaTrend:data.trend,//1
          ChinaSummary:data.summaryDataIn,//1
          ForeignSummary:data.summaryDataOut,//1
        }  
        sessionStorage.setItem('totalData',JSON.stringify(totalData))
      })
   }
 },
}
</script>