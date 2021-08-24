import React from 'react'

import { Track, Tracks as TypeTracks } from '../../@types'

import Tabs from '../Tabs'

import { Container, Error, Wrapper } from './styles'
import MusicCard from '../MusicCard'

type TracksProps = {
  musics: TypeTracks
  type: string
  refEnd?: React.Ref<HTMLLIElement> | undefined
}

const Tracks = ({ musics, type, refEnd }: TracksProps) => {
  const renderMusics = (music: Track) => (
    <MusicCard type={type} music={music} key={music.id} />
  )

  return (
    <Wrapper>
      <Tabs />
      <Container>
        {musics.length ? (
          musics.map(renderMusics)
        ) : (
          <Error>
            Você não favoritou nenhuma música <br />
            😣{' '}
          </Error>
        )}
        <li ref={refEnd} />
      </Container>
    </Wrapper>
  )
}

export default Tracks
