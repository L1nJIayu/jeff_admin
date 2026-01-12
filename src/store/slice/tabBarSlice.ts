import { createSlice, type PayloadAction, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import type { TabsProps } from 'antd'
import type { RootState } from '@store/index'
import { TAB_LIST, TAB_ACTIVE_KEY } from '@constants/localStorage'

export type TabItem = NonNullable<TabsProps['items']>[number]

interface TabBarState {
  activeKey: string
  list: TabItem[]
}
const initialState: TabBarState = {
  activeKey: localStorage.getItem(TAB_ACTIVE_KEY) || '',
  list: initialList()
}
function initialList():TabItem[] {
  try {
    return JSON.parse(localStorage.getItem(TAB_LIST) || '[]')
  } catch {
    return []
  }
}


export const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    addTabItem: (state, action: PayloadAction<TabItem>) => {
      const newTabItem = action.payload

      const existTabItem = state.list.find(item => item.key === newTabItem.key)

      if(!existTabItem) {
        state.list.push({
          ...newTabItem,
          closable: true
        })
      }

      state.activeKey = newTabItem.key

    },
    removeTabItem: (state, action: PayloadAction<string>) => {
      const keyToRemove = action.payload
      const targetIndex = state.list.findIndex(item => item.key === keyToRemove)
      state.list.splice(targetIndex, 1)
    },
    changeActiveKey: (state, action: PayloadAction<string>) => {
      if (state.activeKey === action.payload) return
      state.activeKey = action.payload
    }
  }
})

const saveToLocal = (state: TabBarState) => {
  const { list, activeKey } = state
  localStorage.setItem(TAB_LIST, JSON.stringify(list))
  localStorage.setItem(TAB_ACTIVE_KEY, activeKey)
}

export const {
  addTabItem,
  removeTabItem,
  changeActiveKey
} = tabBarSlice.actions



export const tabBarListener = createListenerMiddleware()
tabBarListener.startListening({
  matcher: isAnyOf(addTabItem, removeTabItem, changeActiveKey),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState() as RootState
    saveToLocal(state.tabBar)
  }
})


export const selectTabBar = (state: RootState) => state.tabBar

export default tabBarSlice.reducer