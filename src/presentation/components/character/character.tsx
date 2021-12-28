import React from 'react'
import { Box, Button, Divider, Flex, Heading, Image, Tooltip } from '@chakra-ui/react'
import { MdRemoveRedEye } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { SearchCharacter } from '@/domain/usecases/search-character'
import { makeDetailedRoute } from '@/presentation/utils/utils'

const Character: React.FC<SearchCharacter.Model> = ({ name, img, psiPowers }) => {
  const navigate = useNavigate()
  const handleGoToDetailedPage = () => navigate(makeDetailedRoute(name), { state: { name } })
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
          <Tooltip label="More details" placement="right">
            <Button onClick={handleGoToDetailedPage} aria-label="click to see more">
              <MdRemoveRedEye />
            </Button>
          </Tooltip>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Character
