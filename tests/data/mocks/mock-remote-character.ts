import { RemoteCharacterModel } from '@/data/models/remote-search-character-model'

import * as faker from 'faker'

export const mockCharacterModel = (): RemoteCharacterModel => ({
  _id: faker.datatype.uuid(),
  name: faker.name.gender(),
  gender: faker.name.gender() as any,
  img: faker.image.image(),
  psiPowers: [
    {
      name: faker.name.title(),
      description: faker.name.jobDescriptor(),
      img: faker.image.abstract()
    }
  ]
})