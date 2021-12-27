import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Header:React.FC = () => {
  return (
    <Flex gridColumn="2/-1" gridRow="1/2" borderBottom="1px solid #eee" alignItems="center" p="2rem 4rem">
      <Heading>Psychonauts</Heading>
    </Flex>
  )
}

export default Header
