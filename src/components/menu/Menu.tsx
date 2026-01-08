import type React from "react"
import { useNavigate } from "react-router"
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useDispatch } from 'react-redux'
import { addTabItem } from '@store/slice/tabBarSlice'

// type MenuItem = Required<MenuProps>['items'][number]
type MenuItem = {
  label: string
  key: string
  children?: MenuItem[]
}

const menuList: MenuItem[] = [
  {
    label: '站点地图',
    key: 'station-map'
  },
  {
    label: '资源管理',
    key: 'ResourceManage',
    children: [
      {
        label: '运营商管理',
        key: 'operator-manage'
      },
    ]
  },
  {
    label: '系统管理',
    key: 'SystemManage',
    children: [
      {
        label: '用户管理',
        key: 'user-manage'
      },
      {
        label: '角色管理',
        key: 'role-manage'
      },
    ]
  }
]

const menuListKeyLabelMap = buildKeyLabelMap(menuList)
function buildKeyLabelMap(
  menuList: MenuItem[],
  map: Record<string, string> = {}
) {

  menuList.forEach(menu => {
    if(!menu) return
    
    map[menu.key] = String(menu.label)

    if(menu.children && menu.children.length) {
      return buildKeyLabelMap(menu.children, map)
    }

  })


  return map
}

const TheMenu: React.FC = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    const { key } = e
    dispatch(addTabItem({
      key,
      label: menuListKeyLabelMap[key] || key,
    }))
    
    navigate(key)
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 220 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={menuList}
    />
  )
}


export default TheMenu