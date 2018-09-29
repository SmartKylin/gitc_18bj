import api from '../apis'
import http from '../fetch'

export function createPro(id, data) {
  return http.post(api.createPro + `/product?key=${id}`, data)
}
export function createCha(id,data) {
  return http.post(api.createPro + `/person?key=${id}`, data)
}
export function createCom(id,data) {
  return http.post(api.createPro + `/company?key=${id}`, data)
}

export function getToken() {
  return http.get(api.createPro + `/token`)
}

export function onUploadImg(id, data) {
    return http.post(api.createPro + `/upload/img?key=${id}`, data)
  }