import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { MakeHomepage } from '@/main/factories/pages/make-homepage'
import { Wrapper } from '@/presentation/layouts'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<MakeHomepage />}/>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default Router
