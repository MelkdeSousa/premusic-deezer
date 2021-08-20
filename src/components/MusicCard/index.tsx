import React from 'react'

import { Track } from '../../@types'

import { Container, Thumb, Artist, Title, Name, Like } from './styles'

type MusicCardProps = {
  music: Track
}

const MusicCard = ({ music }: MusicCardProps) => {
  return (
    <Container>
      <Thumb src={music.artist.picture} alt={music.artist.name} />
      <Artist>
        <Title>{music.title}</Title>
        <Name>{music.artist.name}</Name>
      </Artist>
      <Like />
    </Container>
  )
}

export default MusicCard
