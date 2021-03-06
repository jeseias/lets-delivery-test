import React from 'react'
import { SearchCharacter } from '@/domain/usecases/search-character'
import { HomePage } from '@/presentation/pages'
import { fireEvent, RenderResult, screen, waitFor } from '@testing-library/react'
import { mockRemoteCharacterModel } from '../../data/mocks/mock-remote-character'
import { __render } from '../mocks/render-helper'
import { SearchCharacterSpy } from './mocks/mock-search-character'

type SutTypes = {
  sut: () => RenderResult
  searchCharacter: SearchCharacter
}

const data = mockRemoteCharacterModel()
const makeSut = (): SutTypes => {
  const searchCharacter = new SearchCharacterSpy()
  const sut = () => __render(() => <HomePage searchCharacter={searchCharacter} />)
  return {
    sut,
    searchCharacter
  }
}

describe('Homepage Component', () => {
  it('Should render as expected', () => {
    const { sut, searchCharacter } = makeSut()
    jest.spyOn(searchCharacter, 'search').mockReturnValueOnce(data as any)
    sut()
    expect(screen.getByPlaceholderText('Search your character here')).toBeInTheDocument()
    expect(screen.getByLabelText('click to search')).toBeInTheDocument()
  })

  it('Should show loader when search button is clicked and remove afterwards', async () => {
    makeSut().sut()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('click to search'))
    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument())
  })

  it('Should remove loader and show error if no character was found', async () => {
    const { sut, searchCharacter } = makeSut()
    jest.spyOn(searchCharacter, 'search').mockReturnValueOnce(null as any)
    sut()
    expect(screen.queryByText('Character Not Found')).not.toBeInTheDocument()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('click to search'))
    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument())
    expect(screen.getByText('Character Not Found')).toBeInTheDocument()
  })

  it('Should render character data as expected', async () => {
    const { sut, searchCharacter } = makeSut()
    jest.spyOn(searchCharacter, 'search').mockReturnValueOnce(data as any)
    sut()
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('click to search'))
    await waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument())

    expect(screen.getByText(data.name)).toBeInTheDocument()
  })
})
