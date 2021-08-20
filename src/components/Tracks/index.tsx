import React, { useEffect, useState } from 'react'
import { Tracks as TypeTracks } from '../../@types'
import deezerAPI from '../../services/deezer.api'

import { Container } from './styles'

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
    <Container>
      <ul>
        {topMusics.map(music => (
          <li key={music.id}>
            <img src={music.artist.picture} alt={music.artist.name} />
            <span>{music.title}</span>
            <span>{music.artist.name}</span>
            <audio src={music.preview}></audio>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Tracks
