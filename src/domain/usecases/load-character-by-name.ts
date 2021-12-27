import { Character } from '@/domain/models/character'

export interface LoadCharacterByName {
  load(name: string): Promise<Character>
}

export namespace LoadCharacterByName {
  export type Model = Character
}
