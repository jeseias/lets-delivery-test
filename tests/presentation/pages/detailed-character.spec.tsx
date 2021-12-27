import React from 'react'
import { Character } from '@/domain/models/character'
import { LoadCharacterByName } from '@/domain/usecases/load-character-by-name'
import { DetailedCharacterPage } from '@/presentation/pages'
import { __render } from '../mocks/render-helper'
import { screen, waitFor } from '@testing-library/react'
import { mockCharacterModel } from '../../domain/mocks/mock-character'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useParams: jest.fn().mockReturnValue({ name: 'james bond' })
}))

const data = mockCharacterModel()
type SutTypes = {
  saveFavorites: jest.Mock<any, any>
  loadCharacter: LoadCharacterByName
}
const makeSut = (): SutTypes => {
  class LoadCharacterByNameSpy implements LoadCharacterByName {
    async load (name: string): Promise<Character> {
      return data
    }
  }
  const saveFavorites = jest.fn()
  const loadCharacter = new LoadCharacterByNameSpy()
  __render(() =>
    <DetailedCharacterPage
      loadCharacter={loadCharacter}
      saveFavorites={saveFavorites}
    />
  )

  return {
    saveFavorites,
    loadCharacter
  }
}

describe(`${DetailedCharacterPage.name} Page`, () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should render as expected with all character data', async () => {
    makeSut()
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())

    await waitFor(() => expect(screen.getByAltText(data.name)).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText(data.name)).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('Powers')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByLabelText(data.gender)).toBeInTheDocument())
  })

  it.each(data.psiPowers)('Should render each character power', async item => {
    makeSut()

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())

    await waitFor(() => expect(screen.getByText(item.name)).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText(item.description)).toBeInTheDocument())
  })
})
