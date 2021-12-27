import React from 'react'
import { Character } from '@/presentation/components'
import { mockRemoteCharacterModel } from '../../data/mocks/mock-remote-character';
import { __render } from '../mocks/test-utils';
import { screen, fireEvent } from '@testing-library/react'
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/main/constants';

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
});