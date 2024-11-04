import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// REDUX-TOOLKIT
import { Provider } from 'react-redux'
import store from './store/store.js'

// REACT-ROUTER-DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// PAGES
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>ERROR</h1>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      }
    ]
  }
])

// 3. PROVIDE STORE
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
