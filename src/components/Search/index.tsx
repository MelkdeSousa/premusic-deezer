import React from 'react'

import { Container } from './styles'

const Search = () => {
  return (
    <Container>
      <form>
        <fieldset>
          <label htmlFor='search'>
            Search by album, artist, or music title
          </label>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search by artist, album or title music'
          />
          <button type='submit'>Search</button>
        </fieldset>
      </form>
    </Container>
  )
}

export default Search
