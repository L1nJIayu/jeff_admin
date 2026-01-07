import { lazy } from 'react'
import type { RouteObject } from 'react-router'
import App from '@/App'

const HomePage = lazy(() => import('@views/home/HomePage'))
const RoleTable = lazy(() => import('@views/systemManage/roleManage/RoleTable'))
const UserTable = lazy(() => import('@views/systemManage/userManage/UserTable'))
const OperatorTable = lazy(() => import('@views/resourceManage/operator/OperatorTable'))

const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      { path: 'station-map', Component: HomePage },
      { path: 'role-manage', Component: RoleTable },
      { path: 'user-manage', Component: UserTable },
      { path: 'operator-manage', Component: OperatorTable },
    ]
  }
]

export default routes