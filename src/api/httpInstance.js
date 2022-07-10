import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 5000
})

http.interceptors.request.use(config => {
  console.log(config)
  return config
})

http.interceptors.response.use(response => {
  if(response.status === 200) {
    return response.data
  }
}, error => {
  console.log(error)
  return Promise.reject(error)
})

const httpCurry = (method, url) => {
  if (method.toUpperCase() === 'GET') {
    return (data = {}) => {
      return http(url, {
        method,
        params: data
      })
    }
  } else {
    return (data = {}) => {
      return http(url, {
        method,
        data
      })
    }
  }
}

export default httpCurry
