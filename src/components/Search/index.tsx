import React from 'react'

import { Container, Field, Button, Magnifying } from './styles'

const Search = () => {
  return (
    <Container>
      <Field
        type='text'
        name='search'
        id='search'
        placeholder='Search by artist, album or title music'
      />
      <Button type='submit'>
        <Magnifying />
      </Button>
    </Container>
  )
}

export default Search
