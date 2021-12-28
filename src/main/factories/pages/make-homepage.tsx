import React from 'react'
import { HomePage } from '@/presentation/pages'
import { makeRemoteSearchCharacter } from '@/main/factories/usecases'

export const MakeHomePage: React.FC = () => {
  return (
    <HomePage searchCharacter={makeRemoteSearchCharacter()} />
  )
}
