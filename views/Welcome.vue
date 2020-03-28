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
          EachCountryList:data.caseOutsideList,
          China:data.caseList,
          World:data.globalList,
          foreignTrend:data.foreignTrendList,
          ChinaTrend:data.trend,
          ChinaSummary:data.summaryDataIn,
          ForeignSummary:data.summaryDataOut,
        }  
        sessionStorage.setItem('totalData',JSON.stringify(totalData))
      })
   }
 },
}
</script>