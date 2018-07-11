import api from '../api'
import http from '../fetch'

export function getPeopleList(pageId) {
  return http.get(api.peopleList + pageId + `/list.json?token=de33c0eedd872976e691fc878a5e349c&phone=13800138000&order_by=ename`)
}
export function getSpeecherList() {
  return http.get('http://api.thegitc.com/api/gitc/person-78/list.json?token=de33c0eedd872976e691fc878a5e349c&phone=13800138000')
}

export function getCooperative(Id) {
  return http.get(api.getImgList + Id + '/list.json?token=de33c0eedd872976e691fc878a5e349c')
}

export function getReview (Id) {
  return http.get(api.getImgList + Id + '/list.json?token=de33c0eedd872976e691fc878a5e349c')
}

export function getDate1() {
  return http.get('http://api.thegitc.com/api/gitc/person-4/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=-weight')
}

export function getDate2() {
  return http.get('http://api.thegitc.com/api/gitc/person-6/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=-weight')
}
