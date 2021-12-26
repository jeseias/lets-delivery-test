import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Header:React.FC = () => {
  return (
    <Box gridColumn="2/-1" gridRow="1/2" borderBottom="1px solid #eee">
      <Heading>Psychonauts</Heading>
    </Box>
  )
}

export default Header
