import React, { useState } from 'react'
import { Box, Input, Flex } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'
import { SearchCharacter } from '@/domain/usecases/search-character'
import { Character } from '@/presentation/components'

type Props = {
  searchCharacter: SearchCharacter
}

const Homepage: React.FC<Props> = ({ searchCharacter }: Props) => {
  const [name, setName] = useState('')
  const [character, setCharacter] = useState<SearchCharacter.Model>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const showError = () => {
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 5000)
  }

  const handleSearchCharacter = async () => {
    setLoading(true)
    const response = await searchCharacter.search(name)
    if (response) {
      setCharacter(response)
    } else {
      showError()
    }
    setLoading(false)
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
          onClick={handleSearchCharacter}
          aria-label="click to search"
        >
          <MdSearch size="7rem" color="#111"/>
        </Flex>
      </Flex>
      <Box>
        {loading && <p>Loading...</p>}
        {!loading && error && <h1>Character Not Found</h1>}
        {character && <Character {...character} />}
      </Box>
    </Box>
  )
}

export default Homepage
