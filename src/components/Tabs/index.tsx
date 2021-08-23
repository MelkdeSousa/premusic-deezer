import React from 'react'
import { useTheme } from 'styled-components'

import sparkle from '../../assets/icons/sparkle.svg'
import heart from '../../assets/icons/heart.svg'

import Tab from '../Tab'

import { Container } from './styles'
import { useHistory } from 'react-router-dom'

const Tabs = () => {
  const { primary, secondary } = useTheme()
  const history = useHistory()

  return (
    <Container>
      <Tab
        onClick={() => history.push('/tops')}
        title='Tops'
        icon={sparkle}
        titleColor={primary}
      />
      <Tab
        onClick={() => history.push('/likes')}
        title='Like'
        icon={heart}
        titleColor={secondary}
      />
    </Container>
  )
}

export default Tabs
