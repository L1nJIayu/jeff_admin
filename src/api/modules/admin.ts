import axiosInstance from "../instance/showXin"
import { BASE_URL } from '../config'

export function getValidateCodeImgURI() {
  const t = new Date().getTime()
  return `${BASE_URL.SHOW_XIN}/ui/unientry/getCode?t=${t}`
}

type LoginApiParams = {
  username: string
  password: string
  code: string
}

type LoginApiResData = {
  curruser: string
  sid: string
  token: string
}
export function loginApi(params: LoginApiParams) {
  const { code } = params
  return axiosInstance.post<LoginApiResData>(`/ui/unientry/login?code=${code}`, params)
}