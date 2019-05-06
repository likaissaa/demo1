import {login} from '@/api/login.js'

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

export const handleLogin=({commit}, {userName, password}) =>{
  return new Promise((resolve, reject) => {
    login({
      userName,
      password
    }).then( res => {
     if(res.data.success) {
      commit('LOGIN',res.data.data.token)
     } else {
       console.log(res.data.message)
     }
     
      resolve({"success":res.data.success})
    }).catch( err => {
      reject(err)
    })
  })
}


