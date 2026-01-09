import { createSlice, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import type { RootState } from '@store/index'
import { MENU_ACTIVE_NAME, MENU_OPEN_KEYS } from '@constants/localStorage'

interface InitialState {
  activeName: string
  openKeys: string[]
}
const initialState: InitialState = {
  activeName: localStorage.getItem(MENU_ACTIVE_NAME) || 'home',
  openKeys: JSON.parse(localStorage.getItem(MENU_OPEN_KEYS) || '[]')
}


const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeActiveName(state, action) {
      state.activeName = action.payload
    },
    changeOpenKey(state, action) {
      state.openKeys = action.payload
    }
  }
})
export const {
  changeActiveName,
  changeOpenKey
} = menuSlice.actions

const saveToLocal = (state: InitialState) => {
  localStorage.setItem(MENU_ACTIVE_NAME, state.activeName)
  localStorage.setItem(MENU_OPEN_KEYS, JSON.stringify(state.openKeys))
}

export const menuListener = createListenerMiddleware()
menuListener.startListening({
  matcher: isAnyOf(changeActiveName, changeOpenKey),
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as RootState
    saveToLocal(state.menu)
  }
})

export const menuSelector = (state: RootState) => state.menu


export default menuSlice.reducer