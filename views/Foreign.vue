<template>
	<div class="total">
		<DataList class="DataList"></DataList>
		<div class="right-box">
			<DataHead class="DataHead"></DataHead>
			<div class="map">
				<ForeignTrend
					v-if="currentIndex == 0"
					class="charts"
				></ForeignTrend>
				<ForeignData
					v-if="currentIndex == 1"
					class="charts"
				></ForeignData>
				<DataCompare
					v-if="currentIndex == 2"
					class="charts"
				></DataCompare>
			</div>
			<div class="change">
				<ul class="indexes">
					<li
						@click="gotoNext(i)"
						v-for="(item, i) in dataList"
						:key="item.id"
						:class="{ active: i === currentIndex }"
					></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import ForeignData from '../components/ForeignData'
import ForeignTrend from '../components/ForeignTrend'
import DataCompare from '../components/DataCompare'
import DataList from '../components/DataList'
import DataHead from '../components/DataHead'
export default {
	components: {
		ForeignData,
		ForeignTrend,
		DataCompare,
		DataList,
		DataHead,
	},
	data() {
		return {
			dataList: ['echarts1', 'echarts2', 'echarts3'],
			currentIndex: 0,
		}
	},
	mounted() {},

	methods: {
		gotoNext(i) {
			this.currentIndex = i
		},
	},
}
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
	list-style: none;
}
.total {
	display: flex;
	height: 90%;
}
.right-box {
	display: flex;
	flex-direction: column;
	width: 75%;
	height: 100%;
}
.DataHead {
	width: 100%;
	height: 25%;
}
.map {
	width: 90%;
	height: 70%;
	margin: 0 auto;
}

.DataList {
	width: 25%;
	height: 100%;
}
.change {
	width: 100%;
	height: 5%;
	margin-top: 10px;
}
.indexes {
	display: flex;
	bottom: 10px;
	justify-content: center;
}
.indexes li {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: #fff;
	margin: 0 5px;
}
.indexes li:hover {
	cursor: pointer;
}
.indexes li.active {
	background: orangered;
}
</style>
