
import Qs from "qs";
import axios from '@/api/promise.js'
export const userList = () => {
  return axios("/api/user/list","get",{});
};
export const userById = id => {
  return axios("/api/user/getlistbyid","get",{ id: id });
};

export const update = user => {
  return axios("/api/user/update","post", Qs.stringify(user));
};

export const remove = user => {
  return axios("/api/user/remove","post", Qs.stringify(user))
}