import React, { HTMLAttributes } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Icon, Title } from './styles'

type TabProps = {
  title: string
  icon: string
  titleColor: string
} & HTMLAttributes<HTMLDivElement>

const Tab = ({ title, icon, titleColor, ...props }: TabProps) => {
  const history = useHistory()

  const path = history.location.pathname.replace('/', '')

  return (
    <Container {...props} isActive={path === title.toLowerCase()}>
      <Icon src={icon} />
      <Title color={titleColor}>{title}</Title>
    </Container>
  )
}

export default Tab
