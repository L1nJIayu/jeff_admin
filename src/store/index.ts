import { configureStore } from '@reduxjs/toolkit'
import tabBar, { tabBarListener } from './slice/tabBarSlice'
import menu, { menuListener } from './slice/menuSlice'

const store = configureStore({
  reducer: {
    menu,
    tabBar
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().prepend(
    tabBarListener.middleware,
    menuListener.middleware
  )
})


export type RootState = ReturnType<typeof store.getState>

export default store