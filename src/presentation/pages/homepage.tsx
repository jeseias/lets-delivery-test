import { Box, Input, Flex } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'
import React, { useState } from 'react'

const Homepage: React.FC = () => {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  async function searchCharacter() {
    setLoading(true)
  }

  return (
    <Box p="5vw">
      <Flex alignItems="center" h="8rem" border="1px solid #eee">
        <Input 
          placeholder="Search your character here" 
          h="100%" 
          fontSize="4rem" 
          border="none" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <Flex 
          borderLeft="1px solid #eee"   
          alignItems="center" 
          justifyContent="center" 
          w="9rem" 
          cursor="pointer" 
          bg="#eee" 
          h="100%" 
          onClick={searchCharacter}
        >
          <MdSearch size="7rem" color="#111"/>
        </Flex>
      </Flex>
      <Box>
        {loading && <h1>Loading...</h1>}
      </Box>

    </Box>
  )
}

export default Homepage
