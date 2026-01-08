import { lazy } from 'react'
import type { AppRouteObject } from './types'


const LoginPage = lazy(() => import('@views/login'))

const routes: AppRouteObject[] = [
  {
    path: '/login',
    Component: LoginPage,
    handle: {
      title: '登录'
    }
  }
]

export default routes