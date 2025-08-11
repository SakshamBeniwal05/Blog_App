import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login_page, Sign_Up, Home } from './Pages/allpages.tsx'
import { Provider } from 'react-redux'
import Store from './Redux/storage.ts'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login_page />
      },
      {
        path: '/signup',
        element: <Sign_Up />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)
