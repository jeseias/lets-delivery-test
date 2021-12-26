import React from 'react'
import { Box, ChakraProvider, Grid } from '@chakra-ui/react'
import { theme } from '@/presentation/styles/global-styles'
import { Header, Sidebar } from '@/presentation/layouts'

const Wrapper: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Grid gridTemplateColumns="28rem 1fr" gridTemplateRows="8rem 1fr" h="100vh" w="100vw">
        <Header />
        <Sidebar />
        <Box gridColumn="2/-1" gridRow="2/-1">
          {children}
        </Box>
      </Grid>
    </ChakraProvider>
  )
}

export default Wrapper
