import React, { useEffect, useState } from 'react'

import { Tracks as TypeTracks } from '../../@types'

import deezerAPI from '../../services/deezer.api'
import MusicCard from '../MusicCard'
import Tabs from '../Tabs'

import { Container, Wrapper } from './styles'

const Tracks = () => {
  const [topMusics, setTopMusics] = useState<TypeTracks>([])

  const loadTopMusics = async () => {
    try {
      const {
        tracks: { data: musics }
      } = await deezerAPI('chart')

      setTopMusics(musics)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    loadTopMusics()
  }, [])

  return (
    <Wrapper>
      <Tabs />
      <Container>
        {topMusics.map(music => (
          <MusicCard music={music} key={music.id} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default Tracks
