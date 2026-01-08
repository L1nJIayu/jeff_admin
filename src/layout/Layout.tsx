import type { FC } from "react"
import { Outlet } from 'react-router'
import Menu from "@components/menu/Menu"
import Header from './Header'

const HEADER_H = 40     // header高度
const SIDEBAR_W = 220   // 侧边栏宽度

const Layout: FC = () => {
  return (
    <div
      className="w-screen h-screen grid"
      style={{ gridTemplateColumns: `${SIDEBAR_W}px 1fr` }}>
      <aside className="h-full bg-[#FFF]">
        <Menu />
      </aside>
      <div className="h-full flex flex-col">
        <header
          className="shrink-0 bg-[#292929]"
          style={{ height: `${HEADER_H}px` }}>
          <Header />
        </header>
        <main className="flex-1 bg-[#EFEFEF]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout