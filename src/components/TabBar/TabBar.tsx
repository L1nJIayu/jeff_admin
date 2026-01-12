import type { FC, ReactNode } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeTabItem,
  changeActiveKey,
  selectTabBar
} from '@store/slice/tabBarSlice'
import { useNavigate } from 'react-router'

import { useAliveController } from 'react-activation'
import './tabbar.scss'

interface TabBarProps {
  children?: ReactNode
}

export type onEditFunc = NonNullable<TabsProps['onEdit']>

const TabBar: FC<TabBarProps> = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { drop } = useAliveController()

  const {
    list,
    activeKey
  } = useSelector(selectTabBar)

  const onChange = (activeKey: string) => {
    dispatch(changeActiveKey(activeKey))
    navigate(activeKey)
  }

  const onEdit:onEditFunc = (e, action: 'add' | 'remove') => {
    switch(action) {
      case 'add':
        break
      case 'remove':
        const pathKey = e as string
        handleRemoveTab(pathKey)
        break
    }
  }

  const handleRemoveTab = (removeKey: string) => {
    if(list.length !== 1) {

      const targetIndex = list.findIndex(item => item.key === removeKey)
      if(targetIndex !== -1) {
  
        const nextActiveKey =
          targetIndex === list.length - 1
            ? list[targetIndex - 1].key
            : list[targetIndex + 1].key
  
        onChange(nextActiveKey)
  
      }
    }

    
    dispatch(removeTabItem(removeKey))
    drop(removeKey)

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