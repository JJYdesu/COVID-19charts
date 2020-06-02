let option3= {
  title: {
      text: '', 
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: [],
      itemGap:10 ,
      orient:'vertical',
      right:-5,
      top:30
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
      axisLabel: {
        interval: 0,
        rotate: 40
      }
    },
    yAxis: {
      type: 'value'
    },
    series: []
}
//折线图数据
let option1= {
    title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: []
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLabel: {
          interval: 0,
          rotate: 40
        }
      },
      yAxis: {
        type: 'value'
      },
      series: []
}

let option2 = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: []
    },
    xAxis: {
      type: 'category',
      axisTick: { show: false },
      data: [],
      axisLabel: {
        interval: 0,
        rotate: 40
      }
    },
    yAxis: {
      type: 'value'
    },
    series: []
}

  export {option1,option2,option3}