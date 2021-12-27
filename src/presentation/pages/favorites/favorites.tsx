import React, { useEffect, useState } from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'
import { FavoriteCharacterModel } from '@/domain/models/character'
import { FavoriteCharacter } from '@/presentation/components'
import { v4 as uuid } from 'uuid'

type Props = {
  fetch: () => FavoriteCharacterModel[]
  remove: (name: string) => void
}

const FavoritesPage: React.FC<Props> = ({ fetch, remove }: Props) => {
  const [characters, setCharacters] = useState<FavoriteCharacterModel[]>([])

  useEffect(() => {
    setCharacters(fetch())
  }, [])

  const handleRemove = (name: string) => {
    remove(name)
    setCharacters(fetch())
  }

  return (
    <Box p="5vw">
      <Heading>Favorites Page</Heading>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gap="1rem" gridTemplateRows="repeat(auto, 5rem)">
        {characters
          ? (
              characters.map(character => <FavoriteCharacter key={uuid()} character={character} remove={handleRemove} />)
            )
          : <p>Found 0 favorites</p>}
      </Grid>
    </Box>
  )
}

export default FavoritesPage
