<template>
  <div class="app-wrapper">
    <div class="views">
      <div class="side-menus">
        <div class="avator">
          <div>{{ user.avator }}</div>
          <div>{{ user.name }}</div>
        </div>
        <ul>
          <li :class="{ 'menu-item': true,  'active': item.active }" v-for="item in menus" :key="item.id" @click="goto(item.id)">
            <!-- {{ item.icon }} -->
            <span  :class="'iconfont ' + item.icon"></span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
        <div class="settings">
          <span class="iconfont icon-shezhi"></span>
        </div>
      </div>
      <div class="view-tab"></div>
    </div>
    <div class="player">
      <div class="music-img">封面</div>
      <div class="controller">
        <span class="iconfont icon-shangyishou"></span>
        <span v-if="!isPlay" class="iconfont icon-shipinbofangshibofang" @click="playOrPause"></span>
        <span v-else class="iconfont icon-zanting" @click="playOrPause"></span>
        <span class="iconfont icon-xiayishou"></span>
      </div>
      <div class="process">进度条&歌名&时长</div>
      <div class="operations">
        <span class="iconfont icon-xihuan"></span>
      </div>
      <div class="none-block"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  //eslint-disable-next-line
  name: 'index',
  data() {
    return {
      isPlay: false
    }
  },
  computed: {
    ...mapState({
      menus: state => state.menus,
      user: state => state.user
    })
  },
  methods: {
    goto(target) {
      this.$store.commit('switchTab', { id: target })
    },
    playOrPause() {
      this.isPlay = !this.isPlay
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/common.scss";
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  // background-color: bisque;
}
.views {
  flex: 1;
  display: flex;
  .side-menus {
    position: relative;
    flex: 0 0 80px;
    border-right: 1px solid #eee;
    .avator {
      margin: 20px 0;
      text-align: center;
      div:first-child {
        border: 1px solid #eee;
        height: 46px;
        width: 46px;
        margin: 4px auto;
        border-radius: 50%;
      }
    }
    // color: #a0a0a0;
    font-size: 14px;
  }
}
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 8px 0;
  color: #686868;
  cursor: pointer;
  user-select: none;
  span {
    display: block;
    padding: 4px;
  }
  span:first-child {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
.player {
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eee;
  .music-img {
    border: 1px solid red;
    width: 50px;
    height: 50px;
  }
  .controller {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    width: 110px;
    height: 50px;
    span {
      display: inline-block;
      margin: 0 2px;
      font-size: 24px;
      width: 30px;
      height: 30px;
      background-color: #f83030;
      color: #fff;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
    }
  }
  .process {
    border: 1px solid red;
    width: 400px;
    height: 50px;
  }
  .operations {
    display: flex;
    align-items: center;
    border: 1px solid red;
    width: 100px;
    height: 50px;
    span {
      font-size: 24px;
    }
  }
  .none-block {
    // border: 1px solid red;
    width: 50px;
    height: 50px;
  }
}
.settings {
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 4px;
  text-align: center;
}
.active {
  span:first-child {
    background-color: #f83030;
    color: #fff;

  }
  span:last-child {
    color: #f83030;
  }
}
</style>