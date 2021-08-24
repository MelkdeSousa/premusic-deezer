import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Track, Tracks } from '../../../@types'

import deezerAPI from '../../../services/deezer.api'

type SearchByTermThunk = {
  query: string
  index?: number
  limit?: number
}

export const searchByTermThunk = createAsyncThunk(
  '@search/searchByTerm',
  async ({ query, index = 0, limit = 10 }: SearchByTermThunk) => {
    const { data } = await deezerAPI(
      `search?q=${query}&index=${index}&limit=${limit}`
    )
    return data
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [] as Tracks,
    loading: false,
    query: '',
    error: null
  },
  reducers: {},
  extraReducers: build => {
    build.addCase(searchByTermThunk.pending, (state, action) => {
      state.query = action.meta.arg.query
      state.loading = true
    })

    build.addCase(searchByTermThunk.fulfilled, (state, action) => {
      console.log(action.payload)
      state.data = action.payload as Track[]
    })
  }
})

export default searchSlice.reducer
