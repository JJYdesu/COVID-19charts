<template>
  <body>
    <header>JJY个人记事本</header>
    <div id="container">
      <!-- 输入框 -->
      <div class="box1">
        <input
          @keyup.enter="submit"
          v-model="text"
          class="input"
          type="text"
          placeholder="任务:几小时后开始（例:写代码:3）"
        />
      </div>
      <!-- 列表区域 -->
      <div class="listBox">
        <ul class="ul">
          <li class="li" v-for="(value, index) in submitText" :key="index">
            <div class="view">
              <div class="index">{{ index + 1 }}</div>
              <img
                src="../assets/finish.png"
                alt="已完成"
                v-bind:class="[img, finishIndex[index] ? finishImg : '']"
              />
              <img
                src="../assets/unfinish.png"
                alt="超时"
                v-bind:class="[img, unfinishIndex[index] ? unfinishImg : '']"
              />
              <img
                src="../assets/warning.png"
                alt="警告"
                v-bind:class="[img, warningIndex[index] ? warningImg : '']"
              />
              <div class="value">
                {{ value }}
                <span class="tiptext">{{ finishTime[index] }}点开始</span>
              </div>
              <div class="time">{{ time[index] }}</div>
              <button class="btn gou" @click="finish(index)">
                <img src="../assets/gou.png" alt="完成" />
              </button>
              <button class="btn" @click="clear(index)">
                <img src="../assets/cha.svg" alt="取消s" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <!-- 底部栏 -->
      <footer class="toolBar">
        <div class="statistics">{{ submitText.length }} item left</div>
        <button class="clearAll" @click="clearAll">clear</button>
      </footer>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      submitText: [],
      time: [],
      finishTime: [],
      finishIndex: [],
      unfinishIndex: [],
      warningIndex: [],
      img: 'img',
      finishImg: 'finishImg',
      unfinishImg: 'unfinishImg',
      warningImg: 'warningImg',
    }
  },
  created: function() {
    let date = new Date()
    let nowHour = date.getHours()
  },

  methods: {
    submit: function() {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let nowDate = year + '-' + month + '-' + day
      let nowTime = hour + ':' + minute + ':' + second
      let now = nowDate + ' ' + nowTime

      let str = this.text.split(':')

      this.time.push(now)
      this.submitText.push(str[0])
      this.finishTime.push(hour + parseInt(str[1]))
      this.finishIndex.push(false)

      let dvalue = parseFloat(str[1])
      console.log(this.time)

      if (dvalue < 1 && dvalue > 0) {
        this.warningIndex.push(true)
        this.unfinishIndex.push(false)
      } else if (dvalue < 0) {
        this.warningIndex.push(false)
        this.unfinishIndex.push(true)
      } else {
        this.warningIndex.push(false)
        this.unfinishIndex.push(false)
      }
    },
    clear: function(index) {
      this.submitText.splice(index, 1)
      this.time.splice(index, 1)
    },
    test: function() {
      console.log('test')
    },
    clearAll: function() {
      this.submitText.splice(0)
      this.time.splice(0)
    },
    finish: function(index) {
      this.finishIndex.splice(index, 1, true)
      this.unfinishIndex.splice(index, 1, false)
      this.warningIndex.splice(index, 1, false)
      console.log(this.finishIndex)
    },
  },
}
</script>

<style scoped>
@import '../css/index.css';
</style>
