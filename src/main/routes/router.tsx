import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import { MakeHomePage, MakeDetailedCharacterPage } from '@/main/factories/pages'
import { Wrapper } from '@/presentation/components'
import { AppRoutes } from '@/main/constants'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path={AppRoutes.Home}  element={<MakeHomePage />}/>
          <Route path={AppRoutes.Detailed} element={<MakeHomePage />}>
            <Route path=":characterName" element={<MakeDetailedCharacterPage />} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default Router
