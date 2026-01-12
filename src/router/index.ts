import { createBrowserRouter, type RouteObject } from "react-router"
import routes from "./routes"
import { generateRoutes } from './utils'

const router = createBrowserRouter(generateRoutes(routes) as RouteObject[])

export default router