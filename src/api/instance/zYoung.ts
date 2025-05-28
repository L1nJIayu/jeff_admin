import Axios from 'axios'
import type { AxiosResponse } from 'axios'
import { BASE_URL } from '../config'
import { message } from 'antd'

// 通用响应结构
export interface ApiResponse<T = any> {
  code: number
  flag: boolean
  message: string
  data: T
}


const axiosInstance = Axios.create({
  baseURL: BASE_URL.Z_YOUNG
})


axiosInstance.interceptors.request.use(
  config => {
    const Authorization = sessionStorage.getItem('Authorization')
    config.headers['Authorization'] = `Bearer ${Authorization}`
    return config
  }
)

axiosInstance.interceptors.response.use(
  <T>(axiosResponse: AxiosResponse<ApiResponse<T>>): T => {
    const { data } = axiosResponse
    if(data.code != 20000) {
      message.warning(data.message)
    }
    return axiosResponse.data as T
  },
  error => {
    console.log('error', error)
    message.warning(error.message)
    return Promise.reject(error)
  }
)

export default axiosInstance