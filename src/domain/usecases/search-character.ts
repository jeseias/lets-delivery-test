import { Character } from '../models/character'

export interface SearchCharacter {
  search (name: string): Promise<SearchCharacter.Model>
}

export namespace SearchCharacter {
  export type Model = Character
}
