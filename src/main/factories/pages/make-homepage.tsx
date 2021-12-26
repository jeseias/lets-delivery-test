import Homepage from '@/presentation/pages/homepage'
import React from 'react'
import { makeRemoteSearchCharacter } from '../usecases/remote-search-characters-factory'

export const MakeHomepage: React.FC = () => {
  return (
    <Homepage searchCharacter={makeRemoteSearchCharacter()} />
  )
}
