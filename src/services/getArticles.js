import api from '../api'
import http from '../fetch'

export function getArticles(id) {
  return http.get(api.getArticleList + `${id}/list.json?token=9d349496a7dab8f131c620a806e9ec6d`)
}
