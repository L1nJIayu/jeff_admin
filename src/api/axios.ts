import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: '/dev'
})

export default axiosInstance