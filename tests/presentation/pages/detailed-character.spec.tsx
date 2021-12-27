import React from 'react'
import { Character } from '@/domain/models/character'
import { LoadCharacterByName } from '@/domain/usecases/load-character-by-name'
import { DetailedCharacterPage } from '@/presentation/pages'
import { __render } from '../mocks/render-helper'
import { fireEvent, RenderResult, screen, waitFor } from '@testing-library/react'
import { mockCharacterModel } from '../../domain/mocks/mock-character'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useParams: jest.fn().mockReturnValue({ name: 'james-bond' })
}))

const data = mockCharacterModel()
type SutTypes = {
  sut: () => RenderResult
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
  const sut = () => __render(() =>
    <DetailedCharacterPage
      loadCharacter={loadCharacter}
      saveFavorites={saveFavorites}
    />
  )

  return {
    sut,
    saveFavorites,
    loadCharacter
  }
}

describe(`${DetailedCharacterPage.name} Page`, () => {
  it('Should render as expected with all character data', async () => {
    makeSut().sut()

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())

    expect(screen.getByAltText(data.name)).toBeInTheDocument()
    expect(screen.getByText(data.name)).toBeInTheDocument()
    expect(screen.getByText('Powers')).toBeInTheDocument()
    expect(screen.getByLabelText(data.gender)).toBeInTheDocument()
  })

  it.each(data.psiPowers)('Should render each character power', async item => {
    makeSut().sut()

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())

    expect(screen.getByText(item.name)).toBeInTheDocument()
    expect(screen.getByText(item.description)).toBeInTheDocument()
  })

  it('Should call saveFavorites with call correct values', async () => {
    const { saveFavorites, sut } = makeSut()
    sut()

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())

    fireEvent.click(screen.getByLabelText('add to favorites'))
    expect(saveFavorites).toHaveBeenCalledWith({
      name: 'james bond',
      img: data.img
    })
  })

  it('Should render NotFound if LoadCharacterByName returns 404', async () => {
    const { loadCharacter, sut } = makeSut()
    jest.spyOn(loadCharacter, 'load').mockReturnValueOnce(null)
    sut()

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('No Character found')).toBeInTheDocument())
  })
})
