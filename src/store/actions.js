export const increment=({commit})=>{
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			commit('INCREMENT')
			resolve("true");
		}, 2000)
	})
	
}
 
export const decrement=({commit})=>{
	commit('DECREMENT')
}


