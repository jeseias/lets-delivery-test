import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react"
import { SearchCharacter } from '@/domain/usecases/search-character'
import {v4 as uuid} from 'uuid'
import { MdFavorite, MdFemale, MdMale } from 'react-icons/md'
import { LoadCharacterByName } from '@/domain/usecases/load-character-by-name'
import { useParams } from 'react-router-dom'
import { FavoriteCharacterModel } from '@/domain/models/character'

type DetailedCharacterProps = {
  loadCharacter: LoadCharacterByName
  saveFavorites: (character: FavoriteCharacterModel) => void
}

const DetailedCharacter: React.FC<DetailedCharacterProps> = ({ loadCharacter, saveFavorites }: DetailedCharacterProps) => {
  const [character, setCharacter] = useState<SearchCharacter.Model>()
  const characterName = useParams().name.replace('-', ' ')
  const handleLoadCharacter = async () => {
    const httpResponse = await loadCharacter.load(characterName)
    setCharacter(httpResponse)
  }
  useEffect(() => { handleLoadCharacter() }, [])
  if (!character) {
    return <p>Loading...</p>
  }

  const handleAddToFavorites = () => {
    saveFavorites({
      name: characterName,
      img: character.img
    })
  }
  return (
    <Flex p="2rem" my="1rem" alignItems="center">
      <Box mr="2rem" h="100%">
        <Image src={character.img} height="100%" />
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
            <Button mr="1rem" onClick={handleAddToFavorites}>
              <MdFavorite />
            </Button>
          </Tooltip> 
          <Tooltip label={character.gender} placement="right">
            <Box>
              {character.gender === 'male' ? <MdMale size="3rem" /> : <MdFemale size="3rem" />}
            </Box>
          </Tooltip>
        </Flex>
      </Box>
    </Flex>
  )
}

export default DetailedCharacter