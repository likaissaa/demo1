	import Vue from 'vue'
	export const INCREMENT = (state) => {
		console.log(state)
		state.count++
	}
	export const DECREMENT = (state) => {
		state.count--
	}
	export const INCREMENTWITHVALUE = (state, value) => {
		state.count += value
	}
	export const LOGIN = (state, user) => {
		sessionStorage.setItem('user', JSON.stringify(user))
		state.user=JSON.parse(sessionStorage.getItem("user"))||{}

	}
	export const LOGOUT = (state) => {
		sessionStorage.removeItem('user')
		state.user={}
	}