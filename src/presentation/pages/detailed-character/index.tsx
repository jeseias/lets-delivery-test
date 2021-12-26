import React, { useState } from 'react'
import { Box, Button, Divider, Flex, Heading, Image, Tooltip } from "@chakra-ui/react"
import { SearchCharacter } from '@/domain/usecases/search-character'
import {v4 as uuid} from 'uuid'
import { MdFavorite } from 'react-icons/md'

const DetailedCharacter: React.FC = () => {
  const [character, setCharacter] = useState<SearchCharacter.Model>()
  const { name, img, gender, psiPowers } = character
  if (!character) {
    return <p>Loading...</p>
  }
  return (
    <Flex p="2rem" my="1rem" alignItems="center">
      <Box h="15rem" mr="2rem">
        <Image src={img} height="100%" />
      </Box>
      <Box>
        <Heading fontSize="5xl" textTransform="uppercase">{name}</Heading>
        <Divider mb="1rem"/>
        <Box>
          <Heading as="h3"fontSize="2xl">Powers</Heading>
          {
            psiPowers.map(power => (
              <Box key={uuid()}>
                <Heading as="h3"fontSize="2xl" fontWeight="normal">{power.name}</Heading>
              </Box>
            ))
          }
        </Box>
        <Flex mt="1rem">
          <Tooltip label="Add to favorites" placement="left">
            <Button mr="1rem">
              <MdFavorite />
            </Button>
          </Tooltip> 
        </Flex>
      </Box>
    </Flex>
  )
}

export default DetailedCharacter