<template>
	<div class="total">
		<div class="title">全球新冠病毒数据统计</div>
		<div class="dataNumber">
			<div class="totalConfirmed">
				<div class="head">累计确诊</div>
				<div class="number">{{ totalConfirmed }}</div>
				<div class="increased"></div>
			</div>
			<div class="totalDied">
				<div class="head">累计死亡</div>
				<div class="number">{{ totalDied }}</div>
				<div class="increased"></div>
			</div>
			<div class="totalCured">
				<div class="head">累计治愈</div>
				<div class="number">{{ totalCured }}</div>
				<div class="increased"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DataHead',
	created() {
		let Data = JSON.parse(sessionStorage.getItem('totalData'))
		console.log(Data)
		let ChinaSummary = Data.ChinaSummary
		let ForeignSummary = Data.ForeignSummary

		this.totalConfirmed =
			parseInt(ChinaSummary.confirmed) +
			parseInt(ForeignSummary.confirmed)
		this.totalCured =
			parseInt(ChinaSummary.cured) + parseInt(ForeignSummary.cured)
		this.totalDied =
			parseInt(ChinaSummary.died) + parseInt(ForeignSummary.died)
	},
}
</script>

<style scoped>
.total {
	height: 25%;
	width: 100%;
	background: #353b48;
	color: white;
	display: flex;
}
.title {
	height: 100%;
	width: 30%;
	font-size: 200%;
	line-height: 200%;
}
.dataNumber {
	margin-left: 20px;
	display: flex;
	width: 40%;
	justify-content: space-around;
}
.dataNumber div div {
	margin-top: 10px;
}
.number {
	font-size: 25px;
}
</style>
