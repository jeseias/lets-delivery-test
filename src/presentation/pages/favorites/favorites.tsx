import React, { useEffect, useState } from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'
import { FavoriteCharacterModel } from '@/domain/models/character'
import { FavoriteCharacter } from '@/presentation/components'

type Props = {
  fetch: () => FavoriteCharacterModel[]
  remove: (name: string) => void
}

const FavoritesPage: React.FC<Props> = ({ fetch, remove }: Props) => {
  const [characters, setCharacters] = useState<FavoriteCharacterModel[]>([])
  
  useEffect(() => {
    setCharacters(fetch())
  }, [characters])
  
  return (
    <Box p="5vw">
      <Heading>Favorites Page</Heading>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gap="1rem" gridTemplateRows="repeat(auto, 5rem)">
        {characters.map(character => <FavoriteCharacter character={character} remove={remove}/>)}
      </Grid>
    </Box>
  )
}

export default FavoritesPage