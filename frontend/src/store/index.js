import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [
      { id: 'discover', name: '发现', icon: 'icon-netease-cloud-music-line', active: 1 },
      { id: 'mv', name: 'MV', icon: 'icon-shipin', active: 0 },
      { id: 'friends', name: '朋友', icon: 'icon-pengyouquan', active: 0 },
      { id: 'mine', name: '我的', icon: 'icon-wode', active: 0 },
      { id: 'fm', name: 'FM', icon: 'icon-a-tupianyihuifu-05', active: 0 },
    ],
    user: {
      name: 'valar',
      avator: '',
      phone: ''
    }
  },
  getters: {
  },
  mutations: {
    switchTab(state, payload) {
      const menus = [...state.menus]
      menus.map(item => {
        item.active = item.id === payload.id ? 1: 0
      })
      state.menus = [
        ...menus
      ]
    }
  },
  actions: {
  },
  modules: {
  }
})
