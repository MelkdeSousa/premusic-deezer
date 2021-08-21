import React from 'react'

import { Container, Icon, Title } from './styles'

interface TabProps {
  title: string
  icon: string
  titleColor: string
}

const Tab = ({ title, icon, titleColor }: TabProps) => {
  return (
    <Container>
      <Icon src={icon} />
      <Title color={titleColor}>{title}</Title>
    </Container>
  )
}

export default Tab
