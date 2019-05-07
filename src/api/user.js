
import Qs from "qs";
import axios from '@/api/promise.js'
export const userList = () => {
  return axios("/api/list","get",{});
};
export const userById = id => {
  return axios("/api/getlistbyid","get",{ id: id });
};

export const update = user => {
  return axios("/api/update","post", Qs.stringify(user));
};

export const remove = user => {
  return axios("/api/remove","post", Qs.stringify(user))
}