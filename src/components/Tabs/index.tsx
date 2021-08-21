import React from 'react'
import { useTheme } from 'styled-components'

import sparkle from '../../assets/icons/sparkle.svg'
import heart from '../../assets/icons/heart.svg'

import Tab from '../Tab'

import { Container } from './styles'

const Tabs = () => {
  const { primary, secondary } = useTheme()

  return (
    <Container>
      <Tab title='Tops' icon={sparkle} titleColor={primary} />
      <Tab title='Like' icon={heart} titleColor={secondary} />
    </Container>
  )
}

export default Tabs
