import React, { HTMLAttributes } from 'react'

import { Container, Icon, Title } from './styles'

type TabProps = {
  title: string
  icon: string
  titleColor: string
} & HTMLAttributes<HTMLDivElement>

const Tab = ({ title, icon, titleColor, ...props }: TabProps) => {
  return (
    <Container {...props}>
      <Icon src={icon} />
      <Title color={titleColor}>{title}</Title>
    </Container>
  )
}

export default Tab
