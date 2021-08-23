import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Track, Tracks as TypeTracks } from '../../@types'
import { RootState } from '../../store'
import deezerAPI from '../../services/deezer.api'

import Tabs from '../Tabs'

import { Container, Wrapper } from './styles'
import MusicCard from '../MusicCard'

const Tracks = () => {
  const [topMusics, setTopMusics] = useState<TypeTracks>([])

  const { data } = useSelector((state: RootState) => state.search)

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

  const listMusics = (music: Track) => (
    <MusicCard music={music} key={music.id} />
  )

  useEffect(() => {
    loadTopMusics()
  }, [])

  return (
    <Wrapper>
      <Tabs />
      <Container>
        {data.length === 0 ? topMusics.map(listMusics) : data.map(listMusics)}
      </Container>
    </Wrapper>
  )
}

export default Tracks
