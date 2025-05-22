import type React from "react";
import { useNavigate } from "react-router";

const Menu: React.FC = () => {
  const navigate = useNavigate()
  const jump = (routerName: string) => {
    navigate(routerName)
  }
  return (<>
    <div onClick={() => jump('/home')}>首页</div>
    <div onClick={() => jump('/user')}>用户列表</div>
    <div onClick={() => jump('/role')}>角色列表</div>
  </>)
}

export default Menu