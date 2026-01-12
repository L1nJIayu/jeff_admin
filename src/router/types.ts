import type { RouteObject } from 'react-router'

export interface AppRouteMeta {
  title?: string
  keepAlive?: boolean
}

export type AppRouteObject = Omit<RouteObject, 'children'> & {
  meta?: AppRouteMeta
  children?: AppRouteObject[]
}