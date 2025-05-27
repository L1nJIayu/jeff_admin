import type React from "react"
import { Outlet } from 'react-router'
import './layout.scss'
import Menu from "../components/menu/Menu"
import Header from './Header'

const Layout: React.FC = () => {
  return (<>
    <div className="mainPage">
      <div className="mp_sideBar">
        <Menu></Menu>
      </div>
      <div className="mp_container">
        <div className="mp_header">
          <Header />
        </div>
        <div className="mp_content">
          <Outlet />
        </div>
      </div>
    </div>
  </>)
}

export default Layout