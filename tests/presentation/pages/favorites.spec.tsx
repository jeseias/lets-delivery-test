import React from 'react'
import { RenderResult, screen } from '@testing-library/react'
import { FavoritesPage } from '@/presentation/pages'
import { __render } from '../mocks/render-helper'
import { FavoriteCharacterModel } from '@/domain/models/character'
import * as faker from 'faker'

const makeFavoriteCharacterModel = (): FavoriteCharacterModel => ({
  img: faker.image.avatar(),
  name: faker.name.findName()
})

type SutTypes = {
  sut: () => RenderResult
  fetch: jest.Mock<any, any>
}

const data = makeFavoriteCharacterModel()
const makeSut = (): SutTypes => {
  const remove = jest.fn()
  const fetch = jest.fn().mockReturnValue([data])
  const sut = () => __render(() => <FavoritesPage fetch={fetch} remove={remove} />)
  return {
    sut,
    fetch
  }
}

describe('Favorites Page', () => {
  it('Should let user no that they are no favorites', () => {
    const { sut, fetch } = makeSut()
    fetch.mockImplementationOnce(() => null)
    sut()
    expect(screen.getByText('Found 0 favorites')).toBeInTheDocument()
  })

  it('Should render all favorites', () => {
    makeSut().sut()
    expect(screen.queryByText('Found 0 favorites')).not.toBeInTheDocument()

    expect(screen.getByText(data.name)).toBeInTheDocument()
    expect(screen.getByText('Favorites Page')).toBeInTheDocument()
    expect(screen.getByLabelText('character image')).toBeInTheDocument()
  })
})
