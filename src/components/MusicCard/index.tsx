import React from 'react'

import { Track } from '../../@types'

import { Container, Thumb, Artist, Title, Name, LikeButton } from './styles'

type MusicCardProps = {
  music: Track
}

const secondsToMinutesAndSeconds = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time - minutes * 60)

  return `${minutes}:${seconds}`
}

const MusicCard = ({ music }: MusicCardProps) => {
  return (
    <Container>
      <Thumb src={music.artist.picture} alt={music.artist.name} />
      <Artist>
        <Title>
          {music.title}
          <Name>
            {'\t|\t'}
            {secondsToMinutesAndSeconds(music.duration)}
          </Name>
        </Title>

        <Name>{music.artist.name}</Name>
      </Artist>
      <LikeButton />
    </Container>
  )
}

export default MusicCard
