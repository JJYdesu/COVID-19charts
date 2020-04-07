<template>
	<div class="total">
		<div class="list-head">
			<div>国家</div>
			<div>确诊</div>
			<div>死亡</div>
			<div>治愈</div>
		</div>
		<div class="list-box">
			<ul class="indexes">
				<li v-for="item in dataList" :key="item.id">
					<div>{{ item.area }}</div>
					<div>{{ item.confirmed }}</div>
					<div>{{ item.died }}</div>
					<div>{{ item.crued }}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DataList',
	created() {
		let Data = JSON.parse(sessionStorage.getItem('totalData'))
		let ChinaList = {
			area: '中国',
			confirmed: Data.ChinaSummary.confirmed,
			crued: Data.ChinaSummary.cured,
			died: Data.ChinaSummary.died,
		}
		Data.EachCountryList.push(ChinaList)
		let list = Data.EachCountryList
		list.sort((a, b) => {
			return b.confirmed - a.confirmed
		})
		this.dataList = list
	},
	methods: {},
}
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
	list-style: none;
}
.total {
	background: #353b48;
	color: white;
	height: 612px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.global {
	height: 25%;
	width: 100%;
}
.list-box {
	overflow-y: auto;
	height: 100%;
}

.indexes li {
	color: white;
	display: flex;
	justify-content: space-around;
}

.indexes li div {
	width: 110px;
	margin-top: 10px;
}
.list-head {
	display: flex;
	justify-content: space-around;
	width: 96%;
}
</style>
