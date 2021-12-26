import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { MakeHomepage } from '@/main/factories/pages/make-homepage'
import { Wrapper } from '@/presentation/layouts'

const Router: React.FC = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MakeHomepage />}/>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default Router
