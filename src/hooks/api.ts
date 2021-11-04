import React from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: '',
})

// 토큰 갱신까지 대기 타이밍
const checkedToken = () => {
  return new Promise((resolve) => {
    const timerId = setInterval(() => {
      const _token = localStorage.token
      if (_token) {
        clearInterval(timerId)
        resolve(_token)
      }
    }, 1000)
  })
}

// 요청 인터셉터
api.interceptors.request.use(
  async (config) => {
    const _adminId = (localStorage.adminId = '')

    const token = localStorage.token || ''

    config.headers = {
      adminId: _adminId,
      'Content-Type': 'application/json; charset=utf-8',
    }
    return config
  },
  async (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터

export default api
