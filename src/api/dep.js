
import Qs from "qs";
import axios from '@/api/promise.js'
export const depList = () => {
  return axios("/api/depart/list","get",{});
};
export const depById = id => {
  return axios("/api/depart/getlistbyid","get",{ id: id });
};

export const update = depart => {
  return axios("/api/depart/update","post", Qs.stringify(depart));
};

export const remove = depart => {
  return axios("/api/depart/remove","post", Qs.stringify(depart))
}