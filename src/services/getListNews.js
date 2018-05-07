import api from '../api'
import http from '../fetch'

export function getListImgs(id) {
  return http.get(api.getImgList + `${id}/list.json?token=de33c0eedd872976e691fc878a5e349c`)
}