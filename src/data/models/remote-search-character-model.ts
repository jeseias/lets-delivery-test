export type RemoteCharacterModel = {
  _id: string
  name: string
  img: string
  gender: 'male' | 'female'
  psiPowers: {
    description: string
    img: string
    name: string
  }[]
}
