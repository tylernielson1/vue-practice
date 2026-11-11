import { createStore } from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

const store = createStore({
    modules: {
        numbers: counterModule
    },
  state() {
    return {
      isAuth: false
    };
  },
  mutations: mutations,
  getters: getters,
  actions: actions,
});

export default store;