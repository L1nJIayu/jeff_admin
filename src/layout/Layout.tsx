import type { FC } from "react"
import { Outlet } from 'react-router'
import Menu from "@components/menu/Menu"
import Header from './header/Header'
import TabBar from '@components/tabBar/TabBar'

const HEADER_H = 40     // header高度
const SIDEBAR_W = 220   // 侧边栏宽度

const Layout: FC = () => {
  return (
    <div
      className="w-full h-full flex flex-col">
      <header
        className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-50 sticky top-0 shadow-sm"
        style={{ height: `${HEADER_H}px` }}>
        <Header />
      </header>
      <div
        className="flex-1 grid"
        style={{ gridTemplateColumns: `${SIDEBAR_W}px 1fr`}}
      >
        <aside className="h-full bg-[#FFF]">
          <Menu />
        </aside>
        <main className="bg-[#f0f2f5]">
          <div className="bg-[#FFF]">
            <TabBar></TabBar>
          </div>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}

export default Layout