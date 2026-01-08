import type { FC, ReactNode } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { removeTabItem, changeActiveKey } from '@store/slice/tabBarSlice'
import { useNavigate } from 'react-router'

interface TabBarProps {
  children?: ReactNode
}

export type onEditFunc = NonNullable<TabsProps['onEdit']>

const TabBar: FC<TabBarProps> = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    list,
    activeKey
  } = useSelector((state: any) => state.tabBar)

  const onChange = (activeKey: string) => {
    dispatch(changeActiveKey(activeKey))
    navigate(activeKey)
  }

  const onEdit:onEditFunc = (e, action: 'add' | 'remove') => {
    switch(action) {
      case 'add':
        break
      case 'remove':
        dispatch(removeTabItem(e as string))
        break
    }
  }

  return (
    <div>
      <Tabs
        type="editable-card"
        hideAdd
        onChange={ onChange }
        onEdit={ onEdit }
        activeKey={activeKey}
        items={ list }></Tabs>
    </div>
  )
}


export default TabBar