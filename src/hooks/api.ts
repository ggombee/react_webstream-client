import axios from 'axios'

export const api = axios.create({
  // baseURL: process.env.REACT_APP_BASE_API,
  baseURL: "http://15.165.51.93:4000",

})

// // 토큰 갱신까지 대기 타이밍
// const checkedToken = () => {
//   return new Promise((resolve) => {
//     const timerId = setInterval(() => {
//       const _token = localStorage.token
//       if (_token) {
//         clearInterval(timerId)
//         resolve(_token)
//       }
//     }, 1000)
//   })
// }

// 요청 인터셉터
api.interceptors.request.use(
  async (config) => {
    config.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    }
    return config
  },
  async (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터
api.interceptors.response.use(
  function (response) {
    // const _token = localStorage.token
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api
