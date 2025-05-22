import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'

import 'virtual:uno.css'
import './style/common.scss'
import '@ant-design/v5-patch-for-react-19';
import App from './App.tsx'
import { RouterProvider } from 'react-router'
import router from './router/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
