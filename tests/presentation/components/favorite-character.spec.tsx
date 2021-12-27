import React from 'react'
import { FavoriteCharacter } from '@/presentation/components'
import { mockRemoteCharacterModel } from '../../data/mocks/mock-remote-character';
import { __render } from '../mocks/test-utils';
import { screen, fireEvent } from '@testing-library/react'
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/main/constants';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: jest.fn().mockReturnValue(jest.fn())
}))

const remove =jest.fn()
const character = mockRemoteCharacterModel()
const makeSut = () => __render(() => <FavoriteCharacter  character={character} remove={remove} />)
 
describe(`${FavoriteCharacter.name} Component`, () => {
  it('Should render as expected', () => {
    makeSut()
    
    expect(screen.getByText(character.name)).toBeInTheDocument()
    expect(screen.getByAltText(character.name)).toBeInTheDocument()
    expect(screen.getByLabelText('click to remove from favorites')).toBeInTheDocument()
    expect(screen.getByLabelText('click to see more')).toBeInTheDocument()
  }) 

  it('Should route to DetailedCharacter page when see more button is clicked', () => { 
    makeSut();
    const slug = character.name.replace(' ', '-')
    const CharacterLink = `${AppRoutes.Characters}/${slug}` 
    const btn = screen.getByLabelText('click to see more')
    fireEvent.click(btn) 
    expect(useNavigate()).toHaveBeenCalledWith(CharacterLink, { state: {name: character.name} })
  })
});