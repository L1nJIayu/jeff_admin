import axiosInstance from "../instance/showXin"
import { BASE_URL } from '../config'
import LoginURI from '@api/uri/login'

export function getValidateCodeImgURI() {
  const t = new Date().getTime()
  return `${BASE_URL.SHOW_XIN}/${LoginURI.loginCode}?t=${t}`
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
  return axiosInstance.post<LoginApiResData>(`${LoginURI.login}?code=${code}`, params)
}