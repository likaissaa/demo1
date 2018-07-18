export const increment=({commit})=>{
	commit('INCREMENT')
}
 /* increment ({ commit }) {
    commit('increment')
  }*/
export const decrement=({commit})=>{
	commit('DECREMENT')
}

export const incrementWithValue=({commit},value)=>{
	console.log(value)
	commit("INCREMENTWITHVALUE",parseInt(value))
}

export const login=({commit},user)=>{
	commit('LOGIN',user)
}

export const logout=({commit})=>{
	commit('LOGOUT')
}
