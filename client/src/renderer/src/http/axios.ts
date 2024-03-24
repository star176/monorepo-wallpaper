import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000
})

http.interceptors.request.use(
  (config) => {
    ElLoading.service({
      fullscreen: true
    })
    return config
  },
  // 请求失败
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (Response) => {
    ElLoading.service().close()
    return Response
  },
  (error) => {
    ElMessage({
      message: '请求失败',
      type: 'error',
      duration: 3000,
      center: false,
      grouping: true
    })
    return Promise.reject(error)
  }
)

export default http
