import React from 'react'
import { FavoritesPage } from '@/presentation/pages'
import { getCharacterAdapter, removeCharacterAdapter } from '@/main/adapters/favorites-characters-adapter'

export const MakeFavoritesPage: React.FC = () => {
  return (
    <FavoritesPage fetch={getCharacterAdapter} remove={removeCharacterAdapter}/>
  )
}
