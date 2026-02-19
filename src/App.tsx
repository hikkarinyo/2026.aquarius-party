import { HashRouter, Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ProgramPage from './pages/ProgramPage.tsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}
