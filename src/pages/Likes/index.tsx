import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'

import Tracks from '../../components/Tracks'
import Layout from '../../components/Layout'

const Likes = () => {
  const tracks = useSelector((state: RootState) => state.like.tracks)

  return (
    <Layout>
      <Tracks type='like' musics={tracks} />
    </Layout>
  )
}

export default Likes
