import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Track, Tracks } from '../../../@types'

const saveInLocalStorage = (field: string, data: any) => {
  localStorage.setItem(field, JSON.stringify(data))
}

export const likeSlice = createSlice({
  name: 'like',
  initialState: {
    tracks: JSON.parse(
      localStorage.getItem('@premusic/tracks') || '[]'
    ) as Tracks
  },
  reducers: {
    addTrack: (state, action) => {
      const [musicLiked] = state.tracks.filter(
        music => music.id === action.payload.id
      )

      if (!musicLiked) {
        state.tracks.push(action.payload)

        saveInLocalStorage('@premusic/tracks', state.tracks)
      }
    },
    removeTrack: (state, action: PayloadAction<Track>) => {
      const musicLiked = state.tracks.filter(
        music => music.id !== action.payload.id
      )

      state.tracks = [...musicLiked]
      saveInLocalStorage('@premusic/tracks', state.tracks)
    }
  }
})

export const { removeTrack, addTrack } = likeSlice.actions

export default likeSlice.reducer
