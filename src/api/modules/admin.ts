import axiosInstance from "../axios"
import { BASE_URL } from '../config'

export function getValidateCodeImgURI() {
  const t = new Date().getTime()
  return `${BASE_URL}/ui/unientry/getCode?t=${t}`
}

type LoginParams = {
  username: string
  password: string
  code: string
}
type LoginApiResData = Promise<{
  data: {
    curruser: string
    sid: string
    token: string
  }
}>
export function loginApi(params: LoginParams): LoginApiResData {
  const { code } = params
  return axiosInstance.post(`/ui/unientry/login?code=${code}`, params)
}