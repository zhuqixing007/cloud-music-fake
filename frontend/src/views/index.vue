<template>
  <div class="app-wrapper">
    <div class="views">
      <div class="side-menu">
        <ul>
          <li v-for="item in menus" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
      <div class="view-wrapper">22</div>
    </div>
    <div class="player">33</div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { mapState } from 'vuex'
export default {
  // eslint-disable-next-line
  name: 'index',
  computed: {
    ...mapState({
      menus: state => state.sideMenus
    })
  }
}
</script>

<style lang="scss" scoped>
@import './common.scss';
.app-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  .views {
    flex: 1;
    display: flex;
    .side-menu {
      flex: 0 0 60px;
      border-right: 1px solid red;
    }
    .view-wrapper {
      flex: 1;
    }
  }
  .player {
    flex: 0 0 60px;
    border: 1px solid red;
  }
}
</style>