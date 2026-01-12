import { lazy } from 'react'
import type { AppRouteObject } from './types'
import App from '@/App'

const HomePage = lazy(() => import('@views/home/HomePage'))
const RoleTable = lazy(() => import('@views/systemManage/roleManage/RoleTable'))
const UserTable = lazy(() => import('@views/systemManage/userManage/UserTable'))
const OperatorTable = lazy(() => import('@views/resourceManage/operator/OperatorTable'))

const routes: AppRouteObject[] = [
  {
    path: '/',
    Component: App,
    meta: {
      title: '主页'
    },
    children: [
      { path: 'station-map', Component: HomePage },
      { path: 'role-manage', Component: RoleTable },
      {
        path: 'user-manage',
        Component: UserTable,
        meta: {
          keepAlive: true
        }
      },
      { path: 'operator-manage', Component: OperatorTable },
    ]
  }
]

export default routes