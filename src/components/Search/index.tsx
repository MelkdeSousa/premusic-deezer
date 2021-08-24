import React, { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../store/index'
import { searchByTermThunk } from '../../store/ducks/Search'

import { Container, Field, Button, Magnifying } from './styles'

const Search = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [query, setQuery] = useState('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (query) dispatch(searchByTermThunk({ query }))
  }

  return (
    <Container onSubmit={handleSearch}>
      <Field
        type='text'
        name='search'
        id='search'
        placeholder='Search by artist, album or title music'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <Button type='submit'>
        <Magnifying />
      </Button>
    </Container>
  )
}

export default Search
