import type { RouteObject } from 'react-router'
import LoginPage from '../views/login/LoginPage'
import App from '../App'
import HomePage from '../views/home/HomePage'
import RoleTable from '../views/systemManage/roleManage/RoleTable'
import UserTable from '../views/systemManage/userManage/UserTable'

const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'StationMap',
        Component: HomePage
      },
      {
        path: 'RoleManage',
        Component: RoleTable
      },
      {
        path: 'UserManage',
        Component: UserTable
      }
    ]
  },

  {
    path: '/login',
    Component: LoginPage
  }
]

export default routes