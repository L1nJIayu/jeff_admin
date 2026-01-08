import {
  AUTH,
  PERMISSION
} from '@constants/localStorage'

export const setToken = (token: string) => localStorage.setItem(AUTH, token)
export const getToken = (): string | null => localStorage.getItem(AUTH)


export const hasPermission = (permission?: string) => {
  if (!permission) return true
  const list = JSON.parse(sessionStorage.getItem(PERMISSION) || '[]')
  return list.includes(permission)
}