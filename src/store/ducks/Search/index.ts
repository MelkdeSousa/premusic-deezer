import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Tracks } from '../../../@types'

import deezerAPI from '../../../services/deezer.api'

type SearchByTermThunk = {
  query: string
  index?: number
  limit?: number
}

export const searchByTermThunk = createAsyncThunk(
  '@search/searchByTerm',
  async ({ query, index = 0, limit = 10 }: SearchByTermThunk) => {
    try {
      const { data } = await deezerAPI(
        `search?q=${query}&index=${index}&limit=${limit}`
      )
      return data
    } catch (err) {
      console.error(err)
    }
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
  extraReducers: builder => {
    builder.addCase(searchByTermThunk.pending, (state, action) => {
      state.query = action.meta.arg.query
      state.loading = true
    })

    builder.addCase(
      searchByTermThunk.fulfilled,
      (state, action: PayloadAction<Tracks>) => {
        state.data.push(...action.payload)
      }
    )

    builder.addCase(searchByTermThunk.rejected, (state, action) => {})
  }
})

export default searchSlice.reducer
