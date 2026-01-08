import { configureStore } from '@reduxjs/toolkit'
import tabBar, { tabBarListener } from './slice/tabBarSlice'

const store = configureStore({
  reducer: {
    tabBar
  },
  middleware: (getDefaultMiddleware) => 

    getDefaultMiddleware().prepend(tabBarListener.middleware)
})


export type RootState = ReturnType<typeof store.getState>

export default store