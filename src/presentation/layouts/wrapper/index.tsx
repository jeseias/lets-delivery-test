import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const Wrapper: React.FC = ({ children }) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default Wrapper
