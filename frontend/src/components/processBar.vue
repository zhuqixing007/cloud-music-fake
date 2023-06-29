<template>
  <div class="process-wrapper">
    <div class="info-wrapper">
      <div class="name">{{ name }}</div>
      <div class="time">{{ curTimeStr }}/{{ fullTimeStr }}</div>
    </div>
    <div class="bar-wrapper">
      <div class="process-bar-back" @mousedown="processGoto" ref="processBarBack">
        <div class="process-bar-front">
          <div class="process-dot">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'processBar',
    props: {
      name: {
        type: String,
        default: "当前没有歌曲播放"
      },
      time: {
        type: Number,
        default: 3603
      }
    },
    data () {
      return {
        percent: 0
      }
    },
    computed: {
      curTime() {
        return parseInt(this.time * this.percent)
      },
      curTimeStr() {
        return this.timeFormatter(this.curTime)
      },
      fullTimeStr() {
        return this.timeFormatter(this.time)
      }
    },
    mounted() {
    },
    methods: {
      processGoto(event) {
        // 指定进度
        const curProcess = document.getElementsByClassName('process-bar-front')
        const fullProcessXStart = this.$refs.processBarBack.getBoundingClientRect().left
        const fullProcessXStop = this.$refs.processBarBack.offsetWidth
        const curWidth = event.clientX - fullProcessXStart + 16
        this.percent = (event.clientX - fullProcessXStart) / fullProcessXStop
        if (curWidth > 16 && curWidth < fullProcessXStop){
          curProcess[0].style.width = curWidth + 'px'
        }
        const self  = this
        document.onmousemove = function(event) {
          const mousePositionX = event.clientX
          let curProcessWillAtX = mousePositionX - fullProcessXStart + 16
          if (curProcessWillAtX < 16) {
            curProcessWillAtX = 16
          }
          if (curProcessWillAtX > fullProcessXStop) {
            curProcessWillAtX = fullProcessXStop
          }
          curProcess[0].style.width = curProcessWillAtX + 'px'
          const percent = (event.clientX - fullProcessXStart) / fullProcessXStop
          self.percent = percent < 0 ? 0 : percent > 1 ? 1 : percent
        }
      },
      timeFormatter(seconds) {
        let hour = parseInt(seconds / (60 * 60))
        let min = parseInt((seconds - hour * 60 * 60) / 60)
        let sec = seconds - hour * 3600 - min * 60
        if(hour < 9) {
          hour = `0${hour}`
        }
        if(min < 9) {
          min = `0${min}`
        }
        if(sec < 9) {
          sec = `0${sec}`
        }
        return `${hour}:${min}:${sec}`
      }
    }
}
</script>

<style lang="scss" scoped>
.process-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  // background-color: #868581;
  user-select: none;
}
.info-wrapper {
  display: flex;
  align-items: end;
  justify-content: space-between
  ;
  .name {
    flex: 1;
    margin-left: 10px;
    // border: 1px solid red;
  }
  .time {
    flex: 0 0 100px;
    // border: 1px solid red;
    margin-right: 10px;
  }
}
.bar-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 10px;
  width: 100%;
  height: 6px;
  .process-bar-back {
    flex: 1;
    margin: 0 6px;
    background-color: #d6d6d6;
    border-radius: 3px;
    .process-bar-front {
      position: relative;
      width: 16px;
      height: 6px;
      border-radius: 3px;
      background-color: #f83030;
      .process-dot {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-color: #f83030;
        border-radius: 50%;
        div {
          height: 6px;
          width: 6px;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
  }
}
</style>