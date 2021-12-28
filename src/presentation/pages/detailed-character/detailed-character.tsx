import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react'
import { MdFavorite, MdFemale, MdMale } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { SearchCharacter } from '@/domain/usecases/search-character'
import { LoadCharacterByName } from '@/domain/usecases/load-character-by-name'
import { FavoriteCharacterModel } from '@/domain/models/character'
import { parseSlug } from '@/presentation/utils/utils'

type Props = {
  loadCharacter: LoadCharacterByName
  saveFavorites: (character: FavoriteCharacterModel) => void
}

const DetailedCharacter: React.FC<Props> = ({ loadCharacter, saveFavorites }: Props) => {
  const [character, setCharacter] = useState<SearchCharacter.Model>()
  const [characterName, setCharacterName] = useState('')
  const [loading, setLoading] = useState(false)
  const name = useParams().name as string

  const handleLoadCharacter = async () => {
    setLoading(true)
    const httpResponse = await loadCharacter.load(characterName)
    if (httpResponse) {
      setCharacter(httpResponse)
    }
    setLoading(false)
  }
  useEffect(() => {
    setCharacterName(parseSlug(name))
    handleLoadCharacter()
  }, [name])

  const handleAddToFavorites = () => {
    character && saveFavorites({
      name: characterName,
      img: character.img
    })
  }

  if (loading) return <p>Loading...</p>

  if (!character) return <p>No Character found</p>

  return (
    <Flex p="2rem" my="1rem" alignItems="center">
      <Box mr="2rem" h="100%">
        <Image src={character.img} height="100%" alt={character.name} />
      </Box>
      <Box>
        <Heading fontSize="6xl" textTransform="uppercase">{character.name}</Heading>
        <Divider mb="1rem"/>
        <Box>
          <Heading as="h2"fontSize="4xl">Powers</Heading>
          {
            character.psiPowers.map(power => (
              <Flex key={uuid()} ml="1rem" alignItems="center">
                <Image src={power.img} h="5rem" />
                <Box ml="1rem">
                  <Heading as="h4"fontSize="3xl">{power.name}</Heading>
                  <Text>{power.description}</Text>
                </Box>
              </Flex>
            ))
          }
        </Box>
        <Divider my="1rem"/>
        <Flex mt="1rem" justifyContent="space-between">
          <Tooltip label="Add to favorites" placement="left">
            <Button mr="1rem" onClick={handleAddToFavorites} aria-label="add to favorites">
              <MdFavorite />
            </Button>
          </Tooltip>
          <Tooltip label={character.gender} placement="right">
            <Box>
              {character.gender === 'male' ? <MdMale size="3rem" aria-label="male" /> : <MdFemale size="3rem" aria-label="female" />}
            </Box>
          </Tooltip>
        </Flex>
      </Box>
    </Flex>
  )
}

export default DetailedCharacter
