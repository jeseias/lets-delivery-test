import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { routes } from './sidebar.data'

const Sidebar:React.FC = () => {
  const navigate = useNavigate()
  return (
    <Box gridColumn="1/2" gridRow="1/-1" borderRight="1px solid #eee">
      <Flex alignItems="center" justifyContent="center" p="3rem 2rem">
        <Heading>Menu</Heading>
      </Flex>
      <Box mt="5rem" p="1rem">
        {routes.map(item => (
          <Box
            key={uuid()}
            onClick={() => navigate(item.route)}
            borderRadius=".2rem"
            fontSize="1.5rem"
            my=".5rem"
            cursor="pointer"
            bg="blackAlpha.100"
            p="1rem 2rem"
            transition="all ease-in-out .25s"
            _hover={{ bg: 'blackAlpha.300' }}
          >
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Sidebar
