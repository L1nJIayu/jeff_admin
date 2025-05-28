import Axios from 'axios'
import { BASE_URL } from '../config'
import { message } from 'antd'

const axiosInstance = Axios.create({
  baseURL: BASE_URL.SHOW_XIN
})

axiosInstance.interceptors.request.use(
  config => {
    const Authorization = sessionStorage.getItem('Authorization')
    config.headers['Authorization'] = `Bearer ${Authorization}`
    return config
  }
)

axiosInstance.interceptors.response.use(
  axiosResponse => {
    const { data } = axiosResponse
    if(!data.success) {
      message.warning(data.error_msg)

    }
    return data
  },
  error => {
    console.log('error', error)
    message.warning(error.message)
  }
)


export default axiosInstance