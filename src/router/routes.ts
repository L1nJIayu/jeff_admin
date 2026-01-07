import type { RouteObject } from 'react-router'
import appRoutes from './routes.app'
import authRoutes from './routes.auth'

const routes: RouteObject[] = [
  ...appRoutes,
  ...authRoutes
]

export default routes