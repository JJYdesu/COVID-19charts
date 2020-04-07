<template>
  <div class="banner">
    <div class="item">
      <img
        v-show="currentIndex === i"
        v-for="(item, i) in dataList"
        :key="item.id"
        :src="item"
      />
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
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        'https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg',
        'https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg',
        'https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg',
      ],
      currentIndex: 1, //默认显示图片
      timer: null, //定时器
    }
  },
  mounted() {
    // setInterval(()=>{
    //   ++this.currentIndex
    //   if(this.currentIndex>this.dataList.length-1) this.currentIndex=0
    // },1000)
  },
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
.item {
  width: 600px;
  margin: 100px auto;
  position: relative;
  display: flex;
  justify-content: center;
}
.item img {
  width: 600px;
}
.indexes {
  display: flex;
  position: absolute;
  bottom: 10px;
}
.indexes li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  margin: 0px 5px;
}
.indexes li:hover {
  cursor: pointer;
}
.indexes li.active {
  background: orangered;
}
</style>
