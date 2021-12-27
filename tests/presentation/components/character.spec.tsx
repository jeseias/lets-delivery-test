import React from 'react'
import { Character } from '@/presentation/components'
import { mockRemoteCharacterModel } from '../../data/mocks/mock-remote-character'
import { __render } from '../mocks/render-helper'
import { screen, fireEvent } from '@testing-library/react'
import { useNavigate } from 'react-router-dom'
import { makeDetailedRoute } from '@/presentation/utils/utils'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: jest.fn().mockReturnValue(jest.fn())
}))

const character = mockRemoteCharacterModel()
const makeSut = () => __render(() => <Character {...character} />)

describe(`${Character.name} Component`, () => {
  it('Should render as expected', () => {
    makeSut()

    expect(screen.getByText(character.name)).toBeInTheDocument()
    expect(screen.getByText('Powers')).toBeInTheDocument()
    character.psiPowers.forEach(item => expect(screen.getByText(item.name)).toBeInTheDocument())
    expect(screen.getByLabelText('click to see more')).toBeInTheDocument()
  })

  it('Should route to DetailedCharacter page when see more button is clicked', () => {
    makeSut()
    const detailedRoute = makeDetailedRoute(character.name)
    const btn = screen.getByLabelText('click to see more')
    fireEvent.click(btn)
    expect(useNavigate()).toHaveBeenCalledWith(detailedRoute, { state: { name: character.name } })
  })
})
