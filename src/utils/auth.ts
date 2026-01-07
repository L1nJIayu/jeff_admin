import { AUTH } from '@constants/localStorage'

export const setToken = (token: string) => localStorage.setItem(AUTH, token)