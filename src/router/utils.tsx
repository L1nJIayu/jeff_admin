import type { RouteObject } from 'react-router'
import { KeepAlive } from 'react-activation'
import type { AppRouteObject } from './types'




/**
 * 将 AppRouteObject 转换为 React Router 的 RouteObject
 * 自动为需要缓存的路由包裹 KeepAlive
 */
export const generateRoutes = (routes: AppRouteObject[]): RouteObject[] => {
  return routes.map(route => {
    const { Component, meta, children, index, ...rest } = route
    
    let element: React.ReactNode = Component ? <Component /> : null
    
    // 如果需要缓存,包裹 KeepAlive
    if (Component && meta?.keepAlive) {
      element = (
        <KeepAlive 
          id={route.path || 'unknown'} 
          name={route.path}
          // 可选:自动保存滚动位置
          saveScrollPosition="screen"
        >
          <Component />
        </KeepAlive>
      )
    }
    
    // ✅ index 路由
    if (index) {
      return {
        index: true,
        element
      }
    }

    return {
      ...rest,
      element,
      children: children ? generateRoutes(children) : undefined
    }
  })
}