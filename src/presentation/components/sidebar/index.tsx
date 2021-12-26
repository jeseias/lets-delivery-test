import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const routes = [
  {
    name: 'Search',
    route: '/'
  },
  {
    name: 'Favorites',
    route: '/favorites'
  }
]

const Sidebar:React.FC = () => {
  const navigate = useNavigate()
  return (
    <Box gridColumn="1/2" gridRow="1/-1" borderRight="1px solid #eee">
      <Heading>Sidebar</Heading>
      <Box mt="5rem" p="1rem">
        {routes.map(item => (
          <Box key={uuid()} onClick={() => navigate(item.route)} borderRadius=".2rem" fontSize="1.5rem" my=".5rem">
              {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Sidebar
