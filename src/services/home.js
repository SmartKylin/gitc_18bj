import api from '../api'
import http from '../fetch'

export function getPeopleList(pageId) {
  return http.get(api.peopleList + pageId + `/list.json?token=de33c0eedd872976e691fc878a5e349c&phone=13800138000&order_by=ename`)
}
export function getSpeecherList() {
  return http.get('http://120.92.10.182:8000/api/gitc/person-78/list.json?token=de33c0eedd872976e691fc878a5e349c&phone=13800138000')
}

export function getCooperative(Id) {
  return http.get(api.getImgList + Id + '/list.json?token=de33c0eedd872976e691fc878a5e349c')
}

//往期回顾 http://120.92.10.182:8000/api/gitc/img-79/list.json?token=de33c0eedd872976e691fc878a5e349c
export function getReview (Id) {
  return http.get(api.getImgList + Id + '/list.json?token=de33c0eedd872976e691fc878a5e349c')
}
