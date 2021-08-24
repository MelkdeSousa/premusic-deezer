import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'

import Search from '../../components/Search'
import Tracks from '../../components/Tracks'

import { Container, Title, LogoDeezer } from './styles'

const Likes = () => {
  const tracks = useSelector((state: RootState) => state.like.tracks)

  return (
    <Container>
      <Title>Premusic - Deezer</Title>
      <LogoDeezer />
      <Search />
      <Tracks type='like' musics={tracks} />
    </Container>
  )
}

export default Likes
