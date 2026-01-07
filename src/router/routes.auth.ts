import type { RouteObject } from 'react-router'
import { lazy } from 'react'


const LoginPage = lazy(() => import('@views/login'))

const routes: RouteObject[] = [
  {
    path: '/login',
    Component: LoginPage
  }
]

export default routes