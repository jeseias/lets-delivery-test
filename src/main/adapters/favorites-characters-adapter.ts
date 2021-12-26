import { FavoriteCharacterModel } from "@/domain/models/character"
import { makeLocalStorageAdapter } from "@/main/factories/cache/local-storage-adapter"

export const saveCharacterAdapter = (character: FavoriteCharacterModel): void => {
  let characters = getCharacterAdapter()
  if (characters) {
    characters.push(character)
    return makeLocalStorageAdapter().set('characters', characters)
  } 
  characters = new Array(character)
  console.log(characters)
  makeLocalStorageAdapter().set('characters', characters)
}

export const getCharacterAdapter = (): FavoriteCharacterModel[] => {
  return makeLocalStorageAdapter().get('characters')
}