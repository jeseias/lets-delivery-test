import React from 'react'
import { DetailedCharacterPage } from '@/presentation/pages'
import { makeRemoteLoadCharacterByName } from '../usecases/remote-load-character-by-name'
import { saveCharacterAdapter } from '@/main/adapters/favorites-characters-adapter'

export const MakeDetailedCharacterPage: React.FC = () => {
  return (
    <DetailedCharacterPage loadCharacter={makeRemoteLoadCharacterByName()} saveFavorites={saveCharacterAdapter}/>
  )
}
