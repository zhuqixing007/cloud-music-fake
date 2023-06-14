import { createStore } from 'vuex'

export default createStore({
  state: {
    sideMenus: [
      { id: 'found', name: '发现' },
      { id: 'mv', name: 'MV' },
      { id: 'mine', name: '我的' },
      { id: 'friends', name: '朋友' },
      { id: 'account', name: '账号' },
      { id: 'personalfm', name: '私人FM' }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
