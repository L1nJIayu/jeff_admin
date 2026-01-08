import type { AppRouteObject } from './types'
import appRoutes from './routes.app'
import authRoutes from './routes.auth'

const routes: AppRouteObject[] = [
  ...appRoutes,
  ...authRoutes
]

export default routes