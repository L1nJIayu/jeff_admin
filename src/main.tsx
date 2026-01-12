import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'

import 'virtual:uno.css'
import './style/common.scss'
import '@ant-design/v5-patch-for-react-19';
import { RouterProvider } from 'react-router'
import router from './router/index.ts'

import store from '@store/index.ts'
import { Provider } from 'react-redux'
import { AliveScope } from 'react-activation'
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <AliveScope>
      <RouterProvider router={router} />
    </AliveScope>
  </Provider>
  // </StrictMode>
)
