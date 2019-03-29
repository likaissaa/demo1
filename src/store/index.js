import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import  mutations from './mutations'
import * as getters from './getters'
import state from './rootState'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	strict: debug,
	plugins: debug? [createLogger()]: []
})

export default store; 