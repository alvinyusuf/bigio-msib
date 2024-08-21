import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddStory from './pages/AddStory.jsx'
import Home from './pages/Home.jsx'
import AddChapter from './pages/AddChapter.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add-story',
    element: <AddStory />
  },
  {
    path: '/add-chapter',
    element: <AddChapter />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
