import Axios from 'axios'
import { BASE_URL } from './config'

const axiosInstance = Axios.create({
  baseURL: BASE_URL
})

export default axiosInstance