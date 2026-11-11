import { createStore } from 'vuex'

import productsModule from './modules/products.js'
import cartModule from './modules/cart.js'

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule,
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setLoggedIn(state, payload) {
            state.isLoggedIn = payload.isLoggedIn
        }
    },
    getters: {
        userIsLoggedIn(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        login(context) {
            context.commit('setLoggedIn', {isLoggedIn: true})
        },
        logout(context) {
            context.commit('setLoggedIn', {isLoggedIn: false})
        }
    }
})

export default store