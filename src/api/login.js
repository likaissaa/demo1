import axios from '@/axios/http.js'
export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.post('login',
    data)
}
