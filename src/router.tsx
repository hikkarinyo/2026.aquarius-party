import { createBrowserRouter } from 'react-router-dom'

import MainPage from './pages/MainPage.tsx'
import ProgramPage from './pages/ProgramPage.tsx'
import NotFoundPage from "./pages/NotFoundPage.tsx";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path: '/program',
    element: <ProgramPage/>,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
