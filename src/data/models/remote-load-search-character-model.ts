export type RemoteCharacterModel = {
  _id: string
  name: string
  img: string
  gender: string
  psiPowers: {
    description: string 
    img: string
    name: string
  }[]
}
