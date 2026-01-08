import { createSlice, createListenerMiddleware } from '@reduxjs/toolkit'
import type { RootState } from '@store/index'
import { MENU_ACTIVE_NAME } from '@constants/localStorage'

interface InitialState {
  activeName: string
}
const initialState: InitialState = {
  activeName: localStorage.getItem(MENU_ACTIVE_NAME) || 'home'
}


const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeActiveName(state, action) {
      state.activeName = action.payload
    }
  }
})
export const { changeActiveName } = menuSlice.actions

const saveToLocal = (state: InitialState) => {
  localStorage.setItem(MENU_ACTIVE_NAME, state.activeName)
}

export const menuListener = createListenerMiddleware()
menuListener.startListening({
  actionCreator: changeActiveName,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as RootState
    saveToLocal(state.menu)
  }
})

export const menuSelector = (state: RootState) => state.menu


export default menuSlice.reducer