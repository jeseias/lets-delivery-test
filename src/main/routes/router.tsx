import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { MakeHomepage } from '@/factories/pages/make-homepage'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeHomepage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
