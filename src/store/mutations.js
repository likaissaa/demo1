import * as types from './mutations-types'
const mutations = {
	[types.INCREMENT](state) {
		state.count++
	},

	[types.DECREMENT](state) {
		state.count--
	},
	[types.LOGIN](state, user) {
		state.user = user;
	},
	[types.LOGINOUT](state,user) {
		console.log(user)
	}
}
export default mutations
