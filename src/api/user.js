import axios from '@/axios/http.js'
import Qs from 'qs'
export const userList = () => {
  return axios.get('/api/list')
}
export const userById = (id) => {
  return axios.get('/api/getlistbyid',{ 
     params: {id: id}
    })
}

export const update = (user) => {
  let param = new URLSearchParams()
param.append('id', user.id)
param.append('name', user.name)
param.append('age', user.age)
  return axios.post('/api/update', param)
}
