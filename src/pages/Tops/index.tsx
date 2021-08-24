import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Tracks as TypeTracks } from '../../@types'
import { RootState } from '../../store'
import deezerAPI from '../../services/deezer.api'

import Search from '../../components/Search'
import Tracks from '../../components/Tracks'

import { Container, Title, LogoDeezer } from './styles'
import { searchByTermThunk } from '../../store/ducks/Search'

const Home = () => {
  const dispatch = useDispatch()
  const observedRef = useRef<HTMLLIElement>(null)

  const [indexTop, setIndexTop] = useState(0)
  const [indexSearch, setIndexSearch] = useState(0)
  const [topMusics, setTopMusics] = useState<TypeTracks>([])

  const { data: searchMusics, query } = useSelector(
    (state: RootState) => state.search
  )

  const loadTopMusics = async () => {
    try {
      const {
        tracks: { data: musics }
      } = await deezerAPI(`chart?index=${indexTop}&limit=10`)

      setTopMusics(lastMusics => [...lastMusics, ...musics])
    } catch (err) {
      alert(err)
    }
  }

  const loadSearchMusics = () => {
    dispatch(searchByTermThunk({ query, index: indexSearch }))
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        if (!searchMusics || searchMusics.length === 0 || !query) {
          setIndexTop(currentIndex => currentIndex + 10)
        }
        setIndexSearch(currentIndex => currentIndex + 10)
      }
    })

    if (observedRef.current) intersectionObserver.observe(observedRef.current)
    return () => intersectionObserver.disconnect()
  }, [])

  useEffect(() => {
    loadTopMusics()
  }, [indexTop])

  useEffect(() => {
    if (query) loadSearchMusics()
  }, [indexSearch])

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
