import axiosInstance from "../axios"

type LoginParams = {
  username: string
  password: string
}
type LoginApiResData = Promise<{
  data: {
    token: string
  }
}>
export function loginApi(params: LoginParams): LoginApiResData {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          token: 'abc'
        }
      })
    }, 1500)
  })
  return axiosInstance.post('/', params)
}