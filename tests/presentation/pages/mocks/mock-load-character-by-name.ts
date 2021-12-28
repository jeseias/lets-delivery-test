import { mockRemoteCharacterModel } from '@/../tests/data/mocks/mock-remote-character'
import { Character } from '@/domain/models'
import { LoadCharacterByName } from '@/domain/usecases'

export class LoadCharacterByNameSpy implements LoadCharacterByName {
  async load (name: string): Promise<Character> {
    return mockRemoteCharacterModel()
  }
}
