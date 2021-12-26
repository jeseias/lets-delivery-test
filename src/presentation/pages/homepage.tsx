import { Box, Input, Flex } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'
import React from 'react'

const Homepage: React.FC = () => {
  return (
    <Box p="5vw">
      <Flex alignItems="center" h="8rem" border="1px solid #eee">
        <Input placeholder="Search your character here" h="100%" fontSize="4rem" border="none"/>
        <Flex borderLeft="1px solid #eee" alignItems="center" justifyContent="center" w="9rem" cursor="pointer" bg="#eee" h="100%">
          <MdSearch size="7rem" color="#111"/>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Homepage
