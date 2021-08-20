import React from 'react'

import Search from '../../components/Search'
import Tracks from '../../components/Tracks'

import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <h1>Premusic</h1>
      <h1>Deezer</h1>

      <Search />
      <Tracks />
    </Container>
  )
}

export default Home
