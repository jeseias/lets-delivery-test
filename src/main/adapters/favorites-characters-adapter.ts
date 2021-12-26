import { FavoriteCharacterModel } from "@/domain/models/character"
import { makeLocalStorageAdapter } from "@/main/factories/cache/local-storage-adapter"

export const saveCharacterAdapter = (character: FavoriteCharacterModel): void => {
  let characters = getCharacterAdapter()
  if (characters) {
    characters.push(character)
    return makeLocalStorageAdapter().set('characters', characters)
  } 
  makeLocalStorageAdapter().set('characters', new Array(character))
}

export const removeCharacterAdapter = (name: string): void => {
  makeLocalStorageAdapter()
    .set(
      'characters', 
      getCharacterAdapter().filter(item => item.name !== name)
    )
}

export const getCharacterAdapter = (): FavoriteCharacterModel[] => {
  return makeLocalStorageAdapter().get('characters')
}