import React from 'react'

import { Container, Avatar, Text } from './styles'

const ProfileCard = () => {
  return (
    <Container href='https://github.com/melkdesousa' target='_blank'>
      <Avatar src='https://github.com/melkdesousa.png' />
      <Text>Created by MelkdeSousa</Text>
    </Container>
  )
}

export default ProfileCard
