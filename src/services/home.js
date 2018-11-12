import api from '../api'
import http from '../fetch'

export function getPeopleList(pageId) {
  return http.get(api.peopleList + pageId + `/list.json?token=9d349496a7dab8f131c620a806e9ec6d&phone=13800138000&order_by=ename`)
}

export function getSpeecherList() {
  return http.get('http://api.thegitc.com/api/gitc/person-78/list.json?token=de33c0eedd872976e691fc878a5e349c&phone=13800138000')
}

export function getCooperative(Id) {
  return http.get(api.getImgList + Id + '/list.json?token=de33c0eedd872976e691fc878a5e349c')
}

export function getReview (Id) {
  return http.get(api.getImgList + Id + '/list.json?token=61f93e2c862efe7c8614bbe066c846c4')
}



//大会议程22号
export function getDate1() {
  return http.get('http://api.thegitc.com/api/gitc/person-15/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=-weight')
}
//大会议程23号
export function getDate2() {
  return http.get('http://api.thegitc.com/api/gitc/person-16/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=-weight')
}
//竞选获取数据
export function getDate3() {
  return http.get('http://api.thegitc.com/api/gitc/person-18/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=ename')
}
//竞选提交
export function getDate5(data) {
  return http.post('http://api.thegitc.com/award/gitc/review', data)
}
