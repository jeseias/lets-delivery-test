export type Character = {
  name: string
  img: string
  gender: 'male' | 'female'
  psiPowers: {
    description: string 
    img: string
    name: string
  }[]
}

export type FavoriteCharacterModel = {
  name: string 
  img: string
}
