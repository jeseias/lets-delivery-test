import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { Box, Flex, Heading, Image, Tooltip } from '@chakra-ui/react';
import { FavoriteCharacterModel } from '@/domain/models/character';
import { AppRoutes } from '@/main/constants';

type Props = {
  character: FavoriteCharacterModel
  remove: (name: string) => void
}

const FavoriteCharacter: React.FC<Props> = ({ character:{ img, name }, remove}: Props) => {
  const navigate = useNavigate()
  const slug = name.replace(' ', '-')
  const CharacterLink = `${AppRoutes.Characters}/${slug}`
  const handleGoToDetailedPage = () => navigate(CharacterLink, { state: { name } })
  return (
    <Box>
      <Image src={img} h="100%"/>
      <Heading>{name}</Heading>
      <Flex>
        <Tooltip label="Remove from favorite" placement="left">
          <Box onClick={() => remove(name)}>
            <MdFavorite size="4rem"/>
          </Box>
        </Tooltip>
        <Tooltip label="More details" placement="right" >
          <Box onClick={handleGoToDetailedPage} cursor="pointer">
            <MdRemoveRedEye size="4rem" />
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default FavoriteCharacter;