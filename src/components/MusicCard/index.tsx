import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Track } from '../../@types'
import { removeTrack, addTrack } from '../../store/ducks/Like'

import heart from '../../assets/icons/heart.svg'
import heartOutlined from '../../assets/icons/heart-outlined.svg'

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
import { RootState } from '../../store'

type MusicCardProps = {
  music: Track
  type: string
}

const secondsToMinutesAndSeconds = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time - minutes * 60)

  return `${minutes}:${seconds}`
}

const MusicCard = ({ music, type }: MusicCardProps) => {
  const dispatch = useDispatch()
  const tracks = useSelector((state: RootState) => state.like.tracks)

  console.log()

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
      {isPlaying ? (
        <Pause onClick={() => setIsPlaying(false)} />
      ) : (
        <Play onClick={() => setIsPlaying(true)} />
      )}
      <Actions>
        <LikeButton
          src={
            type === 'like' || tracks.some(track => track.id === music.id)
              ? heart
              : heartOutlined
          }
          onClick={
            type === 'like' || tracks.some(track => track.id === music.id)
              ? () => dispatch(removeTrack(music))
              : () => dispatch(addTrack(music))
          }
        />
        <ToDeezer href={music.link} target='_blank'>
          <LogoDeezer />
        </ToDeezer>
      </Actions>
    </Container>
  )
}

export default MusicCard
