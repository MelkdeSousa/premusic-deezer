import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Tracks as TypeTracks } from '../../@types'
import { RootState } from '../../store'
import deezerAPI from '../../services/deezer.api'

import Search from '../../components/Search'
import Tracks from '../../components/Tracks'

import { Container, Title, LogoDeezer } from './styles'

const Home = () => {
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

  useEffect(() => {
    loadTopMusics()
  }, [])

  return (
    <Container>
      <Title>Premusic - Deezer</Title>
      <LogoDeezer />
      <Search />
      <Tracks type='top' musics={data.length === 0 ? topMusics : data} />
    </Container>
  )
}

export default Home
