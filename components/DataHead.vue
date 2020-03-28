<template>
  <div class="total">
      <div>累计确诊:{{totalConfirmed}}</div>
      <div>累计死亡:{{totalDied}}</div>
      <div>累计治愈:{{totalCured}}</div>
  </div>
</template>

<script>
export default {
    name:'DataHead',
    created() {
        let Data = JSON.parse(sessionStorage.getItem('totalData'))
        console.log(Data)
        let ChinaSummary = Data.ChinaSummary
        let ForeignSummary = Data.ForeignSummary
        
        this.totalConfirmed = parseInt(ChinaSummary.confirmed) + parseInt(ForeignSummary.confirmed)
        this.totalCured = parseInt(ChinaSummary.cured) + parseInt(ForeignSummary.cured)
        this.totalDied = parseInt(ChinaSummary.died) + parseInt(ForeignSummary.died)
        
    },
}
</script>

<style scoped>
.total{
    height: 25%;
    width: 100%;
    background: #353b48;
    color: white;
}

</style>
