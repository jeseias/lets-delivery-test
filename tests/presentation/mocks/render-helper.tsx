import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

export const __render = (Component: React.FC) => {
  return render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  )
}
