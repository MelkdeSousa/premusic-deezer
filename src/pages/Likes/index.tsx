import React from 'react'

import Search from '../../components/Search'
import Tracks from '../../components/Tracks'

import { Container, Title, LogoDeezer } from './styles'

const Likes = () => {
  return (
    <Container>
      <Title>Premusic - Deezer</Title>
      <LogoDeezer />
      <Search />
      <Tracks />
    </Container>
  )
}

export default Likes
