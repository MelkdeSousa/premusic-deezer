import React, { ReactNode } from 'react'

import Search from '../../components/Search'
import ProfileCard from '../../components/ProfileCard'

import { Container, Title, LogoDeezer } from './styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Container>
        <Title>
          Premusic - Deezer
          <LogoDeezer />
        </Title>
        <Search />
        {children}
      </Container>
      <ProfileCard />
    </>
  )
}

export default Layout
