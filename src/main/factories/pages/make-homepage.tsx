import React from 'react'
import { HomePage } from '@/presentation/pages'
import { makeRemoteSearchCharacter } from '@/main/factories/usecases/remote-search-characters-factory'

export const MakeHomePage: React.FC = () => {
  return (
    <HomePage searchCharacter={makeRemoteSearchCharacter()} />
  )
}
