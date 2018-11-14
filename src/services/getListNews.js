import api from '../api'
import http from '../fetch'

export function getListImgs(id) {
  return http.get(api.getImgList + `${id}/list.json?token=9d349496a7dab8f131c620a806e9ec6d&order_by=-weight`)
}

export function getImgs(id) {
  return http.get(api.getImgList + `${id}/list.json?token=61f93e2c862efe7c8614bbe066c846c4`)
}
