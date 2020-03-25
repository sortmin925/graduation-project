import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user_model/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user_model/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user_model/user/logout',
    method: 'post'
  })
}

export function registerUser(data) {
  return request({
    url: '/user_model/user/register',
    method: 'post',
    data
  })
}
