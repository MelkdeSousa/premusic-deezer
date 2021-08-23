import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Track, Tracks } from '../../../@types'

import deezerAPI from '../../../services/deezer.api'

export const searchByTermThunk = createAsyncThunk(
  '@search/searchByTerm',
  async (query: string) => {
    const { data } = await deezerAPI(`search?q=${query}`)
    return data
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [] as Tracks,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: build => {
    build.addCase(searchByTermThunk.pending, (state, _action) => {
      state.loading = true
    })

    build.addCase(searchByTermThunk.fulfilled, (state, action) => {
      console.log(action.payload)
      state.data = action.payload as Track[]
    })
  }
})

export default searchSlice.reducer
