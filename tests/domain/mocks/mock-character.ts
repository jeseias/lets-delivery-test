import { Character } from '@/domain/models/character'

import * as faker from 'faker'

export const mockCharacterModel = (): Character => ({
  name: faker.name.gender(),
  gender: faker.random.arrayElement(['male', 'female']) as any,
  img: faker.image.image(),
  psiPowers: [
    {
      name: faker.name.title(),
      description: faker.name.jobDescriptor(),
      img: faker.image.abstract()
    }
  ]
})
