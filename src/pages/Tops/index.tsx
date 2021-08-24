import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { Tracks as TypeTracks } from '../../@types'
import { RootState } from '../../store'
import deezerAPI from '../../services/deezer.api'

import Search from '../../components/Search'
import Tracks from '../../components/Tracks'

import { Container, Title, LogoDeezer } from './styles'

const Home = () => {
  const observedRef = useRef<HTMLLIElement>(null)

  const [index, setIndex] = useState(0)
  const [topMusics, setTopMusics] = useState<TypeTracks>([])

  const { data: searchMusics } = useSelector((state: RootState) => state.search)

  const loadTopMusics = async () => {
    try {
      const {
        tracks: { data: musics }
      } = await deezerAPI(`chart?index=${index}&limit=10`)

      setTopMusics(lastMusics => [...lastMusics, ...musics])
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setIndex(currentIndex => currentIndex + 10)
      }
    })

    if (observedRef.current) intersectionObserver.observe(observedRef.current)
    return () => intersectionObserver.disconnect()
  }, [])

  useEffect(() => {
    loadTopMusics()
  }, [index])

  return (
    <Container>
      <Title>Premusic - Deezer</Title>
      <LogoDeezer />
      <Search />
      <Tracks
        type='top'
        musics={
          !searchMusics || searchMusics.length === 0 ? topMusics : searchMusics
        }
        refEnd={observedRef}
      />
    </Container>
  )
}

export default Home
