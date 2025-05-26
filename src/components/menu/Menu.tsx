import type React from "react"
import { useNavigate } from "react-router"
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: '站点地图',
    key: 'StationMap'
  },
  {
    label: '系统管理',
    key: 'SystemManage',
    children: [
      {
        label: '用户管理',
        key: 'UserManage'
      },
      {
        label: '角色管理',
        key: 'RoleManage'
      },
    ]
  }
];

const TheMenu: React.FC = () => {

  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    const { key } = e
    navigate(key)
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 220 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}


export default TheMenu