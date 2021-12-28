import { mockRemoteCharacterModel } from '@/../tests/data/mocks/mock-remote-character'
import { SearchCharacter } from '@/domain/usecases'

export class SearchCharacterSpy implements SearchCharacter {
  async search (name: string): Promise<SearchCharacter.Model> {
    return mockRemoteCharacterModel()
  }
}
