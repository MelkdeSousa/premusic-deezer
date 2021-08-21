import styled from 'styled-components'

import logoDeezer from '../../assets/images/logo-deezer.svg'

export const Container = styled.div`
  max-width: 50vw;
  height: 100vh;

  margin: auto;
  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-family: Ubuntu;
  font-weight: 700;
  font-size: 4.8rem;
  
  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.white};

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const LogoDeezer = styled.img.attrs({
  src: logoDeezer
})``
