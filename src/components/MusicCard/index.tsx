import React, { useRef, useState, useEffect } from 'react'

import { Track } from '../../@types'

import {
  Container,
  Thumb,
  Artist,
  Title,
  Name,
  Actions,
  LikeButton,
  PlayerPreview,
  ToDeezer,
  LogoDeezer,
  Play,
  Pause
} from './styles'

type MusicCardProps = {
  music: Track
}

const secondsToMinutesAndSeconds = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time - minutes * 60)

  return `${minutes}:${seconds}`
}

const MusicCard = ({ music }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) audioRef.current.play()
    else audioRef.current.pause()
  }, [isPlaying])

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
      {music && (
        <PlayerPreview
          src={music.preview}
          ref={audioRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}
      {
        // eslint-disable-next-line multiline-ternary
        isPlaying ? (
          <Pause onClick={() => setIsPlaying(false)} />
        ) : (
          <Play onClick={() => setIsPlaying(true)} />
        )
      }
      <Actions>
        <LikeButton />
        <ToDeezer href={music.link} target='_blank'>
          <LogoDeezer />
        </ToDeezer>
      </Actions>
    </Container>
  )
}

export default MusicCard
